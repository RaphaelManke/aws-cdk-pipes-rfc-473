import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';

export interface IPipeEnrichment {
  enrichmentArn: string;
  enrichmentParameters: CfnPipe.PipeEnrichmentParametersProperty;

  grantInvoke(grantee: IRole): void;
}


export abstract class PipeEnrichment implements IPipeEnrichment {
  public enrichmentArn: string;
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
