import { IResolvable } from 'aws-cdk-lib';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { Stream } from 'aws-cdk-lib/aws-kinesis';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IQueue } from 'aws-cdk-lib/aws-sqs';
import { PipeSourceDeadLetterConfig } from './PipeSourceDeadLetterConfig';
import { PipeSourceOnPartialBatchItemFailure } from './PipeSourceOnPartialBatchItemFailure';
import { PipeSourceStartingPosition } from './PipeSourceStartingPosition';
import { IPipeSource, IPipeSourceCommonParameters } from '../PipeSource';

export interface IKinesisStreamSourceProps extends IPipeSourceCommonParameters {

  /**
      * `CfnPipe.PipeSourceKinesisStreamParametersProperty.DeadLetterConfig`
      *
      * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-deadletterconfig
      */
  readonly deadLetterConfig?: PipeSourceDeadLetterConfig;

  /**
      * `CfnPipe.PipeSourceKinesisStreamParametersProperty.MaximumRecordAgeInSeconds`
      *
      * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-maximumrecordageinseconds
      */
  readonly maximumRecordAgeInSeconds?: number;
  /**
      * `CfnPipe.PipeSourceKinesisStreamParametersProperty.MaximumRetryAttempts`
      *
      * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-maximumretryattempts
      */
  readonly maximumRetryAttempts?: number;
  /**
      * `CfnPipe.PipeSourceKinesisStreamParametersProperty.OnPartialBatchItemFailure`
      *
      * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-onpartialbatchitemfailure
      */
  readonly onPartialBatchItemFailure?: PipeSourceOnPartialBatchItemFailure;
  /**
      * `CfnPipe.PipeSourceKinesisStreamParametersProperty.ParallelizationFactor`
      *
      * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-parallelizationfactor
      */
  readonly parallelizationFactor?: number;
  /**
      * `CfnPipe.PipeSourceKinesisStreamParametersProperty.StartingPosition`
      *
      * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-startingposition
      */
  readonly startingPosition: PipeSourceStartingPosition;
  /**
      * `CfnPipe.PipeSourceKinesisStreamParametersProperty.StartingPositionTimestamp`
      *
      * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-startingpositiontimestamp
      */
  readonly startingPositionTimestamp?: string;
}


export class KinesisStreamSource implements IPipeSource {
  private readonly stream: Stream;
  private readonly dlq?: IQueue;

  sourceArn: string;
  sourceParameters?: IResolvable | CfnPipe.PipeSourceParametersProperty | undefined;

  constructor(kinesisStream: Stream, props: IKinesisStreamSourceProps) {
    if (props.startingPosition === PipeSourceStartingPosition.AT_TIMESTAMP && !props.startingPositionTimestamp) {
      throw new Error('startingPositionTimestamp must be set when startingPosition is AT_TIMESTAMP');
    }
    this.stream = kinesisStream;

    const deadLetterConfig = props.deadLetterConfig ? {
      arn: props.deadLetterConfig.queue.queueArn,
    } : undefined;

    if ( props.deadLetterConfig?.queue ) {
      this.dlq = props.deadLetterConfig?.queue;
    }

    this.sourceArn = kinesisStream.streamArn;
    this.sourceParameters = {
      kinesisStreamParameters: {
        deadLetterConfig: deadLetterConfig,
        maximumRecordAgeInSeconds: props.maximumRecordAgeInSeconds,
        maximumRetryAttempts: props.maximumRetryAttempts,
        onPartialBatchItemFailure: props.onPartialBatchItemFailure,
        parallelizationFactor: props.parallelizationFactor,
        startingPositionTimestamp: props.startingPositionTimestamp,
        batchSize: props.batchSize,
        maximumBatchingWindowInSeconds: props.maximumBatchingWindowInSeconds,
        startingPosition: props.startingPosition,
      },
    };
  }
  grantRead(grantee: IRole): void {
    this.stream.grantRead(grantee);
    if (this.dlq) {
      this.dlq.grantSendMessages(grantee);
    }
  }
}