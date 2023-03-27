import { App, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { AttributeType, BillingMode, StreamViewType, Table } from 'aws-cdk-lib/aws-dynamodb';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { DynamoDBStreamSource, LogsTarget, Pipe, PipeSourceStartingPosition } from '../../src';

const app = new App();
const stack = new Stack(app, 'E2EPipesDynamoDb', {});

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
const targetLogGroup = new LogGroup(stack, 'TargetLogGroup', {
  removalPolicy: RemovalPolicy.DESTROY,
});
const target = new LogsTarget(targetLogGroup, {
  logStreamName: 'test',
});
new Pipe(stack, 'Pipe', {
  source,
  target,
});
