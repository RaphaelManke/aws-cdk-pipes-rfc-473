import { IResolvable } from 'aws-cdk-lib';
import { IApiDestination } from 'aws-cdk-lib/aws-events';
import { IRole, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IPipeEnrichment } from '../PipeEnrichment';
import { IInputTransformation } from '../PipeInputTransformation';

export interface IApiDestinationEnrichmentParameters {
  inputTransformation?: IInputTransformation;
  /**
     * The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
     *
     * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-headerparameters
     */
  readonly headerParameters?: {
    [key: string]: (string);
  } | IResolvable;
  /**
     * The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*").
     *
     * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-pathparametervalues
     */
  readonly pathParameterValues?: string[];
  /**
     * The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
     *
     * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-querystringparameters
     */
  readonly queryStringParameters?: {
    [key: string]: (string);
  } | IResolvable;
}

export class ApiDestinationEnrichment implements IPipeEnrichment {
  private apiDestination: IApiDestination;
  public readonly enrichmentArn: string;
  public readonly enrichmentParameters: CfnPipe.PipeEnrichmentParametersProperty;

  constructor(apiDestination: IApiDestination, props?: IApiDestinationEnrichmentParameters) {
    this.apiDestination = apiDestination;
    this.enrichmentArn = apiDestination.apiDestinationArn;
    this.enrichmentParameters = {
      httpParameters: {
        headerParameters: props?.headerParameters,
        queryStringParameters: props?.queryStringParameters,
        pathParameterValues: props?.pathParameterValues,
      },
      inputTemplate: props?.inputTransformation?.inputTemplate,
    };
  }

  grantInvoke(grantee: IRole): void {
    grantee.addToPrincipalPolicy(new PolicyStatement({
      resources: [this.apiDestination.apiDestinationArn],
      actions: [
        'events:InvokeApiDestination',
      ],
    }));
  }
}