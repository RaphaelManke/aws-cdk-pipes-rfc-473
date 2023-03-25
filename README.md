# AWS CDK RFC-473 - EventBridge Pipes

## Readme

# Amazon Eventbridge Pipes Construct Library

This library contains constructs for working with Amazon EventBridge Pipes.

EventBridge Pipes let you create source to target connections between several

aws services. While transporting messages from a source to a target the messages

can be filtered, transformed and enriched.

![diagram of pipes](https://docs.aws.amazon.com/images/eventbridge/latest/userguide/images/pipes_overview.png)

For more details see the service

[documentation](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html).
[Cloudformation docs](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html)

## Pipe

AWS EventBridge Pipe has itself is a fully managed service that does the heavy lifting of polling a source, then be able to filter out payloads based on filter criteria. This reduces the target invocations and can reduce costs.
After filtering events the resulting events can be enriched in the enrichment phase of a Pipe. The result of the enrichment is then pushed to the Target.
Before passing a payload to the enrichment and Target the payload can be transformed using a input Transformation.
To give the EventBridge Pipe access to the services that are connected in a pipe, each Pipe assumes a IAM Role. This role must have iam policies attached to read from a source, invoke a enrichment service and finally push to a target service.

So a Pipe has the following components:

- [Role](#Role)
- [Source](#Source)
- [Filter](#Filter) (optional)
- [Enrichment](#Enrichment) (optional)
  - [Input transformation](#Input%20Transformation) (optional)
- [Target](#Target)
  - [Input transformation](#Input%20Transformation) (optional)

besides these (core) components that are used while processing data, there are additional attributes that describe a Pipe

- Name
  - This the (physical-) identifier for the AWS resource, the actual Pipe. It is used in the ARN of the provisioned resource.
- Description
  - This is text field for humans to identify what the pipe does.
- Tags
  - AWS tags for the resource

```mermaid
graph LR
classDef required fill:#00941b
classDef optional fill:#5185f5

Source:::required
Filter:::optional
Enrichment_Input_Transformation[Input transformation]:::optional
Enrichment:::optional
Target_Input_Transformation[Input transformation]:::optional
Target:::required

Source --> Filter --> Enrichment_Input_Transformation --> Enrichment --> Target_Input_Transformation --> Target

```

### Example implementation

```typescript
interface PipeProps {
  readonly source: PipeSource;
  readonly target: PipeTarget;

  readonly filter?: PipeFilter;
  readonly enrichment?: PipeEnrichment;
  readonly role?: IRole; // role is optional, if not provided a new role is created
  readonly description: string;
  readonly tags?: Tags;
}

interface Pipe {
  readonly role: IRole;
  readonly source: PipeSource;
  readonly target: PipeTarget;

  readonly filter?: PipeFilter;
  readonly enrichment?: PipeEnrichment;
  readonly description: string;
  readonly tags?: Tags;

  constructor(scope: Scope, id: string, props: PipeProps);
}
```

### Open questions

1. Should the input Transformation be part of the `PipeProps` (alternative: a property of the `PipeEnrichment` and `PipeTarget` props) ?
   1. Pro `PipeProps`:
      1. In the case of a Refactoring, for example replace the target the input transformation doesn't have to be touched/moved
   2. Con `PipeProps`:
      1. Input transformation can occur twice in a Pipe definition. The naming needs to make sure for which phase the the transformation is meant. E.g. `EnrichmentInputTransformation` and `TargetInputTransformation`
      2. Setting the `EnrichmentInputTransformation` without an `PipeEnrichment` makes no sense and needs additional validation code. This can be omitted if the `inputTransformation` is a property of the `PipeEnrichment` or `PipeTarget` classes.
2. Should the `PipeFilter` be part of the `PipeSource` property definition instead of a attribute on the `Pipe`class?
   1. Pro:
      1. The possible filter keys depend on the source
      2. cloudformation itself put the `FilterCriteria` into the [PipeSourceParameters](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html)
   2. Con:
      1. To align with the AWS console it should be on the same level as the `Source` itself. User that have tested pipes in the console can easier understand the api.
      2. It would be more robust to future AWS changes because the Filter can always be defined based on the cloudformation generated type definitions and don't have to be explicitly build for a new source.

## Source

A source is a AWS Service that needs to be polled.
The following Sources are possible:

- [Amazon DynamoDB stream](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-dynamodb.html)
- [Amazon Kinesis stream](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-kinesis.html)
- [Amazon MQ broker](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-mq.html)
- [Amazon MSK stream](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-msk.html)
- [Self managed Apache Kafka stream](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-kafka.html)
- [Amazon SQS queue](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-sqs.html)

The CfnPipe resource reference the source only by their ARN. Right now there is no validation in der CDK framework that checks if a ARN is valid or not.
To overcome this shortcoming a PipeSource class representing a source is needed. This PipeSource is then implemented by all the supported sources.

```typescript
export abstract class PipeSource {
  public readonly sourceArn: string;

  public readonly sourceParameters?:
    | CfnPipe.PipeSourceParametersProperty
    | IResolvable;

  constructor(sourceArn: string, props?: CfnPipe.PipeSourceParametersProperty) {
    this.sourceArn = sourceArn;
    this.sourceParameters = props;
  }

  public abstract grantRead(grantee: IRole): void;
}
```

This PipeSource class has a sourceArn that is mapped to the CfnPipe `sourceArn` attribute.
The `sourceParameters` are the config options for the source. Depending on the source theses attributes are present under a different key. E.g. for a SQS queue the configuration attributes are:

```typescript
{
	sqsQueueParameters : {...}
}
```

The specific Source class implementation hides this detail for the user and provide a interface with only the possible configuration options that are possible for the specific source.

```typescript
interface PipeSourceSqsQueueParametersProperty {
  readonly batchSize?: number;
  readonly maximumBatchingWindowInSeconds?: number;
}
```

This interface for example is provided by the cloudformation specification and can be used as a base for possible configurations (additional validation can be added if useful).

To be able to consume a source the EventBridge Pipe has a IAM-role. This role needs to have a policy to read from the source.
The `grantRead` method need to be implemented for that purpose.
E.g. the SQS can leverage its L2 `.grantConsumeMessages()` method.

### Example implementation

An example api for a source that polls for a SQS-queue then can look like:

```typescript
export class SqsSource extends PipeSource {
  private queue: IQueue;

  constructor(
    queue: IQueue,
    props?: CfnPipe.PipeSourceSqsQueueParametersProperty
  ) {
    super(queue.queueArn, { sqsQueueParameters: props });
    this.queue = queue;
  }

  public grantRead(grantee: IRole): void {
    this.queue.grantConsumeMessages(grantee);
  }
}
```

It takes an existing SQS-queue and polling properties that are possible for that kind of source and does implement a grantRead method which creates the required IAM policy for the Pipe role.

## Role

A IAM role is required that can be assumed by the `pipes.amazonaws.com` principal. This role needs IAM policies attached to read from a `PipeSource`, invoke a `PipeEnrichment` and push to a `PipeTarget`.
The user can bring its own role. If the user does not provide a role, a new role will be created. In both cases the role should be exposed by the `Pipe` class so it is transparent for user which role is used within the Pipe.

### Open questions

1. How can be assured the pipes service has access to encrypted sources and targets? The role or pipes principal needs access to KMS.
2. Can we allow `IRole` or do we need to make a restriction to allow `Role` only?
   1. We have to make sure the generated policies are attached to the role in both cases. If restricted to `Role` this can easily done by using L2 construct methods of the role or the source, enrichment or target and pass the role along. If a `IRole` is provided the role policies cannot be extended.

## Filter

A filter does pattern matching based on the incoming payload and the specified filter criteria's. The matching is done in the same way the [EventBridge pattern](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html) are matched.
The possible fields that can be used to filter incoming payloads are depending on the source.

### Example Implementation

The implementation is split into two types.

1. generic Filter
   1. this filter is the basic class for defining a filter. It represent 1:1 the cloudformation filter specification.
2. Source specific filter
   1. this filter gives the user guidance on which attributes for this specific source a filter can be created. It then takes care of that the actual data-key e.g. `data, body, dynamodb` [see docs](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-filtering.html).

```typescript
interface IPipeFilterPattern {
	pattern: string;
}

class PipeGenericFilterPattern {
	static fromJson(patternObject: Record<string, any>) :IPipeFilterPattern {
		return { pattern: JSON.stringify(patternObject) };
	}
}

interface SqsMessageAttributes : {
	messageId?: string;
	receiptHandle?: string;
	body?: any;
	attributes?: {
		ApproximateReceiveCount?: string;
		SentTimestamp?: string;
		SequenceNumber?: string;
		MessageGroupId?: string;
		SenderId?: string;
		MessageDeduplicationId?: string;
		ApproximateFirstReceiveTimestamp?: string;
	};
	messageAttributes?: any;
	md5OfBody?: string;
}

class PipeSqsFilterPattern extends PipeGenericFilterPattern {
	static fromSqsMessageAttributes(attributes: SqsMessageAttributes) :IPipeFilterPattern {
		return {
			pattern: JSON.stringify( attributes ),
		};

	}
}
```

## Target

A Target is the end of the Pipe. After the payload from the source is pulled, filtered and enriched it is forwarded to the target.
For now the following targets are supported:

- [API destination](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html)
- [API Gateway](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-gateway-target.html)
- [Batch job queue](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html#pipes-targets-specifics-batch)
- [CloudWatch log group](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html#pipes-targets-specifics-cwl)
- [ECS task](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html#pipes-targets-specifics-ecs-task)
- Event bus in the same account and Region
- Firehose delivery stream
- Inspector assessment template
- Kinesis stream
- Lambda function (SYNC or ASYNC)
- Redshift cluster data API queries
- SageMaker Pipeline
- SNS topic
- SQS queue
- Step Functions state machine
  - Express workflows (ASYNC)
  - Standard workflows (SYNC or ASYNC)

The CfnPipe resource reference the target only by their ARN. Right now there is no validation in der CDK framework that checks if a ARN is valid or not.
To overcome this shortcoming a PipeTarget class representing a target is needed. This PipeTarget is then implemented by all the supported targets.

The implementation is then similar to the Source implementation:

### Example implementation

```typescript
interface IPipeTarget {
  targetArn: string;
  targetParameters: CfnPipe.PipeTargetParametersProperty;

  grantPush(grantee: IRole): void;
}

export interface SqsTargetProps {
  queue: IQueue;
  sqsQueueParameters?: CfnPipe.PipeTargetSqsQueueParametersProperty;
}

export class SqsTarget implements IPipeTarget {
  private queue: IQueue;
  targetArn: string;
  targetParameters: CfnPipe.PipeTargetParametersProperty;

  constructor(props: SqsTargetProps) {
    this.queue = props.queue;
    this.targetArn = props.queue.queueArn;
    this.targetParameters = { sqsQueueParameters: props.sqsQueueParameters };
  }

  public grantPush(grantee: IRole): void {
    this.queue.grantSendMessages(grantee);
  }
}
```

## Enrichment

In the enrichment step the filtered payloads can be used to invoke one of the following services

- API destination
- Amazon API Gateway
- Lambda function
- Step Functions state machine
  - only express workflow

The invocation is a synchros call to the service. The result of the enrichment step then can be used to combine it with the filtered payload to target.
The enrichment has two main properties for all types of supported services

- enrichment ARN
- input transformation

The enrichment ARN is the AWS resource ARN that should be invoked. The Role must have access to invoke this ARN.
The input transformation is used to map values from the filter step output to the input to the enrichment step.
For API destination and Api Gateway enrichments there can additional request parameter be set like header, query params. These properties can either be static or dynamic based on the payload from the previous step or extracted from the input transformation.

### Example implementation

```typescript
export abstract class PipeEnrichment {
  public readonly enrichmentArn: string;
  public enrichmentParameters: CfnPipe.PipeEnrichmentParametersProperty;

  constructor(
    enrichmentArn: string,
    props: CfnPipe.PipeEnrichmentParametersProperty
  ) {
    this.enrichmentParameters = props;
    this.enrichmentArn = enrichmentArn;
  }

  abstract grantInvoke(grantee: IRole): void;
}

export class LambdaEnrichment extends PipeEnrichment {
  private lambda: IFunction;

  constructor(
    lambda: IFunction,
    props: { inputTransformation?: PipeInputTransformation }
  ) {
    super(lambda.functionArn, {
      inputTemplate: props.inputTransformation?.inputTemplate,
    });
    this.lambda = lambda;
  }

  grantInvoke(grantee: IRole): void {
    this.lambda.grantInvoke(grantee);
  }
}
```

## Input Transformation

Input transformations are used to transform or extend payloads to a desired structure. This transformation mechanism can be used prior to the enrichment or target step.

There are two types of mappings. Both types can be either static values or use values from the output of the previous step. Additionally there are a few values that come from the pipe itself (see `reservedVariables` enum).

- string
  - static
  - dynamic
- json
  - static
  - dynamic

### Example implementation

```typescript
enum reservedVariables {
  PIPES_ARN = "<aws.pipes.pipe-arn>",
  PIPES_NAME = "<aws.pipes.pipe-name>",
  PIPES_TARGET_ARN = "<aws.pipes.target-arn>",
  PIPE_EVENT_INGESTION_TIME = "<aws.pipes.event.ingestion-time>",
  PIPE_EVENT = "<aws.pipes.event>",
  PIPE_EVENT_JSON = "<aws.pipes.event.json>",
}

type StaticString = string;
type JsonPath = `<$.${string}>`;
type KeyValue = Record<string, string | reservedVariables>;
type StaticJsonFlat = Record<string, StaticString | JsonPath | KeyValue>;
type InputTransformJson = Record<
  string,
  StaticString | JsonPath | KeyValue | StaticJsonFlat
>;

type PipeInputTransformationValue = StaticString | InputTransformJson;

export interface IInputTransformationProps {
  inputTemplate: PipeInputTransformationValue;
}

export class PipeInputTransformation {
  static fromJson(inputTemplate: Record<string, any>): PipeInputTransformation {
    return new PipeInputTransformation({ inputTemplate });
  }

  readonly inputTemplate: string;

  constructor(props: IInputTransformationProps) {
    this.inputTemplate = JSON.stringify(props);
  }
}
```

### Open Question

1. The EventBridge L2 construct has a InputTransformation as well [see cdk docs](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_events.RuleTargetInput.html). Should this be reused/extended?
2. Should there be specific InputTransformation helper that are specific to a source similar to the Source filter.

#### Example config

- SQS -> Filter -> API Gateway -> SQS
  ```json
  {
    "Arn": "arn:aws:pipes:eu-central-1:XXXXXXXXXXX:pipe/PipeSqsToSqs",
    "CreationTime": "2023-01-04T10:57:58+01:00",
    "CurrentState": "RUNNING",
    "DesiredState": "RUNNING",
    "Enrichment": "arn:aws:execute-api:eu-central-1:XXXXXXXXXXX:yia5vn3gz0/prod/GET/pets",
    "EnrichmentParameters": {
      "HttpParameters": {
        "HeaderParameters": {
          "FoHEader": "Bar"
        },
        "QueryStringParameters": {
          "FooQuery": "$.detail.price"
        }
      }
    },
    "LastModifiedTime": "2023-01-20T09:02:00+01:00",
    "Name": "PipeSqsToSqs",
    "RoleArn": "arn:aws:iam::XXXXXXXXXXX:role/service-role/Amazon_EventBridge_Pipe_PipeSqsToSqs_26d9f0aa",
    "Source": "arn:aws:sqs:eu-central-1:XXXXXXXXXXX:PipeSource",
    "SourceParameters": {
      "FilterCriteria": {
        "Filters": [
          {
            "Pattern": "{\"awsRegion\":[{\"prefix\":\"eu\"}]}"
          }
        ]
      },
      "SqsQueueParameters": {
        "BatchSize": 1
      }
    },
    "StateReason": "USER_INITIATED",
    "Tags": {},
    "Target": "arn:aws:sqs:eu-central-1:XXXXXXXXXXX:PipeTarget",
    "TargetParameters": {}
  }
  ```
- SQS -> Filter -> API Destination -> SQS
  ```json
  {
    "Arn": "arn:aws:pipes:eu-central-1:XXXXXXXXXXX:pipe/PipeSqsToSqs",
    "CreationTime": "2023-01-04T10:57:58+01:00",
    "CurrentState": "UPDATING",
    "DesiredState": "RUNNING",
    "Enrichment": "arn:aws:events:eu-central-1:XXXXXXXXXXX:api-destination/Foo/fe7e2cbd-43da-435c-8e86-a2fa1a83f467",
    "EnrichmentParameters": {
      "HttpParameters": {
        "HeaderParameters": {
          "Dynamic": "$.detail.id",
          "FooBAr": "Static"
        },
        "QueryStringParameters": {
          "FooQueryDynamic": "$.detail.bar",
          "FooStaticQuery": "FooStaticQuery"
        }
      }
    },
    "LastModifiedTime": "2023-01-20T09:10:01+01:00",
    "Name": "PipeSqsToSqs",
    "RoleArn": "arn:aws:iam::XXXXXXXXXXX:role/service-role/Amazon_EventBridge_Pipe_PipeSqsToSqs_26d9f0aa",
    "Source": "arn:aws:sqs:eu-central-1:XXXXXXXXXXX:PipeSource",
    "SourceParameters": {
      "FilterCriteria": {
        "Filters": [
          {
            "Pattern": "{\"awsRegion\":[{\"prefix\":\"eu\"}]}"
          }
        ]
      },
      "SqsQueueParameters": {
        "BatchSize": 1
      }
    },
    "StateReason": "USER_INITIATED",
    "Tags": {},
    "Target": "arn:aws:sqs:eu-central-1:XXXXXXXXXXX:PipeTarget",
    "TargetParameters": {}
  }
  ```

  Source Policy: 

  ```json
  {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "sqs:ReceiveMessage",
                "sqs:DeleteMessage",
                "sqs:GetQueueAttributes"
            ],
            "Resource": [
                "arn:aws:sqs:eu-central-1:XXXXXXXXXXX:ExampleApiQueue"
            ]
        }
    ]
  }
  ```

- Kinesis -> Cloudwatch logs
  ```json
  {
    "Arn": "arn:aws:pipes:eu-central-1:XXXXXXXXXXX:pipe/KinesisPipe",
    "CreationTime": "2023-03-25T13:46:14+01:00",
    "CurrentState": "RUNNING",
    "DesiredState": "RUNNING",
    "EnrichmentParameters": {},
    "LastModifiedTime": "2023-03-25T13:46:21+01:00",
    "Name": "KinesisPipe",
    "RoleArn": "arn:aws:iam::XXXXXXXXXXX:role/service-role/Amazon_EventBridge_Pipe_KinesisPipe_1b3885bc",
    "Source": "arn:aws:kinesis:eu-central-1:XXXXXXXXXXX:stream/KinesisPipe",
    "SourceParameters": {
        "KinesisStreamParameters": {
            "BatchSize": 1,
            "MaximumBatchingWindowInSeconds": 1,
            "OnPartialBatchItemFailure": "AUTOMATIC_BISECT",
            "ParallelizationFactor": 1,
            "StartingPosition": "LATEST"
        }
    },
    "StateReason": "No records processed",
    "Tags": {},
    "Target": "arn:aws:logs:eu-central-1:XXXXXXXXXXX:log-group:/aws/events/rabbitmq",
    "TargetParameters": {}
  }
  ``` 

  Source Policy: 

  ```json
  {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "kinesis:DescribeStream",
                "kinesis:DescribeStreamSummary",
                "kinesis:GetRecords",
                "kinesis:GetShardIterator",
                "kinesis:ListStreams",
                "kinesis:ListShards"
            ],
            "Resource": [
                "arn:aws:kinesis:eu-central-1:XXXXXXXXXXX:stream/KinesisPipe"
            ]
        }
    ]
  }
  ```

- Amazon MQ RabbitMQ -> Cloudwatch logs
  ```json
  {
    "Arn": "arn:aws:pipes:eu-central-1:XXXXXXXXXXX:pipe/RabbitMqPipe",
    "CreationTime": "2023-03-25T13:58:42+01:00",
    "CurrentState": "RUNNING",
    "DesiredState": "RUNNING",
    "EnrichmentParameters": {},
    "LastModifiedTime": "2023-03-25T13:59:31+01:00",
    "Name": "RabbitMqPipe",
    "RoleArn": "arn:aws:iam::XXXXXXXXXXX:role/service-role/Amazon_EventBridge_Pipe_RabbitMqPipe_20c02f10",
    "Source": "arn:aws:mq:eu-central-1:XXXXXXXXXXX:broker:AcrivMqVpc:b-0303c682-33a0-4bbd-98ea-b0133df0c55f",
    "SourceParameters": {
        "RabbitMQBrokerParameters": {
            "BatchSize": 1,
            "Credentials": {
                "BasicAuth": "arn:aws:secretsmanager:eu-central-1:XXXXXXXXXXX:secret:rabbitmq-gdPMEk"
            },
            "QueueName": "Pipes",
            "VirtualHost": "/"
        }
    },
    "StateReason": "USER_INITIATED",
    "Tags": {},
    "Target": "arn:aws:logs:eu-central-1:XXXXXXXXXXX:log-group:/aws/events/RabbitMq",
    "TargetParameters": {}
  }
  ```

  Source Policy: 

  ```json
  {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "mq:DescribeBroker"
            ],
            "Resource": [
                "arn:aws:mq:eu-central-1:XXXXXXXXXXX:broker:AcrivMqVpc:b-0303c682-33a0-4bbd-98ea-b0133df0c55f"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "secretsmanager:GetSecretValue"
            ],
            "Resource": [
                "arn:aws:secretsmanager:eu-central-1:XXXXXXXXXXX:secret:rabbitmq-gdPMEk"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "ec2:DescribeNetworkInterfaces",
                "ec2:DescribeSubnets",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeVpcs"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "ec2:CreateNetworkInterface",
                "ec2:DeleteNetworkInterface"
            ],
            "Resource": "*",
            "Condition": {
                "StringEqualsIfExists": {
                    "ec2:SubnetID": [
                        "subnet-08a5ecbe78da46956"
                    ]
                }
            }
        }
    ]
  }
  ```



- Amazon MQ Active MQ -> Cloudwatch logs
  ```json
  {
    "Arn": "arn:aws:pipes:eu-central-1:XXXXXXXXXXX:pipe/ApacheMqPipe",
    "CreationTime": "2023-03-25T14:09:40+01:00",
    "CurrentState": "RUNNING",
    "DesiredState": "RUNNING",
    "EnrichmentParameters": {},
    "LastModifiedTime": "2023-03-25T14:10:44+01:00",
    "Name": "ApacheMqPipe",
    "RoleArn": "arn:aws:iam::XXXXXXXXXXX:role/service-role/Amazon_EventBridge_Pipe_ApacheMqPipe_2481bec9",
    "Source": "arn:aws:mq:eu-central-1:XXXXXXXXXXX:broker:ActiveMq-Broker1:b-045db734-ca3e-4f03-acb5-8191beeb009d",
    "SourceParameters": {
        "ActiveMQBrokerParameters": {
            "BatchSize": 1,
            "Credentials": {
                "BasicAuth": "arn:aws:secretsmanager:eu-central-1:XXXXXXXXXXX:secret:rabbitmq-gdPMEk"
            },
            "QueueName": "Pipes"
        }
    },
    "StateReason": "USER_INITIATED",
    "Tags": {},
    "Target": "arn:aws:logs:eu-central-1:XXXXXXXXXXX:log-group:/aws/events/ApacheMqPipe",
    "TargetParameters": {}
  }
  ```

  Source Policy:

  ```json
  {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "mq:DescribeBroker"
            ],
            "Resource": [
                "arn:aws:mq:eu-central-1:XXXXXXXXXXX:broker:ActiveMq-Broker1:b-045db734-ca3e-4f03-acb5-8191beeb009d"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "secretsmanager:GetSecretValue"
            ],
            "Resource": [
                "arn:aws:secretsmanager:eu-central-1:XXXXXXXXXXX:secret:rabbitmq-gdPMEk"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "ec2:DescribeNetworkInterfaces",
                "ec2:DescribeSubnets",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeVpcs"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "ec2:CreateNetworkInterface",
                "ec2:DeleteNetworkInterface"
            ],
            "Resource": "*",
            "Condition": {
                "StringEqualsIfExists": {
                    "ec2:SubnetID": [
                        "subnet-05c76962865a020d0"
                    ]
                }
            }
        }
    ]
  }
  ```

- MSK Cluster -> Cloudwatch logs
  
  ```json
  {
    "Arn": "arn:aws:pipes:eu-central-1:XXXXXXXXXXX:pipe/MSKPipe",
    "CreationTime": "2023-03-25T14:35:12+01:00",
    "CurrentState": "RUNNING",
    "DesiredState": "RUNNING",
    "EnrichmentParameters": {},
    "LastModifiedTime": "2023-03-25T14:37:59+01:00",
    "Name": "MSKPipe",
    "RoleArn": "arn:aws:iam::XXXXXXXXXXX:role/service-role/Amazon_EventBridge_Pipe_MSKPipe_6f65c436",
    "Source": "arn:aws:kafka:eu-central-1:XXXXXXXXXXX:cluster/demo-cluster-1/5c830310-fea4-4adc-9a67-2da4bcf9130b-s2",
    "SourceParameters": {
        "ManagedStreamingKafkaParameters": {
            "BatchSize": 1,
            "ConsumerGroupID": "pipes-consumer-group-id",
            "StartingPosition": "TRIM_HORIZON",
            "TopicName": "pipes-topic"
        }
    },
    "StateReason": "USER_INITIATED",
    "Tags": {},
    "Target": "arn:aws:logs:eu-central-1:XXXXXXXXXXX:log-group:/aws/events/MskPipe",
    "TargetParameters": {}
  }
  ````

  Source Policy:
  **Note:**: The policy has no connect or read permissions on the cluster. I think this policy is not working. 

  ```json
  {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "kafka:DescribeCluster",
                "kafka:DescribeClusterV2",
                "kafka:GetBootstrapBrokers"
            ],
            "Resource": [
                "arn:aws:kafka:eu-central-1:XXXXXXXXXXX:cluster/demo-cluster-1/5c830310-fea4-4adc-9a67-2da4bcf9130b-s2"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "ec2:DescribeNetworkInterfaces",
                "ec2:DescribeSubnets",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeVpcs"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "ec2:CreateNetworkInterface",
                "ec2:DeleteNetworkInterface"
            ],
            "Resource": "*",
            "Condition": {
                "StringEqualsIfExists": {
                    "ec2:SubnetID": [
                        "subnet-085642ba241b81254",
                        "subnet-08a5ecbe78da46956",
                        "subnet-05c76962865a020d0"
                    ]
                }
            }
        }
    ]
  }
  ```
  
- Self Managed Kafka Cluster -> Cloudwatch logs
  
  ```json
  {
    "Arn": "arn:aws:pipes:eu-central-1:XXXXXXXXXXX:pipe/KafkaPipe",
    "CreationTime": "2023-03-25T15:44:18+01:00",
    "CurrentState": "CREATE_FAILED",
    "DesiredState": "RUNNING",
    "EnrichmentParameters": {},
    "LastModifiedTime": "2023-03-25T15:44:28+01:00",
    "Name": "KafkaPipe",
    "RoleArn": "arn:aws:iam::XXXXXXXXXXX:role/service-role/Amazon_EventBridge_Pipe_KafkaPipe_0b2197cf",
    "Source": "smk://some.bootstrap.server:12345",
    "SourceParameters": {
        "SelfManagedKafkaParameters": {
            "BatchSize": 1,
            "Credentials": {
                "ClientCertificateTlsAuth": "arn:aws:secretsmanager:eu-central-1:XXXXXXXXXXX:secret:rabbitmq-gdPMEk"
            },
            "ServerRootCaCertificate": "arn:aws:secretsmanager:eu-central-1:XXXXXXXXXXX:secret:rabbitmq-gdPMEk",
            "StartingPosition": "LATEST",
            "TopicName": "PipesTopic"
        }
    },
    "Tags": {},
    "Target": "arn:aws:logs:eu-central-1:XXXXXXXXXXX:log-group:/aws/events/KafkaPipe",
    "TargetParameters": {}
  }
  ````

  Source Policy:
  **Note:**: The policy has no connect or read permissions on the cluster. I think this policy is not working. 

  ```json
  {
      "Version": "2012-10-17",
      "Statement": [
          {
              "Effect": "Allow",
              "Action": [
                  "secretsmanager:GetSecretValue"
              ],
              "Resource": [
                  "arn:aws:secretsmanager:eu-central-1:XXXXXXXXXXX:secret:rabbitmq-gdPMEk"
              ]
          }
      ]
  }
  ```