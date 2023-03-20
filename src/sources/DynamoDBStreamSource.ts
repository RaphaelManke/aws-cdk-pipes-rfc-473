import { IResolvable } from 'aws-cdk-lib';
import { ITable } from 'aws-cdk-lib/aws-dynamodb';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IPipeSource } from '../PipeSource';


export interface IDynamoDBStreamSourceProps {
  /**
         * `CfnPipe.PipeSourceDynamoDBStreamParametersProperty.BatchSize`
         *
         * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-batchsize
         */
  readonly batchSize?: number;
  /**
   * `CfnPipe.PipeSourceDynamoDBStreamParametersProperty.DeadLetterConfig`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-deadletterconfig
   */
  readonly deadLetterConfig?: CfnPipe.DeadLetterConfigProperty | IResolvable;
  /**
   * `CfnPipe.PipeSourceDynamoDBStreamParametersProperty.MaximumBatchingWindowInSeconds`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-maximumbatchingwindowinseconds
   */
  readonly maximumBatchingWindowInSeconds?: number;
  /**
   * `CfnPipe.PipeSourceDynamoDBStreamParametersProperty.MaximumRecordAgeInSeconds`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-maximumrecordageinseconds
   */
  readonly maximumRecordAgeInSeconds?: number;
  /**
   * `CfnPipe.PipeSourceDynamoDBStreamParametersProperty.MaximumRetryAttempts`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-maximumretryattempts
   */
  readonly maximumRetryAttempts?: number;
  /**
   * `CfnPipe.PipeSourceDynamoDBStreamParametersProperty.OnPartialBatchItemFailure`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-onpartialbatchitemfailure
   */
  readonly onPartialBatchItemFailure?: string;
  /**
   * `CfnPipe.PipeSourceDynamoDBStreamParametersProperty.ParallelizationFactor`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-parallelizationfactor
   */
  readonly parallelizationFactor?: number;
  /**
   * `CfnPipe.PipeSourceDynamoDBStreamParametersProperty.StartingPosition`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-startingposition
   */
  readonly startingPosition: string;
}


export class DynamoDBStreamSource implements IPipeSource {
  private table: ITable;

  sourceArn: string;
  sourceParameters?: CfnPipe.PipeSourceParametersProperty;

  constructor(table: ITable, props: IDynamoDBStreamSourceProps) {
    this.table = table;

    if (!table.tableStreamArn) {
      throw new Error('Table must have a stream enabled');
    }

    this.sourceArn = table.tableStreamArn;
    this.sourceParameters = {
      dynamoDbStreamParameters: {
        batchSize: props.batchSize,
        startingPosition: props.startingPosition,
        maximumBatchingWindowInSeconds: props.maximumBatchingWindowInSeconds,
        maximumRecordAgeInSeconds: props.maximumRecordAgeInSeconds,
        maximumRetryAttempts: props.maximumRetryAttempts,
        onPartialBatchItemFailure: props.onPartialBatchItemFailure,
        parallelizationFactor: props.parallelizationFactor,
        deadLetterConfig: props.deadLetterConfig,
      },
    };

  }

  public grantRead(grantee: IRole): void {
    this.table.grantStreamRead(grantee);
  }
}