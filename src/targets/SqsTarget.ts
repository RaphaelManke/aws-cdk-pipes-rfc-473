import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IQueue } from 'aws-cdk-lib/aws-sqs';
import { IPipeTarget } from '../PipeTarget';

export interface SqsTargetProps {
  /**
   * `CfnPipe.PipeTargetSqsQueueParametersProperty.MessageDeduplicationId`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetsqsqueueparameters.html#cfn-pipes-pipe-pipetargetsqsqueueparameters-messagededuplicationid
   */
  readonly messageDeduplicationId?: string;
  /**
   * `CfnPipe.PipeTargetSqsQueueParametersProperty.MessageGroupId`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetsqsqueueparameters.html#cfn-pipes-pipe-pipetargetsqsqueueparameters-messagegroupid
   */
  readonly messageGroupId?: string;
}

export class SqsTarget implements IPipeTarget {
  private queue: IQueue;
  readonly targetArn: string;
  readonly targetParameters: CfnPipe.PipeTargetParametersProperty;

  constructor(queue: IQueue, props?: SqsTargetProps) {
    this.queue = queue;
    this.targetArn = queue.queueArn;
    this.targetParameters = {
      sqsQueueParameters: {
        messageDeduplicationId: props?.messageDeduplicationId,
        messageGroupId: props?.messageGroupId,
      },
    };
  }

  public grantPush(grantee: IRole): void {
    this.queue.grantSendMessages(grantee);
  }
}