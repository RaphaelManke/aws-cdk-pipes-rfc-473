import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IResolvable } from 'aws-cdk-lib/core';


export interface IPipeSource {
  sourceArn: string;
  sourceParameters?: CfnPipe.PipeSourceParametersProperty | IResolvable;

  grantRead(grantee: IRole): void;
}

export abstract class PipeSource implements IPipeSource {
  public sourceArn: string;
  public sourceParameters?: CfnPipe.PipeSourceParametersProperty |
  IResolvable;

  constructor(sourceArn: string, props?: CfnPipe.PipeSourceParametersProperty) {
    this.sourceArn = sourceArn;
    this.sourceParameters = props;
  }

  public abstract grantRead(grantee: IRole): void;
}
