import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IQueue } from 'aws-cdk-lib/aws-sqs';
import { PipeSource } from '../pipe';


export class SqsSource extends PipeSource {
  private queue: IQueue;

  constructor(queue: IQueue, props?:CfnPipe.PipeSourceSqsQueueParametersProperty) {
    super(queue.queueArn, { sqsQueueParameters: props });
    this.queue = queue;

  }

  public grantRead(grantee: IRole): void {
    this.queue.grantConsumeMessages(grantee);
  }
}