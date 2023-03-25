import { ITable } from 'aws-cdk-lib/aws-dynamodb';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { PipeSourceDeadLetterConfig } from './PipeSourceDeadLetterConfig';
import { PipeSourceOnPartialBatchItemFailure } from './PipeSourceOnPartialBatchItemFailure';
import { PipeSourceStartingPosition } from './PipeSourceStartingPosition';
import { IPipeSource, IPipeSourceCommonParameters } from '../PipeSource';


export interface IDynamoDBStreamSourceProps extends IPipeSourceCommonParameters {
  /**
   * `CfnPipe.PipeSourceDynamoDBStreamParametersProperty.DeadLetterConfig`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-deadletterconfig
   */
  readonly deadLetterConfig?: PipeSourceDeadLetterConfig;
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
  readonly onPartialBatchItemFailure?: PipeSourceOnPartialBatchItemFailure;
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
  readonly startingPosition: PipeSourceStartingPosition;
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

    const deadLetterConfig: CfnPipe.DeadLetterConfigProperty | undefined = props.deadLetterConfig ? {
      arn: props.deadLetterConfig.queue.queueArn,
    } : undefined;

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
        deadLetterConfig: deadLetterConfig,
      },
    };

  }

  public grantRead(grantee: IRole): void {
    this.table.grantStreamRead(grantee);
  }
}