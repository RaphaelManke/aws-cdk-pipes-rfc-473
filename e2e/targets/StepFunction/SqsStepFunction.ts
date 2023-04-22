import { App, Stack } from 'aws-cdk-lib';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Pass, StateMachine, StateMachineType, LogLevel } from 'aws-cdk-lib/aws-stepfunctions';
import { Pipe, SqsSource, StepFunctionTarget } from '../../../src';

const app = new App();
const stack = new Stack(app, 'E2EPipesSqsStepFunction', {});

const sourceQueue = new Queue(stack, 'SourceQueue');
const source = new SqsSource(sourceQueue);
const sfnDefinition = new Pass(stack, 'Pass');
const sfnLoggroup = new LogGroup(stack, 'SfnLogGroup');

const stateMachine = new StateMachine(stack, 'QueueHandlerStateMachine', {
  definition: sfnDefinition,
  stateMachineType: StateMachineType.EXPRESS,
  logs: {
    destination: sfnLoggroup,
    level: LogLevel.ALL,
    includeExecutionData: true,
  },
});

const target = new StepFunctionTarget(stateMachine);
new Pipe(stack, 'Pipe', {
  source,
  target,
});

// DEBUG: add a rule to the event bus to see what messages are being sent
