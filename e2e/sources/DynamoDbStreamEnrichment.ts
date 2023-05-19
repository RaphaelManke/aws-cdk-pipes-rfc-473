import { App, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { AttributeType, BillingMode, StreamViewType, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { DynamoDBStreamSource, LambdaEnrichment, LogsTarget, Pipe, PipeSourceStartingPosition } from '../../src';

const app = new App();
const stack = new Stack(app, 'E2EPipesDynamoDbEnrichment', {});

const sourceTable = new Table(stack, 'SourceTable', {
  billingMode: BillingMode.PAY_PER_REQUEST,
  stream: StreamViewType.NEW_AND_OLD_IMAGES,
  partitionKey: {
    name: 'id',
    type: AttributeType.STRING,
  },
});

const dlq = new Queue(stack, 'DeadLetterQueue');

const source = new DynamoDBStreamSource(sourceTable, {
  startingPosition: PipeSourceStartingPosition.TRIM_HORIZON,
  deadLetterConfig: {
    queue: dlq,

  },
});

const enrichment = new LambdaEnrichment(new NodejsFunction(stack, 'enrichment', {
  entry: 'e2e/sources/enrichment.handler.ts',
  runtime: Runtime.NODEJS_18_X,

}), {

} );
const targetLogGroup = new LogGroup(stack, 'TargetLogGroup', {
  removalPolicy: RemovalPolicy.DESTROY,
});
const target = new LogsTarget(targetLogGroup, {
  logStreamName: 'test',
});
new Pipe(stack, 'Pipe', {
  source,
  enrichment,
  target,

});
