import { IResolvable } from 'aws-cdk-lib';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IQueue } from 'aws-cdk-lib/aws-sqs';
import { IPipeSource, IPipeSourceCommonParameters } from '../PipeSource';
import { IPipeFilterPattern, IPipeSourceFilter } from '../PipeSourceFilter';


export interface ISqsSourceProps extends IPipeSourceCommonParameters {
}

export class SqsSource implements IPipeSource {
  private queue: IQueue;

  sourceArn: string;
  sourceParameters?: IResolvable | CfnPipe.PipeSourceParametersProperty | undefined;
  constructor(queue: IQueue, props?: ISqsSourceProps) {
    this.queue = queue;

    this.sourceArn = queue.queueArn;
    const queueParameters = {
      batchSize: props?.batchSize,
      maximumBatchingWindowInSeconds: props?.maximumBatchingWindowInSeconds,
    };
    this.sourceParameters = {
      sqsQueueParameters: isNonEmptyObject(queueParameters) ? queueParameters : undefined,
    };
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

export class PipeSqsFilterPattern implements IPipeSourceFilter {
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

  filters: IPipeFilterPattern[];

  constructor(props: IPipeFilterPattern[]) {
    this.filters = props;
  }
}

function isNonEmptyObject(obj: any) {
  return Object.values(obj).filter(Boolean).length > 0;
}
