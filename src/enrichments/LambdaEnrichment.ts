import { IRole } from 'aws-cdk-lib/aws-iam';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { PipeEnrichment, PipeInputTransformation } from '../pipe';

export class LambdaEnrichment extends PipeEnrichment {
  private lambda : IFunction;

  constructor(lambda: IFunction, props: {inputTransformation?: PipeInputTransformation}) {
    super(lambda.functionArn, { inputTemplate: props.inputTransformation?.inputTemplate });
    this.lambda = lambda;
  }

  grantInvoke(grantee: IRole): void {
    this.lambda.grantInvoke(grantee);
  }
}