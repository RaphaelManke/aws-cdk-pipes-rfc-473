import { IRole } from 'aws-cdk-lib/aws-iam';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IPipeEnrichment } from '../PipeEnrichment';
import { IInputTransformation } from '../PipeInputTransformation';

export class LambdaEnrichment implements IPipeEnrichment {
  private lambda: IFunction;
  public readonly enrichmentArn: string;
  public readonly enrichmentParameters: CfnPipe.PipeEnrichmentParametersProperty;

  constructor(lambda: IFunction, props?: { inputTransformation?: IInputTransformation }) {
    this.lambda = lambda;
    this.enrichmentArn = lambda.functionArn;
    this.enrichmentParameters = {
      inputTemplate: props?.inputTransformation?.inputTemplate,
    };
  }

  grantInvoke(grantee: IRole): void {
    this.lambda.grantInvoke(grantee);
  }
}