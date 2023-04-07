import { App, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { AttributeType, BillingMode, StreamViewType, Table } from 'aws-cdk-lib/aws-dynamodb';
import { EventBus, Rule, RuleTargetInput } from 'aws-cdk-lib/aws-events';
import { CloudWatchLogGroup } from 'aws-cdk-lib/aws-events-targets';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { DynamoDBStreamSource, EventBridgeEventBusTarget, Pipe, PipeInputTransformation, PipeSourceStartingPosition, PipeTargetParameter, PipeVariables } from '../../../src';

const app = new App();
const stack = new Stack(app, 'E2EPipesDynamoStreamEventBus', {});

const sourceTable = new Table(stack, 'SourceTable', {
  billingMode: BillingMode.PAY_PER_REQUEST,
  stream: StreamViewType.NEW_AND_OLD_IMAGES,
  partitionKey: {
    name: 'id',
    type: AttributeType.STRING,
  },
});
const source = new DynamoDBStreamSource(sourceTable, {
  startingPosition: PipeSourceStartingPosition.TRIM_HORIZON,
});
const targetEventBus = new EventBus(stack, 'TargetEventBus', {

});
const target = new EventBridgeEventBusTarget(targetEventBus, {
  source: 'aws-cdk',
  detailType: '$.dynamodb.NewImage.id.S',
  time: PipeVariables.PIPE_EVENT_INGESTION_TIME,
  inputTemplate: PipeInputTransformation.fromJson({
    id: '<$.dynamodb.NewImage.id.S>',
    source: PipeTargetParameter.fromPipeVariable(PipeVariables.PIPE_SOURCE_ARN),
    time: PipeTargetParameter.fromPipeVariable(PipeVariables.PIPE_EVENT_INGESTION_TIME),
    fromPath: PipeTargetParameter.fromJsonPath('$.dynamodb.NewImage.id.S'),
  }),
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