import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { SqsSource } from '../src/sources/SqsSource';

describe('SqsSource', () => {
  it('should synth', () => {
    // ARRANGE
    const stack = new Stack(new App(), 'test-stack');
    const sourceQueue = new Queue(stack, 'test-source-queue', {});

    // ACT
    const source = new SqsSource(sourceQueue);
    new CfnPipe(stack, 'test-pipe', {
      roleArn: 'test-role-arn',
      source: source.sourceArn,
      target: 'test-target-arn',
      sourceParameters: source.sourceParameters,
    },
    );

    // ASSERT
    const template = Template.fromStack(stack);
    expect(template).toMatchSnapshot();

  });

  it('should accept filter', () => {
    // ARRANGE
    const stack = new Stack(new App(), 'test-stack');
    const sourceQueue = new Queue(stack, 'test-source-queue', {});

    // ACT
    const source = new SqsSource(sourceQueue, {
      filterCriteria: {
        filters: [
          {
            pattern: JSON.stringify({
              foo: 'bar',
            }),
          },
        ],
      },
    });

    new CfnPipe(stack, 'test-pipe', {
      roleArn: 'test-role-arn',
      source: source.sourceArn,
      target: 'test-target-arn',
      sourceParameters: source.sourceParameters,
    },
    );

    // ASSERT
    const template = Template.fromStack(stack);
    expect(template).toMatchSnapshot();


  });

  it('should accept config', () => {
    // ARRANGE
    const stack = new Stack(new App(), 'test-stack');
    const sourceQueue = new Queue(stack, 'test-source-queue', {});

    // ACT
    const source = new SqsSource(sourceQueue, {
      batchSize: 10,
      maximumBatchingWindowInSeconds: 10,
    });
    new CfnPipe(stack, 'test-pipe', {
      roleArn: 'test-role-arn',
      source: source.sourceArn,
      target: 'test-target-arn',
      sourceParameters: source.sourceParameters,
    },
    );

    // ASSERT
    const template = Template.fromStack(stack);
    expect(template).toMatchSnapshot();
  });
});