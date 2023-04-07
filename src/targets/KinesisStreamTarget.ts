import { IRole } from 'aws-cdk-lib/aws-iam';
import { IStream } from 'aws-cdk-lib/aws-kinesis';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IPipeTarget, IPipeTargetCommonParameters } from '../PipeTarget';

export interface IKinesisStreamTargetProps extends IPipeTargetCommonParameters {
  /**
         * Determines which shard in the stream the data record is assigned to. Partition keys are Unicode strings with a maximum length limit of 256 characters for each key. Amazon Kinesis Data Streams uses the partition key as input to a hash function that maps the partition key and associated data to a specific shard. Specifically, an MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream.
         *
         * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetkinesisstreamparameters.html#cfn-pipes-pipe-pipetargetkinesisstreamparameters-partitionkey
         */
  readonly partitionKey: string;
}

export class KinesisStreamTarget implements IPipeTarget {
  private readonly stream: IStream;
  readonly targetArn: string;
  readonly targetParameters: CfnPipe.PipeTargetParametersProperty;

  constructor(stream: IStream, props: IKinesisStreamTargetProps) {
    this.stream = stream;
    this.targetArn = stream.streamArn;
    this.targetParameters = {
      inputTemplate: props.inputTemplate?.inputTemplate,
      kinesisStreamParameters: {
        partitionKey: props.partitionKey,
      },
    };
  }

  grantPush(grantee: IRole): void {
    this.stream.grantWrite(grantee);
  }
}