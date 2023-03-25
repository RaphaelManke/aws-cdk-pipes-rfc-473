import { CfnBroker } from 'aws-cdk-lib/aws-amazonmq';
import { AmazonMqBrokerSource, IAmazonMqBrokerSourceProps } from './AmazonMqBrokerSource';

export class ActiveMqBrokerSource extends AmazonMqBrokerSource {
  constructor(broker: CfnBroker, props: IAmazonMqBrokerSourceProps) {
    super(broker, props);
    this.sourceParameters = {
      activeMqBrokerParameters: {
        batchSize: props.batchSize,
        maximumBatchingWindowInSeconds: props.maximumBatchingWindowInSeconds,
        credentials: { basicAuth: props.credentials.basicAuth.secretArn },
        queueName: props.queueName,
      },
    };
  }
}