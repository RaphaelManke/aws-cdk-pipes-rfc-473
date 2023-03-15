import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IQueue } from 'aws-cdk-lib/aws-sqs';
import { IPipeTarget } from '../PipeTarget';

export interface SqsTargetProps {
  queue: IQueue;
  sqsQueueParameters?: CfnPipe.PipeTargetSqsQueueParametersProperty;
}

export class SqsTarget implements IPipeTarget {
  private queue: IQueue;
  targetArn: string;
  targetParameters: CfnPipe.PipeTargetParametersProperty;

  constructor(props: SqsTargetProps) {
    this.queue = props.queue;
    this.targetArn = props.queue.queueArn;
    this.targetParameters = { sqsQueueParameters: props.sqsQueueParameters };
  }

  public grantPush(grantee: IRole): void {
    this.queue.grantSendMessages(grantee);
  }
}