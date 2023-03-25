import { Queue } from 'aws-cdk-lib/aws-sqs';


export interface PipeSourceDeadLetterConfig {
  /**
     * The ARN of the Amazon SQS queue specified as the target for the dead-letter queue.
     * see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-deadletterconfig.html#cfn-pipes-pipe-deadletterconfig-arn
     */
  queue: Queue;
}
