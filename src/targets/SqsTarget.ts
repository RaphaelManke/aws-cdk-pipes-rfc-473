import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IQueue } from 'aws-cdk-lib/aws-sqs';
import { PipeTarget } from '../pipe';

export interface SqsTargetProps {
  queue: IQueue;
  sqsQueueParameters?: CfnPipe.PipeTargetSqsQueueParametersProperty;
}

export class SqsTarget extends PipeTarget {
  constructor(props: SqsTargetProps) {
    super(props.queue.queueArn, { sqsQueueParameters: props.sqsQueueParameters });
  }
}