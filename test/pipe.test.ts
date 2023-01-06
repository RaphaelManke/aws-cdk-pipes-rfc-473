import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Pipe } from '../src/pipe';
import { SqsSource } from '../src/sources/SqsSource';
import { SqsTarget } from '../src/targets/SqsTarget';

test('Stack does synth', () => {
  const stack = new Stack( new App(), 'test-stack' );
  const sourceQueue = new Queue(stack, 'test-source-queue', {});
  const targetQueue = new Queue(stack, 'test-target-queue', {});
  new Pipe(stack, 'test-pipe', {
    source: new SqsSource(sourceQueue),
    target: new SqsTarget({ queue: targetQueue }),
  });
  const template = Template.fromStack(stack);


  template.hasResource('AWS::Pipes::Pipe', {});
  template.hasResource('AWS::IAM::Role', {});


  const queues = Object.values(template.findResources('AWS::SQS::Queue', {}) );
  expect(queues).toHaveLength(2);

  const pipeRolePolicy = Object.values(template.findResources('AWS::IAM::Policy', {}))[0];
  expect( pipeRolePolicy.Properties.PolicyDocument.Statement).toHaveLength(2);

  expect(template).toMatchSnapshot();
});