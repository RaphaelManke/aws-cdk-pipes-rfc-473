import { IRole } from 'aws-cdk-lib/aws-iam';
import { IQueue } from 'aws-cdk-lib/aws-sqs';
import { PipeSource } from '../PipeSource';
import { IPipeFilterPattern, PipeGenericFilterPattern } from '../PipeSourceFilter';


export interface ISqsSourceProps {
  batchSize?: number;
  maximumBatchingWindowInSeconds?: number;
}

export class SqsSource extends PipeSource {
  private queue: IQueue;

  constructor(queue: IQueue, props?: ISqsSourceProps) {
    const sqsQueueParameters = {
      batchSize: props?.batchSize,
      maximumBatchingWindowInSeconds: props?.maximumBatchingWindowInSeconds,
    };

    super(queue.queueArn, {
      sqsQueueParameters: isNonEmptyObject(sqsQueueParameters) ? sqsQueueParameters : undefined,
    });
    this.queue = queue;

  }

  public grantRead(grantee: IRole): void {
    this.queue.grantConsumeMessages(grantee);
  }
}


export interface ISqsAttributes {
  approximateReceiveCount?: string;
  sentTimestamp?: string;
  sequenceNumber?: string;
  messageGroupId?: string;
  senderId?: string;
  messageDeduplicationId?: string;
  approximateFirstReceiveTimestamp?: string;
}

export interface ISqsMessagePipeFilter {
  messageId?: string;
  receiptHandle?: string;
  body?: any;
  attributes?: ISqsAttributes;
  messageAttributes?: any;
  md5OfBody?: string;
}

export class PipeSqsFilterPattern extends PipeGenericFilterPattern {
  static fromSqsMessageAttributes(
    attributes: ISqsMessagePipeFilter,
  ): IPipeFilterPattern {
    const sqsProps = {
      ApproximateReceiveCount: attributes.attributes?.approximateReceiveCount,
      SentTimestamp: attributes.attributes?.sentTimestamp,
      SequenceNumber: attributes.attributes?.sequenceNumber,
      MessageGroupId: attributes.attributes?.messageGroupId,
      SenderId: attributes.attributes?.senderId,
      MessageDeduplicationId: attributes.attributes?.messageDeduplicationId,
      ApproximateFirstReceiveTimestamp:
        attributes.attributes?.approximateFirstReceiveTimestamp,
    };

    return {
      pattern: JSON.stringify({
        ...attributes,
        attributes: attributes.attributes ? sqsProps : undefined,
      }),
    };
  }
}

function isNonEmptyObject(obj: any) {
  return Object.values(obj).filter(Boolean).length > 0;
}
