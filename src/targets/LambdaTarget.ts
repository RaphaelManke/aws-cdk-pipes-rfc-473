import { IRole } from 'aws-cdk-lib/aws-iam';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IInvocationType } from './IInvocationType';
import { IPipeTarget } from '../PipeTarget';

export interface ILambdaTargetProps {
  invocationType?: IInvocationType;
}
export class LambdaTarget implements IPipeTarget {
  private readonly lambda: IFunction;
  targetArn: string;
  targetParameters: CfnPipe.PipeTargetParametersProperty;

  constructor(lambda: IFunction, props? : ILambdaTargetProps ) {
    this.lambda = lambda;
    this.targetArn = lambda.functionArn;
    this.targetParameters = {
      lambdaFunctionParameters: {
        invocationType: props?.invocationType,
      },
    };
  }

  grantPush(grantee: IRole): void {
    this.lambda.grantInvoke(grantee);
  }
}