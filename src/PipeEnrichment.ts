import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';

export abstract class PipeEnrichment {
  public readonly enrichmentArn: string;
  public enrichmentParameters: CfnPipe.PipeEnrichmentParametersProperty;

  constructor(
    enrichmentArn: string,
    props: CfnPipe.PipeEnrichmentParametersProperty,
  ) {
    this.enrichmentParameters = props;
    this.enrichmentArn = enrichmentArn;
  }

  abstract grantInvoke(grantee: IRole): void;
}
