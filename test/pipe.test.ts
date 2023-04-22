import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { LambdaEnrichment } from '../src/enrichments/LambdaEnrichment';
import { Pipe } from '../src/Pipe';
import { PipeInputTransformation } from '../src/PipeInputTransformation';
import { PipeGenericFilterPattern, PipeSourceFilter } from '../src/PipeSourceFilter';

import { PipeSqsFilterPattern, SqsSource } from '../src/sources/SqsSource';
import { SqsTarget } from '../src/targets/SqsTarget';

describe('Pipe', () => {

  it('Stack does synth', () => {
    const stack = new Stack(new App(), 'test-stack');
    const sourceQueue = new Queue(stack, 'test-source-queue', {});
    const targetQueue = new Queue(stack, 'test-target-queue', {});

    const pipeSourceFilter = new PipeSourceFilter([
      PipeGenericFilterPattern.fromJson({ foo: 'bar' }),
      PipeSqsFilterPattern.fromSqsMessageAttributes({
        md5OfBody: 'string',
        body: { foo: 'bar' },
      }),
    ]);

    const enrichmentLambda = new Function(stack, 'test-lambda', {
      code: Code.fromInline(
        'exports.handler = async (event) => { return event; };',
      ),
      runtime: Runtime.NODEJS_18_X,
      handler: 'index.handler',
    });

    new Pipe(stack, 'test-pipe', {
      description: 'test-pipe',

      source: new SqsSource(sourceQueue, {

      }),
      filter: pipeSourceFilter,

      enrichment: new LambdaEnrichment(enrichmentLambda, {
        inputTransformation: PipeInputTransformation.fromJson({ foo: 'bar' }),
      }),
      target: new SqsTarget(targetQueue),

    });


    const template = Template.fromStack(stack);

    template.hasResource('AWS::Pipes::Pipe', {});
    template.hasResource('AWS::IAM::Role', {});

    const queues = Object.values(template.findResources('AWS::SQS::Queue', {}));

    expect(queues).toHaveLength(2);


    const pipeRolePolicy = Object.values(
      template.findResources('AWS::IAM::Policy', {}),
    )[0];

    expect(pipeRolePolicy.Properties.PolicyDocument.Statement).toHaveLength(3);

    expect(template).toMatchSnapshot();
  });
});