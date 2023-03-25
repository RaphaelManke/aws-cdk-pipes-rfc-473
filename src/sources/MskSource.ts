import { IResolvable, isResolvableObject, Token } from 'aws-cdk-lib';
import { IRole, Policy, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { CfnCluster, CfnServerlessCluster } from 'aws-cdk-lib/aws-msk';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { PipeSourceStartingPosition } from './PipeSourceStartingPosition';
import { IPipeSource, IPipeSourceCommonParameters } from '../PipeSource';


export interface IMskSourceCredentials {
  readonly clientCertificateTlsAuth?: ISecret;
  readonly saslScram512Auth?: ISecret;
}

export interface IMskSourceProps extends IPipeSourceCommonParameters {
  topicName: string;
  consumerGroupId?: string;
  startingPosition?: PipeSourceStartingPosition;
  credentials?: IMskSourceCredentials;
}


export class MskSource implements IPipeSource {
  private readonly cluster: CfnCluster | CfnServerlessCluster;
  private readonly sourceConfigSecrets: ISecret[] = [];
  sourceArn: string;
  sourceParameters?: IResolvable | CfnPipe.PipeSourceParametersProperty | undefined;

  constructor(cluster: CfnCluster | CfnServerlessCluster, props: IMskSourceProps) {
    this.cluster = cluster;
    this.sourceArn = cluster.attrArn;

    const credentials = props.credentials ? {
      clientCertificateTlsAuth: props.credentials.clientCertificateTlsAuth?.secretArn,
      saslScram512Auth: props.credentials.saslScram512Auth?.secretArn,
    } : undefined;

    if (props.credentials?.clientCertificateTlsAuth) {
      this.sourceConfigSecrets.push(props.credentials.clientCertificateTlsAuth);
    }

    if (props.credentials?.saslScram512Auth) {
      this.sourceConfigSecrets.push(props.credentials.saslScram512Auth);
    }


    this.sourceParameters = {
      managedStreamingKafkaParameters: {
        topicName: props.topicName,
        batchSize: props.batchSize,
        maximumBatchingWindowInSeconds: props?.maximumBatchingWindowInSeconds,
        credentials: credentials,
        consumerGroupId: props?.consumerGroupId,
        startingPosition: props?.startingPosition,

      },
    };
  }


  grantRead(grantee: IRole): void {
    const policies = createReadPolicyStatements(this.cluster);
    const policy = new Policy(grantee, 'PipeSourcePolicy', {
      statements: policies,
    });
    grantee.attachInlinePolicy(policy);

    this.sourceConfigSecrets.forEach((secret) =>
      secret.grantRead(grantee),
    );
  }

}


const createReadPolicyStatements = (cluster: CfnCluster | CfnServerlessCluster) : PolicyStatement[] => {

  const statements: PolicyStatement[] = [];

  statements.push(new PolicyStatement({
    sid: 'AllowReadKafkaCluster',
    actions: ['kafka:DescribeCluster',
      'kafka:DescribeClusterV2',
      'kafka:GetBootstrapBrokers'],
    resources: [cluster.attrArn],
  }));

  statements.push(new PolicyStatement({
    sid: 'AllowReadKafkaNetwork',
    actions: [
      'ec2:DescribeNetworkInterfaces',
      'ec2:DescribeSubnets',
      'ec2:DescribeSecurityGroups',
      'ec2:DescribeVpcs',
    ],
    resources: ['*'],
  }));


  let subnetIds: string[] = [];
  if (cluster instanceof CfnCluster) {
    // TODO: make a proper Resolvable check
    if ( cluster.brokerNodeGroupInfo instanceof Token || !isResolvableObject(cluster.brokerNodeGroupInfo)) {
      throw new Error('Unable to resolve brokerNodeGroupInfo');
    }

    const brokerNodeGroupInfo: CfnCluster.BrokerNodeGroupInfoProperty =
    cluster.brokerNodeGroupInfo as unknown as CfnCluster.BrokerNodeGroupInfoProperty ;
    subnetIds = brokerNodeGroupInfo.clientSubnets;

  } else {
    if ( cluster.vpcConfigs instanceof Token || !isResolvableObject(cluster.vpcConfigs)) {
      throw new Error('Unable to resolve brokerNodeGroupInfo');
    }

    const vpcConfig: CfnServerlessCluster.VpcConfigProperty =
      cluster.vpcConfigs as unknown as CfnServerlessCluster.VpcConfigProperty ;
    subnetIds = vpcConfig.subnetIds;
  }

  statements.push(new PolicyStatement({
    sid: 'AllowCreateNetworkInterfaces',
    actions: [
      'ec2:CreateNetworkInterface',
      'ec2:DeleteNetworkInterface',
    ],
    resources: ['*'],
    conditions: {
      StringEqualsIfExists: {
        'ec2:SubnetID': subnetIds,
      },
    },
  }));


  return statements;
};