import { IResolvable } from 'aws-cdk-lib';
import { IRestApi } from 'aws-cdk-lib/aws-apigateway';
import { IRole, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IPipeTarget } from '../PipeTarget';

export interface IApiGatewayTargetProps{
  resource: string;
  method: string;
  /**
 * The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
 *
 * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html#cfn-pipes-pipe-pipetargethttpparameters-headerparameters
 */
  readonly headerParameters?: {
    [key: string]: (string);
  } | IResolvable;
  /**
 * The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*").
 *
 * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html#cfn-pipes-pipe-pipetargethttpparameters-pathparametervalues
 */
  readonly pathParameterValues?: string[];
  /**
 * The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
 *
 * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html#cfn-pipes-pipe-pipetargethttpparameters-querystringparameters
 */
  readonly queryStringParameters?: {
    [key: string]: (string);
  } | IResolvable;
}

export class ApiGatewayTarget implements IPipeTarget {
  private readonly apiGateway: IRestApi;
  private readonly resource: string;
  private readonly method: string;
  targetArn: string;
  targetParameters: CfnPipe.PipeTargetParametersProperty;

  constructor(http: IRestApi, props: IApiGatewayTargetProps) {
    this.apiGateway = http;
    this.targetArn = http.restApiId;
    this.resource = props?.resource;
    this.method = props?.method;

    if (!this.resource.startsWith('/')) {
      throw new Error('Resource must start with a forward slash');
    }
    this.targetParameters = {
      httpParameters: {
        headerParameters: props?.headerParameters,
        queryStringParameters: props?.queryStringParameters,
        pathParameterValues: props?.pathParameterValues,
      },
    };
  }

  grantPush(grantee: IRole): void {
    grantee.addToPrincipalPolicy(new PolicyStatement({
      resources: [this.apiGateway.arnForExecuteApi(this.resource, this.method)],
      actions: [
        'execute-api:Invoke',
        'execute-api:ManageConnections',
      ],
    }));
  }
}