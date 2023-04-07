import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IInputTransformation } from './PipeInputTransformation';

export interface IPipeTargetCommonParameters {
  readonly inputTemplate?: IInputTransformation;
}

export interface IPipeTarget {
  readonly targetArn: string;
  readonly targetParameters: CfnPipe.PipeTargetParametersProperty;

  grantPush(grantee: IRole): void;
}

