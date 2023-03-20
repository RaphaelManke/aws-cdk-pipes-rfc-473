import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';

export interface IPipeTarget {
  targetArn: string;
  targetParameters: CfnPipe.PipeTargetParametersProperty;

  grantPush(grantee: IRole): void;
}

