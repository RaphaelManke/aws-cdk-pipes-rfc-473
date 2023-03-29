import { IEventBus } from 'aws-cdk-lib/aws-events';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IPipeTarget } from '../PipeTarget';

export interface IEventBusTargetProps extends CfnPipe.PipeTargetEventBridgeEventBusParametersProperty {
}

export class EventBusTarget implements IPipeTarget {

  private readonly eventBus: IEventBus;
  targetArn: string;
  targetParameters: CfnPipe.PipeTargetParametersProperty;

  constructor(eventBus: IEventBus, props: IEventBusTargetProps) {
    this.eventBus = eventBus;
    this.targetArn = eventBus.eventBusArn;
    this.targetParameters = {
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