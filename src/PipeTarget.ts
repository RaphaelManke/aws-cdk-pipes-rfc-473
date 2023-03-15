import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';

export interface IPipeTarget {
  targetArn: string;
  targetParameters: CfnPipe.PipeTargetParametersProperty;

  grantPush(grantee: IRole): void;
}

export abstract class PipeTarget implements IPipeTarget {
  public targetArn: string;
  public targetParameters: CfnPipe.PipeTargetParametersProperty;
  constructor(targetArn: string, props: CfnPipe.PipeTargetParametersProperty) {
    this.targetArn = targetArn;
    this.targetParameters = props;
  }

  public abstract grantPush(grantee: IRole): void;
}
