import { CfnBroker } from 'aws-cdk-lib/aws-amazonmq';
import { AmazonMqBrokerSource, IAmazonMqBrokerSourceProps } from './AmazonMqBrokerSource';

export interface IRabbitMqBrokerSourceProps extends IAmazonMqBrokerSourceProps {
  virtualHost: string;
}

export class RabbitMqBrokerSource extends AmazonMqBrokerSource {
  constructor(broker: CfnBroker, props: IRabbitMqBrokerSourceProps) {
    super(broker, props);
    this.sourceParameters = {
      rabbitMqBrokerParameters: {
        batchSize: props.batchSize,
        maximumBatchingWindowInSeconds: props.maximumBatchingWindowInSeconds,
        credentials: { basicAuth: props.credentials.basicAuth.secretArn },
        queueName: props.queueName,
        virtualHost: props.virtualHost,
      },
    };
  }
}