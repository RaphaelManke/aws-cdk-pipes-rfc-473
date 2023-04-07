import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IStateMachine } from 'aws-cdk-lib/aws-stepfunctions';
import { IPipeEnrichment } from '../PipeEnrichment';
import { IInputTransformation } from '../PipeInputTransformation';

export interface IStepFunctionEnrichmentProps {
  inputTransformation?: IInputTransformation;
}

export class StepFunctionEnrichment implements IPipeEnrichment {
  private stepFunction: IStateMachine;
  public readonly enrichmentArn: string;
  public readonly enrichmentParameters: CfnPipe.PipeEnrichmentParametersProperty;

  constructor(stepFunction: IStateMachine, props?: IStepFunctionEnrichmentProps) {
    // TODO: Is it possible to detect if the state machine is as express step function?
    this.stepFunction = stepFunction;
    this.enrichmentArn = stepFunction.stateMachineArn;
    this.enrichmentParameters = {
      inputTemplate: props?.inputTransformation?.inputTemplate,
    };
  }

  grantInvoke(grantee: IRole): void {
    this.stepFunction.grantStartSyncExecution(grantee);
  }
}