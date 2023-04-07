import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { ITopic } from 'aws-cdk-lib/aws-sns';
import { IPipeTarget, IPipeTargetCommonParameters } from '../PipeTarget';

export interface ISnsTargetProps extends IPipeTargetCommonParameters {
}
export class SnsTarget implements IPipeTarget {
  private topic: ITopic;
  readonly targetArn: string;
  readonly targetParameters: CfnPipe.PipeTargetParametersProperty;

  constructor(topic: ITopic, props?: ISnsTargetProps) {
    this.topic = topic;
    this.targetArn = topic.topicArn;
    this.targetParameters = {
      inputTemplate: props?.inputTemplate?.inputTemplate,
    };
  }

  grantPush(grantee: IRole): void {
    this.topic.grantPublish(grantee);
  }
}