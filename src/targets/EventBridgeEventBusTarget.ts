import { IEventBus } from 'aws-cdk-lib/aws-events';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IPipeTarget, IPipeTargetCommonParameters } from '../PipeTarget';

export interface IEventBusTargetProps extends IPipeTargetCommonParameters {
  /**
         * A free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.
         *
         * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-detailtype
         */
  readonly detailType?: string;
  /**
    * The URL subdomain of the endpoint. For example, if the URL for Endpoint is https://abcde.veo.endpoints.event.amazonaws.com, then the EndpointId is `abcde.veo` .
    *
    * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-endpointid
    */
  readonly endpointId?: string;
  /**
    * AWS resources, identified by Amazon Resource Name (ARN), which the event primarily concerns. Any number, including zero, may be present.
    *
    * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-resources
    */
  readonly resources?: string[];
  /**
    * The source of the event.
    *
    * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-source
    */
  readonly source?: string;
  /**
    * The time stamp of the event, per [RFC3339](https://docs.aws.amazon.com/https://www.rfc-editor.org/rfc/rfc3339.txt) . If no time stamp is provided, the time stamp of the [PutEvents](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html) call is used.
    *
    * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-time
    */
  readonly time?: string;
}


export class EventBridgeEventBusTarget implements IPipeTarget {
  private eventBus: IEventBus;
  readonly targetArn: string;
  readonly targetParameters: CfnPipe.PipeTargetParametersProperty;

  constructor(eventBus: IEventBus, props: IEventBusTargetProps) {
    this.eventBus = eventBus;
    this.targetArn = eventBus.eventBusArn;
    this.targetParameters = {
      inputTemplate: props.inputTemplate?.inputTemplate,
      eventBridgeEventBusParameters: {
        detailType: props.detailType,
        endpointId: props.endpointId,
        resources: props.resources,
        source: props.source,
        time: props.time,
      },
    };
  }

  grantPush(grantee: IRole): void {
    this.eventBus.grantPutEventsTo(grantee);
  }

}