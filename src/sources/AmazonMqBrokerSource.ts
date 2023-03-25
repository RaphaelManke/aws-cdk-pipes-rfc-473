import { CfnBroker } from 'aws-cdk-lib/aws-amazonmq';
import { IRole, Policy, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { IPipeSource, IPipeSourceCommonParameters } from '../PipeSource';

export interface IMQBrokerAccessCredentials {
  basicAuth: ISecret;
}

export interface IAmazonMqBrokerSourceProps extends IPipeSourceCommonParameters {
  /**
   * `CfnPipe.PipeSourceActiveMQBrokerParametersProperty.Credentials`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-credentials
   */
  //  The ARN of the Secrets Manager secret.


  readonly credentials: IMQBrokerAccessCredentials;
  /**
   * `CfnPipe.PipeSourceActiveMQBrokerParametersProperty.QueueName`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-queuename
   */
  readonly queueName: string;
};

export abstract class AmazonMqBrokerSource implements IPipeSource {
  private readonly broker: CfnBroker;
  private readonly basicAuthSecret: ISecret;
  sourceArn: string;
  sourceParameters?: CfnPipe.PipeSourceParametersProperty;

  constructor(broker: CfnBroker, props: IAmazonMqBrokerSourceProps) {

    this.basicAuthSecret = props.credentials.basicAuth;

    this.broker = broker;
    this.sourceArn = broker.attrArn;


  }

  private brokerGrantRead(grantee: IRole): void {
    grantee.attachInlinePolicy(new Policy(grantee, 'PipeSourcePolicy', {
      statements: [
        new PolicyStatement({
          actions: ['mq:Connect'],
          resources: [this.broker.attrArn],
        }),
      ],
    }));
  }

  grantRead(grantee: IRole): void {
    this.basicAuthSecret.grantRead(grantee);
    this.brokerGrantRead(grantee);

  }
}
