import { IResolvable } from 'aws-cdk-lib';
import { IRole, Policy, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { PipeSourceStartingPosition } from './PipeSourceStartingPosition';
import { IPipeSource, IPipeSourceCommonParameters } from '../PipeSource';


export interface IMskSourceCredentials {
  readonly clientCertificateTlsAuth?: ISecret;
  readonly saslScram512Auth?: ISecret;
}

export interface ISelfManagedKafkaAccessConfigurationVpcProperty {
  /**
         * `CfnPipe.SelfManagedKafkaAccessConfigurationVpcProperty.SecurityGroup`
         *
         * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc.html#cfn-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc-securitygroup
         */
  readonly securityGroup?: string[];
  /**
    * `CfnPipe.SelfManagedKafkaAccessConfigurationVpcProperty.Subnets`
    *
    * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc.html#cfn-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc-subnets
    */
  readonly subnets?: string[];
}
export interface IMskSourceProps extends IPipeSourceCommonParameters {
  topicName: string;
  consumerGroupId?: string;
  startingPosition?: PipeSourceStartingPosition;
  credentials?: IMskSourceCredentials;
  additionalBootstrapServers?: string[];
  serverRootCaCertificate?: ISecret;
  vpcConfig: ISelfManagedKafkaAccessConfigurationVpcProperty;
}


export class SelfManagedKafkakSource implements IPipeSource {
  private readonly sourceConfigSecrets: ISecret[] = [];
  sourceArn: string;
  sourceParameters?: IResolvable | CfnPipe.PipeSourceParametersProperty | undefined;

  constructor(bootstrapUrl:string, props: IMskSourceProps) {
    this.sourceArn = `smk://${bootstrapUrl}`;

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

    if (props.serverRootCaCertificate) {
      this.sourceConfigSecrets.push(props.serverRootCaCertificate);
    }

    this.sourceParameters = {
      selfManagedKafkaParameters: {
        topicName: props.topicName,
        batchSize: props.batchSize,
        maximumBatchingWindowInSeconds: props?.maximumBatchingWindowInSeconds,
        credentials: credentials,
        consumerGroupId: props?.consumerGroupId,
        startingPosition: props?.startingPosition,
        additionalBootstrapServers: props.additionalBootstrapServers,
        serverRootCaCertificate: props.serverRootCaCertificate?.secretArn,
        vpc: props.vpcConfig,
      },
    };
  }


  grantRead(grantee: IRole): void {
    const policies = createReadPolicyStatements();
    const policy = new Policy(grantee, 'PipeSourcePolicy', {
      statements: policies,
    });
    grantee.attachInlinePolicy(policy);

    this.sourceConfigSecrets.forEach((secret) =>
      secret.grantRead(grantee),
    );
  }

}


const createReadPolicyStatements = () : PolicyStatement[] => {
  const statements: PolicyStatement[] = [];
  // TODO: check which permissions are needed

  return statements;
};