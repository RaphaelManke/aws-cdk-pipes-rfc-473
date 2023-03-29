import { App, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { EventBus, Rule } from 'aws-cdk-lib/aws-events';
import { CloudWatchLogGroup } from 'aws-cdk-lib/aws-events-targets';
import { Stream } from 'aws-cdk-lib/aws-kinesis';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { EventBusTarget, KinesisStreamSource, Pipe, PipeSourceStartingPosition } from '../../../src';

const app = new App();
const stack = new Stack(app, 'E2EPipesKinesisEventBus', {});

const kinesisStream = new Stream(stack, 'KinesisStream', {
});
const source = new KinesisStreamSource(kinesisStream, {
  startingPosition: PipeSourceStartingPosition.TRIM_HORIZON,

});
const targetEventBus = new EventBus(stack, 'TargetEventBus', {

});
const target = new EventBusTarget(targetEventBus, {

});
new Pipe(stack, 'Pipe', {
  source,
  target,
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

stack.exportValue(kinesisStream.streamName);