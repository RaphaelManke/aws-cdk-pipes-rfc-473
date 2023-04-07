import { App, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { EventBus, Rule } from 'aws-cdk-lib/aws-events';
import { CloudWatchLogGroup } from 'aws-cdk-lib/aws-events-targets';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { LogLevel, Pass, StateMachine, StateMachineType } from 'aws-cdk-lib/aws-stepfunctions';
import { DesiredState, EventBridgeEventBusTarget, Pipe, PipeInputTransformation, PipeTargetParameter, PipeVariables, SqsSource, StepFunctionEnrichment } from '../src';

const app = new App();
const stack = new Stack(app, 'E2EPipesSqsSfnEventBus', {});

const sourceQueue = new Queue(stack, 'SourceQueue');
const source = new SqsSource(sourceQueue);

const stateMachineLogGroup = new LogGroup(stack, 'StateMachineLogGroup', {
  removalPolicy: RemovalPolicy.DESTROY,
});
const stateMachine = new StateMachine(stack, 'StateMachine', {
  definition: new Pass( stack, 'Pass', {
    // resultPath: '$.output[]',

  } ),
  stateMachineType: StateMachineType.EXPRESS,
  logs: {
    destination: stateMachineLogGroup,
    level: LogLevel.ALL,
    includeExecutionData: true,
  },
});
const enrichment = new StepFunctionEnrichment(stateMachine, {
  inputTransformation: PipeInputTransformation.fromJson({
    sqsEvent: PipeTargetParameter.fromPipeVariable(PipeVariables.PIPE_EVENT_JSON),
    sqsEventBody: PipeTargetParameter.fromJsonPath('$.body'),
  }),

});

const targetEventBus = new EventBus(stack, 'TargetEventBus', {


});
const target = new EventBridgeEventBusTarget(targetEventBus, {
  detailType: 'test',
  inputTemplate: PipeInputTransformation.fromJson({
    ppeSourceEvent: PipeTargetParameter.fromPipeVariable(PipeVariables.PIPE_EVENT_JSON),
    staticString: 'staticString',
    body: PipeTargetParameter.fromJsonPath('$.body'),
    enrichment: PipeTargetParameter.fromPipeVariable(PipeVariables.PIPE_ENRICHMENT_ARN),
  }),

});
new Pipe(stack, 'Pipe', {
  source,
  enrichment,
  target,
  desiredState: DesiredState.RUNNING,
});

// DEBUG: add a rule to the event bus to see what messages are being sent
const logGroup = new LogGroup(stack, 'LogGroup', {
  removalPolicy: RemovalPolicy.DESTROY,
});
new Rule(stack, 'Rule', {
  eventBus: targetEventBus,
  eventPattern: {
    account: [Stack.of(stack).account],
  },
  targets: [new CloudWatchLogGroup(logGroup, {

  })],
});