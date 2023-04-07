import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IStateMachine } from 'aws-cdk-lib/aws-stepfunctions';
import { IInvocationType } from './IInvocationType';
import { IPipeTarget, IPipeTargetCommonParameters } from '../PipeTarget';

export interface IStepFunctionTargetProps extends IPipeTargetCommonParameters{
  invocationType: IInvocationType;
}

export class StepFunctionTarget implements IPipeTarget {
  private readonly stateMachine: IStateMachine;
  readonly targetArn: string;
  readonly targetParameters: CfnPipe.PipeTargetParametersProperty;

  constructor(stateMachine: IStateMachine, props?: IStepFunctionTargetProps ) {
    this.stateMachine = stateMachine;
    this.targetArn = stateMachine.stateMachineArn;
    this.targetParameters = {
      inputTemplate: props?.inputTemplate?.inputTemplate,
      stepFunctionStateMachineParameters: {
        invocationType: props?.invocationType,
      },
    };
  }

  grantPush(grantee: IRole): void {
    this.stateMachine.grantExecution(grantee);
  }
}