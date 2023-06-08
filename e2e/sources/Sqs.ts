import { App, CfnOutput, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { LogsTarget, Pipe, SqsSource } from '../../src';

const app = new App();
const stack = new Stack(app, 'E2EPipesSqs', {});

const sourceQueue = new Queue(stack, 'SourceQueue');
const source = new SqsSource(sourceQueue);
const targetLogGroup = new LogGroup(stack, 'TargetLogGroup', {
  removalPolicy: RemovalPolicy.DESTROY,
});
const target = new LogsTarget(targetLogGroup, {
  logStreamName: 'test',
});
const pipe = new Pipe(stack, 'Pipe', {
  source,
  target,
});
// const pipeName = (pipe.node.defaultChild as CfnPipe).ref;
new CfnOutput(stack, 'PipeName', {
  value: pipe.pipeName,
});

