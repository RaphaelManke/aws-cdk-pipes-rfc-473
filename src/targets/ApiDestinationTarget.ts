import { IResolvable } from 'aws-cdk-lib';
import { IApiDestination } from 'aws-cdk-lib/aws-events';
import { IRole, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IPipeTarget, IPipeTargetCommonParameters } from '../PipeTarget';

export interface IApiDestinationTargetProps extends IPipeTargetCommonParameters {
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

export class ApiDestinationTarget implements IPipeTarget {
  private readonly apiDestination: IApiDestination;
  readonly targetArn: string;
  readonly targetParameters: CfnPipe.PipeTargetParametersProperty;

  constructor(http: IApiDestination, props: IApiDestinationTargetProps) {
    this.apiDestination = http;
    this.targetArn = http.apiDestinationArn;

    this.targetParameters = {
      inputTemplate: props?.inputTemplate?.inputTemplate,
      httpParameters: {
        headerParameters: props?.headerParameters,
        queryStringParameters: props?.queryStringParameters,
        pathParameterValues: props?.pathParameterValues,
      },
    };
  }

  grantPush(grantee: IRole): void {

    grantee.addToPrincipalPolicy(new PolicyStatement({
      resources: [this.apiDestination.apiDestinationArn],
      actions: [
        'events:InvokeApiDestination',
      ],
    }));
  }
}