import { IResolvable } from 'aws-cdk-lib';
import { IRestApi } from 'aws-cdk-lib/aws-apigateway';
import { IRole, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IPipeEnrichment } from '../PipeEnrichment';
import { IInputTransformation } from '../PipeInputTransformation';

interface IApiGatewayEnrichmentProps {
  method: string;
  resource: string;
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

export class ApiGatewayEnrichment implements IPipeEnrichment {
  private api: IRestApi;
  private method: string;
  private resource: string;
  public readonly enrichmentArn: string;
  public readonly enrichmentParameters: CfnPipe.PipeEnrichmentParametersProperty;

  constructor(api: IRestApi, props: IApiGatewayEnrichmentProps) {
    this.api = api;
    this.method = props.method;
    this.resource = props.resource;

    if (!this.resource.startsWith('/')) {
      throw new Error('Resource must start with a forward slash');
    }

    this.enrichmentArn = api.restApiId;
    this.enrichmentParameters = {
      inputTemplate: props?.inputTransformation?.inputTemplate,
    };
  }

  grantInvoke(grantee: IRole): void {
    grantee.addToPrincipalPolicy(new PolicyStatement({
      resources: [this.api.arnForExecuteApi(this.resource, this.method)],
      actions: [
        'execute-api:Invoke',
        'execute-api:ManageConnections',
      ],
    }));
  }
}