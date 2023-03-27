import { join } from 'path';
import { App, Duration, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { Policy, PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { CfnServerlessCluster } from 'aws-cdk-lib/aws-msk';
import { LogsTarget, MskSource, Pipe } from '../../src';

const app = new App();
const stack = new Stack(app, 'E2EPipesMsServerless', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

const vpc = Vpc.fromLookup(stack, 'Vpc', { isDefault: true });
const subnets = vpc.publicSubnets.map((subnet) => subnet.subnetId);
const kafkaCluster = new CfnServerlessCluster(stack, 'KafkaServerlessCluster', {
  clusterName: 'E2EPipesMsServerlessCluster',
  clientAuthentication: {
    sasl: {
      iam: {
        enabled: true,
      },
    },
  },
  vpcConfigs: [
    {
      subnetIds: subnets,
    },
  ],
});
const source = new MskSource(kafkaCluster, {
  topicName: 'e2e',
});
const targetLogGroup = new LogGroup(stack, 'TargetLogGroup', {
  removalPolicy: RemovalPolicy.DESTROY,
});
const target = new LogsTarget(targetLogGroup, {
  logStreamName: 'test',
});
new Pipe(stack, 'Pipe', {
  source,
  target,
});

const { region, account } = Stack.of(stack);

/**
     * Client Policy
     */
const clientPolicy = new Policy(stack, 'ClientPolicy', {
  statements: [
    new PolicyStatement({
      actions: [
        'kafka-cluster:Connect',
        'kafka-cluster:AlterCluster',
        'kafka-cluster:DescribeCluster',
        'kafka-cluster:DescribeClusterV2',
      ],
      resources: [
        `arn:aws:kafka:${region}:${account}:cluster/${kafkaCluster.clusterName}/*`,
      ],
    }),
    new PolicyStatement({
      actions: ['kafka:GetBootstrapBrokers', 'kafka:DescribeClusterV2'],
      resources: [
        `arn:aws:kafka:${region}:${account}:cluster/${kafkaCluster.clusterName}/*`,
      ],
    }),

    new PolicyStatement({
      actions: [
        'kafka-cluster:*Topic*',
        'kafka-cluster:WriteData',
        'kafka-cluster:ReadData',
      ],
      resources: [
        `arn:aws:kafka:${region}:${account}:topic/${kafkaCluster.clusterName}/*`,
      ],
    }),
    new PolicyStatement({
      actions: ['kafka-cluster:AlterGroup', 'kafka-cluster:DescribeGroup'],
      resources: [
        `arn:aws:kafka:${region}:${account}:group/${kafkaCluster.clusterName}/*`,
      ],
    }),
  ],
});
const role = new Role(stack, 'ClientRole', {
  assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
});
clientPolicy.attachToRole(role);

/**
   * Producer
   */
const lambda = new NodejsFunction(stack, 'Producer', {
  entry: join(__dirname, 'kafkaProducer.ts'),
  runtime: Runtime.NODEJS_16_X,
  timeout: Duration.seconds(30),
  vpc,
  allowPublicSubnet: true,
  memorySize: 1024,
  //   vpcSubnets: {
  //     subnetType: SubnetType.PRIVATE_WITH_EGRESS,
  //   },
  //   securityGroups: [
  //     SecurityGroup.fromSecurityGroupId(
  //       stack,
  //       'defaultSg',
  //       vpc,
  //     ),
  //   ],
  environment: {
    MSK_CLUSTER_ARN: kafkaCluster.attrArn,
  },
});
clientPolicy.attachToRole(lambda.role!);

// const rule = new Rule(stack, 'ProducerRule', {
//   schedule: Schedule.rate(Duration.minutes(1)),
//   targets: [new LambdaFunction(lambda), new LambdaFunction(lambda, {})],
// });
