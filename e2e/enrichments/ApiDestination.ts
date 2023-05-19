import { join } from 'path';
import { App, RemovalPolicy, SecretValue, Stack } from 'aws-cdk-lib';
import { ApiDestination, Authorization, Connection, HttpMethod } from 'aws-cdk-lib/aws-events';
import { Architecture, FunctionUrlAuthType } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { ApiDestinationEnrichment, LogsTarget, Pipe, PipeInputTransformation, SqsSource } from '../../src';

const app = new App();
const stack = new Stack(app, 'E2EPipesEnrichApiDestination', {});

const sourceQueue = new Queue(stack, 'SourceQueue');
const source = new SqsSource(sourceQueue);
const targetLogGroup = new LogGroup(stack, 'TargetLogGroup', {
  removalPolicy: RemovalPolicy.DESTROY,
});
const target = new LogsTarget(targetLogGroup, {
  logStreamName: 'test',
});


const apiLambda = new NodejsFunction(stack, 'ApiLambda', {
  entry: join(__dirname, 'mockapi.handler.ts'),
  memorySize: 1024,
  architecture: Architecture.ARM_64,
});

const apiUrl = apiLambda.addFunctionUrl({ authType: FunctionUrlAuthType.NONE });

const connection = new Connection(stack, 'Connection', {
  authorization: Authorization.apiKey('some-api-key', SecretValue.unsafePlainText('some-secret-key')),
});
const apiDestination = new ApiDestination(stack, 'ApiDestination', {
  connection: connection,
  endpoint: apiUrl.url,
  httpMethod: HttpMethod.POST,
});
const enrichment = new ApiDestinationEnrichment(apiDestination, {
  headerParameters: {
    'Content-Type': 'application/json',
    'Dynamic-Header': '$.messageId',
  },

  inputTransformation: PipeInputTransformation.fromJson({
    bodyFromSqs: '<$.body>',
    rawSqsMessage: '<aws.pipes.event.json>',
  }),
});


new Pipe(stack, 'Pipe', {
  source,
  enrichment,
  target,
});
