import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IResolvable } from 'aws-cdk-lib/core';

export interface IPipeSourceProperties {
  /**
   * `CfnPipe.PipeSourceParametersProperty.ActiveMQBrokerParameters`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-activemqbrokerparameters
   */
  readonly activeMqBrokerParameters?: CfnPipe.PipeSourceActiveMQBrokerParametersProperty | IResolvable;
  /**
   * `CfnPipe.PipeSourceParametersProperty.DynamoDBStreamParameters`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-dynamodbstreamparameters
   */
  readonly dynamoDbStreamParameters?: CfnPipe.PipeSourceDynamoDBStreamParametersProperty | IResolvable;

  /**
   * `CfnPipe.PipeSourceParametersProperty.KinesisStreamParameters`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-kinesisstreamparameters
   */
  readonly kinesisStreamParameters?: CfnPipe.PipeSourceKinesisStreamParametersProperty | IResolvable;
  /**
   * `CfnPipe.PipeSourceParametersProperty.ManagedStreamingKafkaParameters`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-managedstreamingkafkaparameters
   */
  readonly managedStreamingKafkaParameters?: CfnPipe.PipeSourceManagedStreamingKafkaParametersProperty | IResolvable;
  /**
   * `CfnPipe.PipeSourceParametersProperty.RabbitMQBrokerParameters`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-rabbitmqbrokerparameters
   */
  readonly rabbitMqBrokerParameters?: CfnPipe.PipeSourceRabbitMQBrokerParametersProperty | IResolvable;
  /**
   * `CfnPipe.PipeSourceParametersProperty.SelfManagedKafkaParameters`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-selfmanagedkafkaparameters
   */
  readonly selfManagedKafkaParameters?: CfnPipe.PipeSourceSelfManagedKafkaParametersProperty | IResolvable;
  /**
   * `CfnPipe.PipeSourceParametersProperty.SqsQueueParameters`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-sqsqueueparameters
   */
  readonly sqsQueueParameters?: CfnPipe.PipeSourceSqsQueueParametersProperty | IResolvable;
}

export interface IPipeSourceCommonParameters {
  /**
    * The maximum number of records to include in each batch.
    */
  readonly batchSize?: number;

  /**
     * The maximum length of a time to wait for events.
     */
  readonly maximumBatchingWindowInSeconds?: number;
}


export interface IPipeSource {
  sourceArn: string;
  sourceParameters?: CfnPipe.PipeSourceParametersProperty | IResolvable;

  grantRead(grantee: IRole): void;
}


