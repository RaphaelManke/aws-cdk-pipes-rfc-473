import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { ITopic } from 'aws-cdk-lib/aws-sns';
import { IPipeTarget } from '../PipeTarget';

export class SnsTarget implements IPipeTarget {
  private topic: ITopic;
  readonly targetArn: string;
  readonly targetParameters: CfnPipe.PipeTargetParametersProperty;

  constructor(topic: ITopic) {
    this.topic = topic;
    this.targetArn = topic.topicArn;
    this.targetParameters = {
    };
  }

  grantPush(grantee: IRole): void {
    this.topic.grantPublish(grantee);
  }
}