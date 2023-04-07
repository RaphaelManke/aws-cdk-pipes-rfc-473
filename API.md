# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pipe <a name="Pipe" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipe">IPipe</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.Initializer"></a>

```typescript
import { Pipe } from '@raphaelmanke/aws-cdk-pipes-rfc'

new Pipe(scope: Construct, id: string, props: IPipeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.Pipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.Pipe.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.Pipe.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps">IPipeProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps">IPipeProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.Pipe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.Pipe.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.Pipe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.Pipe.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.Pipe.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.isConstruct"></a>

```typescript
import { Pipe } from '@raphaelmanke/aws-cdk-pipes-rfc'

Pipe.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.isOwnedResource"></a>

```typescript
import { Pipe } from '@raphaelmanke/aws-cdk-pipes-rfc'

Pipe.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.isResource"></a>

```typescript
import { Pipe } from '@raphaelmanke/aws-cdk-pipes-rfc'

Pipe.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.Pipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.Pipe.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.Pipe.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.Pipe.property.pipeArn">pipeArn</a></code> | <code>string</code> | The ARN of the pipe. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.Pipe.property.pipeName">pipeName</a></code> | <code>string</code> | The name of the pipe. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.Pipe.property.pipeRole">pipeRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used by the pipe. |

---

##### `node`<sup>Required</sup> <a name="node" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `pipeArn`<sup>Required</sup> <a name="pipeArn" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.property.pipeArn"></a>

```typescript
public readonly pipeArn: string;
```

- *Type:* string

The ARN of the pipe.

---

##### `pipeName`<sup>Required</sup> <a name="pipeName" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.property.pipeName"></a>

```typescript
public readonly pipeName: string;
```

- *Type:* string

The name of the pipe.

---

##### `pipeRole`<sup>Required</sup> <a name="pipeRole" id="@raphaelmanke/aws-cdk-pipes-rfc.Pipe.property.pipeRole"></a>

```typescript
public readonly pipeRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role used by the pipe.

---


## Structs <a name="Structs" id="Structs"></a>

### PipeSourceDeadLetterConfig <a name="PipeSourceDeadLetterConfig" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceDeadLetterConfig.Initializer"></a>

```typescript
import { PipeSourceDeadLetterConfig } from '@raphaelmanke/aws-cdk-pipes-rfc'

const pipeSourceDeadLetterConfig: PipeSourceDeadLetterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceDeadLetterConfig.property.queue">queue</a></code> | <code>aws-cdk-lib.aws_sqs.Queue</code> | The ARN of the Amazon SQS queue specified as the target for the dead-letter queue. |

---

##### `queue`<sup>Required</sup> <a name="queue" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceDeadLetterConfig.property.queue"></a>

```typescript
public readonly queue: Queue;
```

- *Type:* aws-cdk-lib.aws_sqs.Queue

The ARN of the Amazon SQS queue specified as the target for the dead-letter queue.

see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-deadletterconfig.html#cfn-pipes-pipe-deadletterconfig-arn

---

## Classes <a name="Classes" id="Classes"></a>

### ActiveMqBrokerSource <a name="ActiveMqBrokerSource" id="@raphaelmanke/aws-cdk-pipes-rfc.ActiveMqBrokerSource"></a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.ActiveMqBrokerSource.Initializer"></a>

```typescript
import { ActiveMqBrokerSource } from '@raphaelmanke/aws-cdk-pipes-rfc'

new ActiveMqBrokerSource(broker: CfnBroker, props: IAmazonMqBrokerSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ActiveMqBrokerSource.Initializer.parameter.broker">broker</a></code> | <code>aws-cdk-lib.aws_amazonmq.CfnBroker</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ActiveMqBrokerSource.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IAmazonMqBrokerSourceProps">IAmazonMqBrokerSourceProps</a></code> | *No description.* |

---

##### `broker`<sup>Required</sup> <a name="broker" id="@raphaelmanke/aws-cdk-pipes-rfc.ActiveMqBrokerSource.Initializer.parameter.broker"></a>

- *Type:* aws-cdk-lib.aws_amazonmq.CfnBroker

---

##### `props`<sup>Required</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.ActiveMqBrokerSource.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IAmazonMqBrokerSourceProps">IAmazonMqBrokerSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ActiveMqBrokerSource.grantRead">grantRead</a></code> | *No description.* |

---

##### `grantRead` <a name="grantRead" id="@raphaelmanke/aws-cdk-pipes-rfc.ActiveMqBrokerSource.grantRead"></a>

```typescript
public grantRead(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.ActiveMqBrokerSource.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ActiveMqBrokerSource.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ActiveMqBrokerSource.property.sourceParameters">sourceParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty \| aws-cdk-lib.IResolvable</code> | *No description.* |

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@raphaelmanke/aws-cdk-pipes-rfc.ActiveMqBrokerSource.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `sourceParameters`<sup>Optional</sup> <a name="sourceParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.ActiveMqBrokerSource.property.sourceParameters"></a>

```typescript
public readonly sourceParameters: PipeSourceParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty | aws-cdk-lib.IResolvable

---


### AmazonMqBrokerSource <a name="AmazonMqBrokerSource" id="@raphaelmanke/aws-cdk-pipes-rfc.AmazonMqBrokerSource"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSource">IPipeSource</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.AmazonMqBrokerSource.Initializer"></a>

```typescript
import { AmazonMqBrokerSource } from '@raphaelmanke/aws-cdk-pipes-rfc'

new AmazonMqBrokerSource(broker: CfnBroker, props: IAmazonMqBrokerSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.AmazonMqBrokerSource.Initializer.parameter.broker">broker</a></code> | <code>aws-cdk-lib.aws_amazonmq.CfnBroker</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.AmazonMqBrokerSource.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IAmazonMqBrokerSourceProps">IAmazonMqBrokerSourceProps</a></code> | *No description.* |

---

##### `broker`<sup>Required</sup> <a name="broker" id="@raphaelmanke/aws-cdk-pipes-rfc.AmazonMqBrokerSource.Initializer.parameter.broker"></a>

- *Type:* aws-cdk-lib.aws_amazonmq.CfnBroker

---

##### `props`<sup>Required</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.AmazonMqBrokerSource.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IAmazonMqBrokerSourceProps">IAmazonMqBrokerSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.AmazonMqBrokerSource.grantRead">grantRead</a></code> | *No description.* |

---

##### `grantRead` <a name="grantRead" id="@raphaelmanke/aws-cdk-pipes-rfc.AmazonMqBrokerSource.grantRead"></a>

```typescript
public grantRead(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.AmazonMqBrokerSource.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.AmazonMqBrokerSource.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.AmazonMqBrokerSource.property.sourceParameters">sourceParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty \| aws-cdk-lib.IResolvable</code> | *No description.* |

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@raphaelmanke/aws-cdk-pipes-rfc.AmazonMqBrokerSource.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `sourceParameters`<sup>Optional</sup> <a name="sourceParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.AmazonMqBrokerSource.property.sourceParameters"></a>

```typescript
public readonly sourceParameters: PipeSourceParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty | aws-cdk-lib.IResolvable

---


### ApiDestinationEnrichment <a name="ApiDestinationEnrichment" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationEnrichment"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeEnrichment">IPipeEnrichment</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationEnrichment.Initializer"></a>

```typescript
import { ApiDestinationEnrichment } from '@raphaelmanke/aws-cdk-pipes-rfc'

new ApiDestinationEnrichment(apiDestination: IApiDestination, props?: IApiDestinationEnrichmentParameters)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationEnrichment.Initializer.parameter.apiDestination">apiDestination</a></code> | <code>aws-cdk-lib.aws_events.IApiDestination</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationEnrichment.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationEnrichmentParameters">IApiDestinationEnrichmentParameters</a></code> | *No description.* |

---

##### `apiDestination`<sup>Required</sup> <a name="apiDestination" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationEnrichment.Initializer.parameter.apiDestination"></a>

- *Type:* aws-cdk-lib.aws_events.IApiDestination

---

##### `props`<sup>Optional</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationEnrichment.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationEnrichmentParameters">IApiDestinationEnrichmentParameters</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationEnrichment.grantInvoke">grantInvoke</a></code> | *No description.* |

---

##### `grantInvoke` <a name="grantInvoke" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationEnrichment.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationEnrichment.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationEnrichment.property.enrichmentArn">enrichmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationEnrichment.property.enrichmentParameters">enrichmentParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty</code> | *No description.* |

---

##### `enrichmentArn`<sup>Required</sup> <a name="enrichmentArn" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationEnrichment.property.enrichmentArn"></a>

```typescript
public readonly enrichmentArn: string;
```

- *Type:* string

---

##### `enrichmentParameters`<sup>Required</sup> <a name="enrichmentParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationEnrichment.property.enrichmentParameters"></a>

```typescript
public readonly enrichmentParameters: PipeEnrichmentParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty

---


### ApiDestinationTarget <a name="ApiDestinationTarget" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationTarget"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget">IPipeTarget</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationTarget.Initializer"></a>

```typescript
import { ApiDestinationTarget } from '@raphaelmanke/aws-cdk-pipes-rfc'

new ApiDestinationTarget(http: IApiDestination, props: IApiDestinationTargetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationTarget.Initializer.parameter.http">http</a></code> | <code>aws-cdk-lib.aws_events.IApiDestination</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationTarget.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationTargetProps">IApiDestinationTargetProps</a></code> | *No description.* |

---

##### `http`<sup>Required</sup> <a name="http" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationTarget.Initializer.parameter.http"></a>

- *Type:* aws-cdk-lib.aws_events.IApiDestination

---

##### `props`<sup>Required</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationTarget.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationTargetProps">IApiDestinationTargetProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationTarget.grantPush">grantPush</a></code> | *No description.* |

---

##### `grantPush` <a name="grantPush" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationTarget.grantPush"></a>

```typescript
public grantPush(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationTarget.grantPush.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationTarget.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationTarget.property.targetParameters">targetParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty</code> | *No description.* |

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationTarget.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `targetParameters`<sup>Required</sup> <a name="targetParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationTarget.property.targetParameters"></a>

```typescript
public readonly targetParameters: PipeTargetParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty

---


### ApiGatewayEnrichment <a name="ApiGatewayEnrichment" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayEnrichment"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeEnrichment">IPipeEnrichment</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayEnrichment.Initializer"></a>

```typescript
import { ApiGatewayEnrichment } from '@raphaelmanke/aws-cdk-pipes-rfc'

new ApiGatewayEnrichment(api: IRestApi, props: IApiGatewayEnrichmentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayEnrichment.Initializer.parameter.api">api</a></code> | <code>aws-cdk-lib.aws_apigateway.IRestApi</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayEnrichment.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayEnrichmentProps">IApiGatewayEnrichmentProps</a></code> | *No description.* |

---

##### `api`<sup>Required</sup> <a name="api" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayEnrichment.Initializer.parameter.api"></a>

- *Type:* aws-cdk-lib.aws_apigateway.IRestApi

---

##### `props`<sup>Required</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayEnrichment.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayEnrichmentProps">IApiGatewayEnrichmentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayEnrichment.grantInvoke">grantInvoke</a></code> | *No description.* |

---

##### `grantInvoke` <a name="grantInvoke" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayEnrichment.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayEnrichment.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayEnrichment.property.enrichmentArn">enrichmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayEnrichment.property.enrichmentParameters">enrichmentParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty</code> | *No description.* |

---

##### `enrichmentArn`<sup>Required</sup> <a name="enrichmentArn" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayEnrichment.property.enrichmentArn"></a>

```typescript
public readonly enrichmentArn: string;
```

- *Type:* string

---

##### `enrichmentParameters`<sup>Required</sup> <a name="enrichmentParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayEnrichment.property.enrichmentParameters"></a>

```typescript
public readonly enrichmentParameters: PipeEnrichmentParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty

---


### ApiGatewayTarget <a name="ApiGatewayTarget" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayTarget"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget">IPipeTarget</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayTarget.Initializer"></a>

```typescript
import { ApiGatewayTarget } from '@raphaelmanke/aws-cdk-pipes-rfc'

new ApiGatewayTarget(http: IRestApi, props: IApiGatewayTargetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayTarget.Initializer.parameter.http">http</a></code> | <code>aws-cdk-lib.aws_apigateway.IRestApi</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayTarget.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayTargetProps">IApiGatewayTargetProps</a></code> | *No description.* |

---

##### `http`<sup>Required</sup> <a name="http" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayTarget.Initializer.parameter.http"></a>

- *Type:* aws-cdk-lib.aws_apigateway.IRestApi

---

##### `props`<sup>Required</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayTarget.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayTargetProps">IApiGatewayTargetProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayTarget.grantPush">grantPush</a></code> | *No description.* |

---

##### `grantPush` <a name="grantPush" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayTarget.grantPush"></a>

```typescript
public grantPush(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayTarget.grantPush.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayTarget.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayTarget.property.targetParameters">targetParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty</code> | *No description.* |

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayTarget.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `targetParameters`<sup>Required</sup> <a name="targetParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayTarget.property.targetParameters"></a>

```typescript
public readonly targetParameters: PipeTargetParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty

---


### DynamoDBStreamSource <a name="DynamoDBStreamSource" id="@raphaelmanke/aws-cdk-pipes-rfc.DynamoDBStreamSource"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSource">IPipeSource</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.DynamoDBStreamSource.Initializer"></a>

```typescript
import { DynamoDBStreamSource } from '@raphaelmanke/aws-cdk-pipes-rfc'

new DynamoDBStreamSource(table: ITable, props: IDynamoDBStreamSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.DynamoDBStreamSource.Initializer.parameter.table">table</a></code> | <code>aws-cdk-lib.aws_dynamodb.ITable</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.DynamoDBStreamSource.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps">IDynamoDBStreamSourceProps</a></code> | *No description.* |

---

##### `table`<sup>Required</sup> <a name="table" id="@raphaelmanke/aws-cdk-pipes-rfc.DynamoDBStreamSource.Initializer.parameter.table"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.ITable

---

##### `props`<sup>Required</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.DynamoDBStreamSource.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps">IDynamoDBStreamSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.DynamoDBStreamSource.grantRead">grantRead</a></code> | *No description.* |

---

##### `grantRead` <a name="grantRead" id="@raphaelmanke/aws-cdk-pipes-rfc.DynamoDBStreamSource.grantRead"></a>

```typescript
public grantRead(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.DynamoDBStreamSource.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.DynamoDBStreamSource.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.DynamoDBStreamSource.property.sourceParameters">sourceParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty \| aws-cdk-lib.IResolvable</code> | *No description.* |

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@raphaelmanke/aws-cdk-pipes-rfc.DynamoDBStreamSource.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `sourceParameters`<sup>Optional</sup> <a name="sourceParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.DynamoDBStreamSource.property.sourceParameters"></a>

```typescript
public readonly sourceParameters: PipeSourceParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty | aws-cdk-lib.IResolvable

---


### EventBridgeEventBusTarget <a name="EventBridgeEventBusTarget" id="@raphaelmanke/aws-cdk-pipes-rfc.EventBridgeEventBusTarget"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget">IPipeTarget</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.EventBridgeEventBusTarget.Initializer"></a>

```typescript
import { EventBridgeEventBusTarget } from '@raphaelmanke/aws-cdk-pipes-rfc'

new EventBridgeEventBusTarget(eventBus: IEventBus, props: IEventBusTargetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.EventBridgeEventBusTarget.Initializer.parameter.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.EventBridgeEventBusTarget.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IEventBusTargetProps">IEventBusTargetProps</a></code> | *No description.* |

---

##### `eventBus`<sup>Required</sup> <a name="eventBus" id="@raphaelmanke/aws-cdk-pipes-rfc.EventBridgeEventBusTarget.Initializer.parameter.eventBus"></a>

- *Type:* aws-cdk-lib.aws_events.IEventBus

---

##### `props`<sup>Required</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.EventBridgeEventBusTarget.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IEventBusTargetProps">IEventBusTargetProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.EventBridgeEventBusTarget.grantPush">grantPush</a></code> | *No description.* |

---

##### `grantPush` <a name="grantPush" id="@raphaelmanke/aws-cdk-pipes-rfc.EventBridgeEventBusTarget.grantPush"></a>

```typescript
public grantPush(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.EventBridgeEventBusTarget.grantPush.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.EventBridgeEventBusTarget.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.EventBridgeEventBusTarget.property.targetParameters">targetParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty</code> | *No description.* |

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@raphaelmanke/aws-cdk-pipes-rfc.EventBridgeEventBusTarget.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `targetParameters`<sup>Required</sup> <a name="targetParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.EventBridgeEventBusTarget.property.targetParameters"></a>

```typescript
public readonly targetParameters: PipeTargetParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty

---


### KinesisStreamSource <a name="KinesisStreamSource" id="@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamSource"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSource">IPipeSource</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamSource.Initializer"></a>

```typescript
import { KinesisStreamSource } from '@raphaelmanke/aws-cdk-pipes-rfc'

new KinesisStreamSource(kinesisStream: Stream, props: IKinesisStreamSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamSource.Initializer.parameter.kinesisStream">kinesisStream</a></code> | <code>aws-cdk-lib.aws_kinesis.Stream</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamSource.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps">IKinesisStreamSourceProps</a></code> | *No description.* |

---

##### `kinesisStream`<sup>Required</sup> <a name="kinesisStream" id="@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamSource.Initializer.parameter.kinesisStream"></a>

- *Type:* aws-cdk-lib.aws_kinesis.Stream

---

##### `props`<sup>Required</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamSource.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps">IKinesisStreamSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamSource.grantRead">grantRead</a></code> | *No description.* |

---

##### `grantRead` <a name="grantRead" id="@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamSource.grantRead"></a>

```typescript
public grantRead(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamSource.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamSource.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamSource.property.sourceParameters">sourceParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty \| aws-cdk-lib.IResolvable</code> | *No description.* |

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamSource.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `sourceParameters`<sup>Optional</sup> <a name="sourceParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamSource.property.sourceParameters"></a>

```typescript
public readonly sourceParameters: PipeSourceParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty | aws-cdk-lib.IResolvable

---


### KinesisStreamTarget <a name="KinesisStreamTarget" id="@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamTarget"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget">IPipeTarget</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamTarget.Initializer"></a>

```typescript
import { KinesisStreamTarget } from '@raphaelmanke/aws-cdk-pipes-rfc'

new KinesisStreamTarget(stream: IStream, props: IKinesisStreamTargetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamTarget.Initializer.parameter.stream">stream</a></code> | <code>aws-cdk-lib.aws_kinesis.IStream</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamTarget.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamTargetProps">IKinesisStreamTargetProps</a></code> | *No description.* |

---

##### `stream`<sup>Required</sup> <a name="stream" id="@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamTarget.Initializer.parameter.stream"></a>

- *Type:* aws-cdk-lib.aws_kinesis.IStream

---

##### `props`<sup>Required</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamTarget.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamTargetProps">IKinesisStreamTargetProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamTarget.grantPush">grantPush</a></code> | *No description.* |

---

##### `grantPush` <a name="grantPush" id="@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamTarget.grantPush"></a>

```typescript
public grantPush(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamTarget.grantPush.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamTarget.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamTarget.property.targetParameters">targetParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty</code> | *No description.* |

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamTarget.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `targetParameters`<sup>Required</sup> <a name="targetParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamTarget.property.targetParameters"></a>

```typescript
public readonly targetParameters: PipeTargetParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty

---


### LambdaEnrichment <a name="LambdaEnrichment" id="@raphaelmanke/aws-cdk-pipes-rfc.LambdaEnrichment"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeEnrichment">IPipeEnrichment</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.LambdaEnrichment.Initializer"></a>

```typescript
import { LambdaEnrichment } from '@raphaelmanke/aws-cdk-pipes-rfc'

new LambdaEnrichment(lambda: IFunction, props?: ILambdaEnrichmentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.LambdaEnrichment.Initializer.parameter.lambda">lambda</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.LambdaEnrichment.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ILambdaEnrichmentProps">ILambdaEnrichmentProps</a></code> | *No description.* |

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@raphaelmanke/aws-cdk-pipes-rfc.LambdaEnrichment.Initializer.parameter.lambda"></a>

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---

##### `props`<sup>Optional</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.LambdaEnrichment.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ILambdaEnrichmentProps">ILambdaEnrichmentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.LambdaEnrichment.grantInvoke">grantInvoke</a></code> | *No description.* |

---

##### `grantInvoke` <a name="grantInvoke" id="@raphaelmanke/aws-cdk-pipes-rfc.LambdaEnrichment.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.LambdaEnrichment.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.LambdaEnrichment.property.enrichmentArn">enrichmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.LambdaEnrichment.property.enrichmentParameters">enrichmentParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty</code> | *No description.* |

---

##### `enrichmentArn`<sup>Required</sup> <a name="enrichmentArn" id="@raphaelmanke/aws-cdk-pipes-rfc.LambdaEnrichment.property.enrichmentArn"></a>

```typescript
public readonly enrichmentArn: string;
```

- *Type:* string

---

##### `enrichmentParameters`<sup>Required</sup> <a name="enrichmentParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.LambdaEnrichment.property.enrichmentParameters"></a>

```typescript
public readonly enrichmentParameters: PipeEnrichmentParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty

---


### LambdaTarget <a name="LambdaTarget" id="@raphaelmanke/aws-cdk-pipes-rfc.LambdaTarget"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget">IPipeTarget</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.LambdaTarget.Initializer"></a>

```typescript
import { LambdaTarget } from '@raphaelmanke/aws-cdk-pipes-rfc'

new LambdaTarget(lambda: IFunction, props?: ILambdaTargetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.LambdaTarget.Initializer.parameter.lambda">lambda</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.LambdaTarget.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ILambdaTargetProps">ILambdaTargetProps</a></code> | *No description.* |

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@raphaelmanke/aws-cdk-pipes-rfc.LambdaTarget.Initializer.parameter.lambda"></a>

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---

##### `props`<sup>Optional</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.LambdaTarget.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ILambdaTargetProps">ILambdaTargetProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.LambdaTarget.grantPush">grantPush</a></code> | *No description.* |

---

##### `grantPush` <a name="grantPush" id="@raphaelmanke/aws-cdk-pipes-rfc.LambdaTarget.grantPush"></a>

```typescript
public grantPush(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.LambdaTarget.grantPush.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.LambdaTarget.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.LambdaTarget.property.targetParameters">targetParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty</code> | *No description.* |

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@raphaelmanke/aws-cdk-pipes-rfc.LambdaTarget.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `targetParameters`<sup>Required</sup> <a name="targetParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.LambdaTarget.property.targetParameters"></a>

```typescript
public readonly targetParameters: PipeTargetParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty

---


### LogsTarget <a name="LogsTarget" id="@raphaelmanke/aws-cdk-pipes-rfc.LogsTarget"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget">IPipeTarget</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.LogsTarget.Initializer"></a>

```typescript
import { LogsTarget } from '@raphaelmanke/aws-cdk-pipes-rfc'

new LogsTarget(logGroup: ILogGroup, props?: ILogsTargetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.LogsTarget.Initializer.parameter.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.LogsTarget.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ILogsTargetProps">ILogsTargetProps</a></code> | *No description.* |

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@raphaelmanke/aws-cdk-pipes-rfc.LogsTarget.Initializer.parameter.logGroup"></a>

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

---

##### `props`<sup>Optional</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.LogsTarget.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ILogsTargetProps">ILogsTargetProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.LogsTarget.grantPush">grantPush</a></code> | *No description.* |

---

##### `grantPush` <a name="grantPush" id="@raphaelmanke/aws-cdk-pipes-rfc.LogsTarget.grantPush"></a>

```typescript
public grantPush(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.LogsTarget.grantPush.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.LogsTarget.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.LogsTarget.property.targetParameters">targetParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty</code> | *No description.* |

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@raphaelmanke/aws-cdk-pipes-rfc.LogsTarget.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `targetParameters`<sup>Required</sup> <a name="targetParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.LogsTarget.property.targetParameters"></a>

```typescript
public readonly targetParameters: PipeTargetParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty

---


### MskSource <a name="MskSource" id="@raphaelmanke/aws-cdk-pipes-rfc.MskSource"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSource">IPipeSource</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.MskSource.Initializer"></a>

```typescript
import { MskSource } from '@raphaelmanke/aws-cdk-pipes-rfc'

new MskSource(cluster: CfnCluster | CfnServerlessCluster, props: IMskSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.MskSource.Initializer.parameter.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_msk.CfnCluster \| aws-cdk-lib.aws_msk.CfnServerlessCluster</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.MskSource.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceProps">IMskSourceProps</a></code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@raphaelmanke/aws-cdk-pipes-rfc.MskSource.Initializer.parameter.cluster"></a>

- *Type:* aws-cdk-lib.aws_msk.CfnCluster | aws-cdk-lib.aws_msk.CfnServerlessCluster

---

##### `props`<sup>Required</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.MskSource.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceProps">IMskSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.MskSource.grantRead">grantRead</a></code> | *No description.* |

---

##### `grantRead` <a name="grantRead" id="@raphaelmanke/aws-cdk-pipes-rfc.MskSource.grantRead"></a>

```typescript
public grantRead(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.MskSource.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.MskSource.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.MskSource.property.sourceParameters">sourceParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty \| aws-cdk-lib.IResolvable</code> | *No description.* |

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@raphaelmanke/aws-cdk-pipes-rfc.MskSource.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `sourceParameters`<sup>Optional</sup> <a name="sourceParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.MskSource.property.sourceParameters"></a>

```typescript
public readonly sourceParameters: PipeSourceParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty | aws-cdk-lib.IResolvable

---


### PipeEnrichment <a name="PipeEnrichment" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeEnrichment"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeEnrichment">IPipeEnrichment</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeEnrichment.Initializer"></a>

```typescript
import { PipeEnrichment } from '@raphaelmanke/aws-cdk-pipes-rfc'

new PipeEnrichment(enrichmentArn: string, props: PipeEnrichmentParametersProperty)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeEnrichment.Initializer.parameter.enrichmentArn">enrichmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeEnrichment.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty</code> | *No description.* |

---

##### `enrichmentArn`<sup>Required</sup> <a name="enrichmentArn" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeEnrichment.Initializer.parameter.enrichmentArn"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeEnrichment.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeEnrichment.grantInvoke">grantInvoke</a></code> | *No description.* |

---

##### `grantInvoke` <a name="grantInvoke" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeEnrichment.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeEnrichment.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeEnrichment.property.enrichmentArn">enrichmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeEnrichment.property.enrichmentParameters">enrichmentParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty</code> | *No description.* |

---

##### `enrichmentArn`<sup>Required</sup> <a name="enrichmentArn" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeEnrichment.property.enrichmentArn"></a>

```typescript
public readonly enrichmentArn: string;
```

- *Type:* string

---

##### `enrichmentParameters`<sup>Required</sup> <a name="enrichmentParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeEnrichment.property.enrichmentParameters"></a>

```typescript
public readonly enrichmentParameters: PipeEnrichmentParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty

---


### PipeGenericFilterPattern <a name="PipeGenericFilterPattern" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeGenericFilterPattern"></a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeGenericFilterPattern.Initializer"></a>

```typescript
import { PipeGenericFilterPattern } from '@raphaelmanke/aws-cdk-pipes-rfc'

new PipeGenericFilterPattern()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeGenericFilterPattern.fromJson">fromJson</a></code> | *No description.* |

---

##### `fromJson` <a name="fromJson" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeGenericFilterPattern.fromJson"></a>

```typescript
import { PipeGenericFilterPattern } from '@raphaelmanke/aws-cdk-pipes-rfc'

PipeGenericFilterPattern.fromJson(patternObject: {[ key: string ]: any})
```

###### `patternObject`<sup>Required</sup> <a name="patternObject" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeGenericFilterPattern.fromJson.parameter.patternObject"></a>

- *Type:* {[ key: string ]: any}

---



### PipeInputTransformation <a name="PipeInputTransformation" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeInputTransformation"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeInputTransformation.Initializer"></a>

```typescript
import { PipeInputTransformation } from '@raphaelmanke/aws-cdk-pipes-rfc'

new PipeInputTransformation(inputTemplate: string | {[ key: string ]: string | {[ key: string ]: string} | {[ key: string ]: string | {[ key: string ]: string}}})
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeInputTransformation.Initializer.parameter.inputTemplate">inputTemplate</a></code> | <code>string \| {[ key: string ]: string \| {[ key: string ]: string} \| {[ key: string ]: string \| {[ key: string ]: string}}}</code> | *No description.* |

---

##### `inputTemplate`<sup>Required</sup> <a name="inputTemplate" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeInputTransformation.Initializer.parameter.inputTemplate"></a>

- *Type:* string | {[ key: string ]: string | {[ key: string ]: string} | {[ key: string ]: string | {[ key: string ]: string}}}

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeInputTransformation.fromJson">fromJson</a></code> | *No description.* |

---

##### `fromJson` <a name="fromJson" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeInputTransformation.fromJson"></a>

```typescript
import { PipeInputTransformation } from '@raphaelmanke/aws-cdk-pipes-rfc'

PipeInputTransformation.fromJson(inputTemplate: {[ key: string ]: any})
```

###### `inputTemplate`<sup>Required</sup> <a name="inputTemplate" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeInputTransformation.fromJson.parameter.inputTemplate"></a>

- *Type:* {[ key: string ]: any}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeInputTransformation.property.inputTemplate">inputTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `inputTemplate`<sup>Required</sup> <a name="inputTemplate" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeInputTransformation.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: string;
```

- *Type:* string

---


### PipeSourceFilter <a name="PipeSourceFilter" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceFilter"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceFilter">IPipeSourceFilter</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceFilter.Initializer"></a>

```typescript
import { PipeSourceFilter } from '@raphaelmanke/aws-cdk-pipes-rfc'

new PipeSourceFilter(filter: IPipeFilterPattern[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceFilter.Initializer.parameter.filter">filter</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeFilterPattern">IPipeFilterPattern</a>[]</code> | *No description.* |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceFilter.Initializer.parameter.filter"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeFilterPattern">IPipeFilterPattern</a>[]

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceFilter.property.filters">filters</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeFilterPattern">IPipeFilterPattern</a>[]</code> | *No description.* |

---

##### `filters`<sup>Required</sup> <a name="filters" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceFilter.property.filters"></a>

```typescript
public readonly filters: IPipeFilterPattern[];
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeFilterPattern">IPipeFilterPattern</a>[]

---


### PipeSqsFilterPattern <a name="PipeSqsFilterPattern" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSqsFilterPattern"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceFilter">IPipeSourceFilter</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSqsFilterPattern.Initializer"></a>

```typescript
import { PipeSqsFilterPattern } from '@raphaelmanke/aws-cdk-pipes-rfc'

new PipeSqsFilterPattern(props: IPipeFilterPattern[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSqsFilterPattern.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeFilterPattern">IPipeFilterPattern</a>[]</code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSqsFilterPattern.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeFilterPattern">IPipeFilterPattern</a>[]

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSqsFilterPattern.fromSqsMessageAttributes">fromSqsMessageAttributes</a></code> | *No description.* |

---

##### `fromSqsMessageAttributes` <a name="fromSqsMessageAttributes" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSqsFilterPattern.fromSqsMessageAttributes"></a>

```typescript
import { PipeSqsFilterPattern } from '@raphaelmanke/aws-cdk-pipes-rfc'

PipeSqsFilterPattern.fromSqsMessageAttributes(attributes: ISqsMessagePipeFilter)
```

###### `attributes`<sup>Required</sup> <a name="attributes" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSqsFilterPattern.fromSqsMessageAttributes.parameter.attributes"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsMessagePipeFilter">ISqsMessagePipeFilter</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSqsFilterPattern.property.filters">filters</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeFilterPattern">IPipeFilterPattern</a>[]</code> | *No description.* |

---

##### `filters`<sup>Required</sup> <a name="filters" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSqsFilterPattern.property.filters"></a>

```typescript
public readonly filters: IPipeFilterPattern[];
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeFilterPattern">IPipeFilterPattern</a>[]

---


### PipeTargetParameter <a name="PipeTargetParameter" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeTargetParameter"></a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeTargetParameter.Initializer"></a>

```typescript
import { PipeTargetParameter } from '@raphaelmanke/aws-cdk-pipes-rfc'

new PipeTargetParameter()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeTargetParameter.fromJsonPath">fromJsonPath</a></code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeTargetParameter.fromPipeVariable">fromPipeVariable</a></code> | *No description.* |

---

##### `fromJsonPath` <a name="fromJsonPath" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeTargetParameter.fromJsonPath"></a>

```typescript
import { PipeTargetParameter } from '@raphaelmanke/aws-cdk-pipes-rfc'

PipeTargetParameter.fromJsonPath(jsonPath: string)
```

###### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeTargetParameter.fromJsonPath.parameter.jsonPath"></a>

- *Type:* string

---

##### `fromPipeVariable` <a name="fromPipeVariable" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeTargetParameter.fromPipeVariable"></a>

```typescript
import { PipeTargetParameter } from '@raphaelmanke/aws-cdk-pipes-rfc'

PipeTargetParameter.fromPipeVariable(pipeVariable: PipeVariables)
```

###### `pipeVariable`<sup>Required</sup> <a name="pipeVariable" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeTargetParameter.fromPipeVariable.parameter.pipeVariable"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeVariables">PipeVariables</a>

---



### RabbitMqBrokerSource <a name="RabbitMqBrokerSource" id="@raphaelmanke/aws-cdk-pipes-rfc.RabbitMqBrokerSource"></a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.RabbitMqBrokerSource.Initializer"></a>

```typescript
import { RabbitMqBrokerSource } from '@raphaelmanke/aws-cdk-pipes-rfc'

new RabbitMqBrokerSource(broker: CfnBroker, props: IRabbitMqBrokerSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.RabbitMqBrokerSource.Initializer.parameter.broker">broker</a></code> | <code>aws-cdk-lib.aws_amazonmq.CfnBroker</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.RabbitMqBrokerSource.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IRabbitMqBrokerSourceProps">IRabbitMqBrokerSourceProps</a></code> | *No description.* |

---

##### `broker`<sup>Required</sup> <a name="broker" id="@raphaelmanke/aws-cdk-pipes-rfc.RabbitMqBrokerSource.Initializer.parameter.broker"></a>

- *Type:* aws-cdk-lib.aws_amazonmq.CfnBroker

---

##### `props`<sup>Required</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.RabbitMqBrokerSource.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IRabbitMqBrokerSourceProps">IRabbitMqBrokerSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.RabbitMqBrokerSource.grantRead">grantRead</a></code> | *No description.* |

---

##### `grantRead` <a name="grantRead" id="@raphaelmanke/aws-cdk-pipes-rfc.RabbitMqBrokerSource.grantRead"></a>

```typescript
public grantRead(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.RabbitMqBrokerSource.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.RabbitMqBrokerSource.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.RabbitMqBrokerSource.property.sourceParameters">sourceParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty \| aws-cdk-lib.IResolvable</code> | *No description.* |

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@raphaelmanke/aws-cdk-pipes-rfc.RabbitMqBrokerSource.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `sourceParameters`<sup>Optional</sup> <a name="sourceParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.RabbitMqBrokerSource.property.sourceParameters"></a>

```typescript
public readonly sourceParameters: PipeSourceParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty | aws-cdk-lib.IResolvable

---


### SelfManagedKafkakSource <a name="SelfManagedKafkakSource" id="@raphaelmanke/aws-cdk-pipes-rfc.SelfManagedKafkakSource"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSource">IPipeSource</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.SelfManagedKafkakSource.Initializer"></a>

```typescript
import { SelfManagedKafkakSource } from '@raphaelmanke/aws-cdk-pipes-rfc'

new SelfManagedKafkakSource(bootstrapUrl: string, props: ISelfManagedKafkaSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SelfManagedKafkakSource.Initializer.parameter.bootstrapUrl">bootstrapUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SelfManagedKafkakSource.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps">ISelfManagedKafkaSourceProps</a></code> | *No description.* |

---

##### `bootstrapUrl`<sup>Required</sup> <a name="bootstrapUrl" id="@raphaelmanke/aws-cdk-pipes-rfc.SelfManagedKafkakSource.Initializer.parameter.bootstrapUrl"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.SelfManagedKafkakSource.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps">ISelfManagedKafkaSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SelfManagedKafkakSource.grantRead">grantRead</a></code> | *No description.* |

---

##### `grantRead` <a name="grantRead" id="@raphaelmanke/aws-cdk-pipes-rfc.SelfManagedKafkakSource.grantRead"></a>

```typescript
public grantRead(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.SelfManagedKafkakSource.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SelfManagedKafkakSource.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SelfManagedKafkakSource.property.sourceParameters">sourceParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty \| aws-cdk-lib.IResolvable</code> | *No description.* |

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@raphaelmanke/aws-cdk-pipes-rfc.SelfManagedKafkakSource.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `sourceParameters`<sup>Optional</sup> <a name="sourceParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.SelfManagedKafkakSource.property.sourceParameters"></a>

```typescript
public readonly sourceParameters: PipeSourceParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty | aws-cdk-lib.IResolvable

---


### SnsTarget <a name="SnsTarget" id="@raphaelmanke/aws-cdk-pipes-rfc.SnsTarget"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget">IPipeTarget</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.SnsTarget.Initializer"></a>

```typescript
import { SnsTarget } from '@raphaelmanke/aws-cdk-pipes-rfc'

new SnsTarget(topic: ITopic, props?: ISnsTargetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SnsTarget.Initializer.parameter.topic">topic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SnsTarget.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISnsTargetProps">ISnsTargetProps</a></code> | *No description.* |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@raphaelmanke/aws-cdk-pipes-rfc.SnsTarget.Initializer.parameter.topic"></a>

- *Type:* aws-cdk-lib.aws_sns.ITopic

---

##### `props`<sup>Optional</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.SnsTarget.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISnsTargetProps">ISnsTargetProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SnsTarget.grantPush">grantPush</a></code> | *No description.* |

---

##### `grantPush` <a name="grantPush" id="@raphaelmanke/aws-cdk-pipes-rfc.SnsTarget.grantPush"></a>

```typescript
public grantPush(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.SnsTarget.grantPush.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SnsTarget.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SnsTarget.property.targetParameters">targetParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty</code> | *No description.* |

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@raphaelmanke/aws-cdk-pipes-rfc.SnsTarget.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `targetParameters`<sup>Required</sup> <a name="targetParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.SnsTarget.property.targetParameters"></a>

```typescript
public readonly targetParameters: PipeTargetParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty

---


### SqsSource <a name="SqsSource" id="@raphaelmanke/aws-cdk-pipes-rfc.SqsSource"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSource">IPipeSource</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.SqsSource.Initializer"></a>

```typescript
import { SqsSource } from '@raphaelmanke/aws-cdk-pipes-rfc'

new SqsSource(queue: IQueue, props?: ISqsSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SqsSource.Initializer.parameter.queue">queue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SqsSource.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsSourceProps">ISqsSourceProps</a></code> | *No description.* |

---

##### `queue`<sup>Required</sup> <a name="queue" id="@raphaelmanke/aws-cdk-pipes-rfc.SqsSource.Initializer.parameter.queue"></a>

- *Type:* aws-cdk-lib.aws_sqs.IQueue

---

##### `props`<sup>Optional</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.SqsSource.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsSourceProps">ISqsSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SqsSource.grantRead">grantRead</a></code> | *No description.* |

---

##### `grantRead` <a name="grantRead" id="@raphaelmanke/aws-cdk-pipes-rfc.SqsSource.grantRead"></a>

```typescript
public grantRead(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.SqsSource.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SqsSource.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SqsSource.property.sourceParameters">sourceParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty \| aws-cdk-lib.IResolvable</code> | *No description.* |

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@raphaelmanke/aws-cdk-pipes-rfc.SqsSource.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `sourceParameters`<sup>Optional</sup> <a name="sourceParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.SqsSource.property.sourceParameters"></a>

```typescript
public readonly sourceParameters: PipeSourceParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty | aws-cdk-lib.IResolvable

---


### SqsTarget <a name="SqsTarget" id="@raphaelmanke/aws-cdk-pipes-rfc.SqsTarget"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget">IPipeTarget</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.SqsTarget.Initializer"></a>

```typescript
import { SqsTarget } from '@raphaelmanke/aws-cdk-pipes-rfc'

new SqsTarget(queue: IQueue, props?: ISqsTargetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SqsTarget.Initializer.parameter.queue">queue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SqsTarget.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsTargetProps">ISqsTargetProps</a></code> | *No description.* |

---

##### `queue`<sup>Required</sup> <a name="queue" id="@raphaelmanke/aws-cdk-pipes-rfc.SqsTarget.Initializer.parameter.queue"></a>

- *Type:* aws-cdk-lib.aws_sqs.IQueue

---

##### `props`<sup>Optional</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.SqsTarget.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsTargetProps">ISqsTargetProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SqsTarget.grantPush">grantPush</a></code> | *No description.* |

---

##### `grantPush` <a name="grantPush" id="@raphaelmanke/aws-cdk-pipes-rfc.SqsTarget.grantPush"></a>

```typescript
public grantPush(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.SqsTarget.grantPush.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SqsTarget.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.SqsTarget.property.targetParameters">targetParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty</code> | *No description.* |

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@raphaelmanke/aws-cdk-pipes-rfc.SqsTarget.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `targetParameters`<sup>Required</sup> <a name="targetParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.SqsTarget.property.targetParameters"></a>

```typescript
public readonly targetParameters: PipeTargetParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty

---


### StepFunctionEnrichment <a name="StepFunctionEnrichment" id="@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionEnrichment"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeEnrichment">IPipeEnrichment</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionEnrichment.Initializer"></a>

```typescript
import { StepFunctionEnrichment } from '@raphaelmanke/aws-cdk-pipes-rfc'

new StepFunctionEnrichment(stepFunction: IStateMachine, props?: IStepFunctionEnrichmentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionEnrichment.Initializer.parameter.stepFunction">stepFunction</a></code> | <code>aws-cdk-lib.aws_stepfunctions.IStateMachine</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionEnrichment.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IStepFunctionEnrichmentProps">IStepFunctionEnrichmentProps</a></code> | *No description.* |

---

##### `stepFunction`<sup>Required</sup> <a name="stepFunction" id="@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionEnrichment.Initializer.parameter.stepFunction"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.IStateMachine

---

##### `props`<sup>Optional</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionEnrichment.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IStepFunctionEnrichmentProps">IStepFunctionEnrichmentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionEnrichment.grantInvoke">grantInvoke</a></code> | *No description.* |

---

##### `grantInvoke` <a name="grantInvoke" id="@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionEnrichment.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionEnrichment.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionEnrichment.property.enrichmentArn">enrichmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionEnrichment.property.enrichmentParameters">enrichmentParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty</code> | *No description.* |

---

##### `enrichmentArn`<sup>Required</sup> <a name="enrichmentArn" id="@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionEnrichment.property.enrichmentArn"></a>

```typescript
public readonly enrichmentArn: string;
```

- *Type:* string

---

##### `enrichmentParameters`<sup>Required</sup> <a name="enrichmentParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionEnrichment.property.enrichmentParameters"></a>

```typescript
public readonly enrichmentParameters: PipeEnrichmentParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty

---


### StepFunctionTarget <a name="StepFunctionTarget" id="@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionTarget"></a>

- *Implements:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget">IPipeTarget</a>

#### Initializers <a name="Initializers" id="@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionTarget.Initializer"></a>

```typescript
import { StepFunctionTarget } from '@raphaelmanke/aws-cdk-pipes-rfc'

new StepFunctionTarget(stateMachine: IStateMachine, props?: IStepFunctionTargetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionTarget.Initializer.parameter.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.IStateMachine</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionTarget.Initializer.parameter.props">props</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IStepFunctionTargetProps">IStepFunctionTargetProps</a></code> | *No description.* |

---

##### `stateMachine`<sup>Required</sup> <a name="stateMachine" id="@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionTarget.Initializer.parameter.stateMachine"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.IStateMachine

---

##### `props`<sup>Optional</sup> <a name="props" id="@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionTarget.Initializer.parameter.props"></a>

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IStepFunctionTargetProps">IStepFunctionTargetProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionTarget.grantPush">grantPush</a></code> | *No description.* |

---

##### `grantPush` <a name="grantPush" id="@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionTarget.grantPush"></a>

```typescript
public grantPush(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionTarget.grantPush.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionTarget.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionTarget.property.targetParameters">targetParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty</code> | *No description.* |

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionTarget.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `targetParameters`<sup>Required</sup> <a name="targetParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionTarget.property.targetParameters"></a>

```typescript
public readonly targetParameters: PipeTargetParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IAmazonMqBrokerSourceProps <a name="IAmazonMqBrokerSourceProps" id="@raphaelmanke/aws-cdk-pipes-rfc.IAmazonMqBrokerSourceProps"></a>

- *Extends:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceCommonParameters">IPipeSourceCommonParameters</a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IAmazonMqBrokerSourceProps">IAmazonMqBrokerSourceProps</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IRabbitMqBrokerSourceProps">IRabbitMqBrokerSourceProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IAmazonMqBrokerSourceProps.property.batchSize">batchSize</a></code> | <code>number</code> | The maximum number of records to include in each batch. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IAmazonMqBrokerSourceProps.property.maximumBatchingWindowInSeconds">maximumBatchingWindowInSeconds</a></code> | <code>number</code> | The maximum length of a time to wait for events. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IAmazonMqBrokerSourceProps.property.credentials">credentials</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMQBrokerAccessCredentials">IMQBrokerAccessCredentials</a></code> | `CfnPipe.PipeSourceActiveMQBrokerParametersProperty.Credentials`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IAmazonMqBrokerSourceProps.property.queueName">queueName</a></code> | <code>string</code> | `CfnPipe.PipeSourceActiveMQBrokerParametersProperty.QueueName`. |

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@raphaelmanke/aws-cdk-pipes-rfc.IAmazonMqBrokerSourceProps.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

The maximum number of records to include in each batch.

---

##### `maximumBatchingWindowInSeconds`<sup>Optional</sup> <a name="maximumBatchingWindowInSeconds" id="@raphaelmanke/aws-cdk-pipes-rfc.IAmazonMqBrokerSourceProps.property.maximumBatchingWindowInSeconds"></a>

```typescript
public readonly maximumBatchingWindowInSeconds: number;
```

- *Type:* number

The maximum length of a time to wait for events.

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@raphaelmanke/aws-cdk-pipes-rfc.IAmazonMqBrokerSourceProps.property.credentials"></a>

```typescript
public readonly credentials: IMQBrokerAccessCredentials;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMQBrokerAccessCredentials">IMQBrokerAccessCredentials</a>

`CfnPipe.PipeSourceActiveMQBrokerParametersProperty.Credentials`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-credentials](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-credentials)

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@raphaelmanke/aws-cdk-pipes-rfc.IAmazonMqBrokerSourceProps.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

`CfnPipe.PipeSourceActiveMQBrokerParametersProperty.QueueName`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-queuename](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-queuename)

---

### IApiDestinationEnrichmentParameters <a name="IApiDestinationEnrichmentParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationEnrichmentParameters"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationEnrichmentParameters">IApiDestinationEnrichmentParameters</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationEnrichmentParameters.property.headerParameters">headerParameters</a></code> | <code>{[ key: string ]: string} \| aws-cdk-lib.IResolvable</code> | The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationEnrichmentParameters.property.pathParameterValues">pathParameterValues</a></code> | <code>string[]</code> | The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*"). |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationEnrichmentParameters.property.queryStringParameters">queryStringParameters</a></code> | <code>aws-cdk-lib.IResolvable \| {[ key: string ]: string}</code> | The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationEnrichmentParameters.property.inputTransformation">inputTransformation</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a></code> | *No description.* |

---

##### `headerParameters`<sup>Optional</sup> <a name="headerParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationEnrichmentParameters.property.headerParameters"></a>

```typescript
public readonly headerParameters: {[ key: string ]: string} | IResolvable;
```

- *Type:* {[ key: string ]: string} | aws-cdk-lib.IResolvable

The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.

The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-headerparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-headerparameters)

---

##### `pathParameterValues`<sup>Optional</sup> <a name="pathParameterValues" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationEnrichmentParameters.property.pathParameterValues"></a>

```typescript
public readonly pathParameterValues: string[];
```

- *Type:* string[]

The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*").

The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*").

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-pathparametervalues](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-pathparametervalues)

---

##### `queryStringParameters`<sup>Optional</sup> <a name="queryStringParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationEnrichmentParameters.property.queryStringParameters"></a>

```typescript
public readonly queryStringParameters: IResolvable | {[ key: string ]: string};
```

- *Type:* aws-cdk-lib.IResolvable | {[ key: string ]: string}

The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.

The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-querystringparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-querystringparameters)

---

##### `inputTransformation`<sup>Optional</sup> <a name="inputTransformation" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationEnrichmentParameters.property.inputTransformation"></a>

```typescript
public readonly inputTransformation: IInputTransformation;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a>

---

### IApiDestinationTargetProps <a name="IApiDestinationTargetProps" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationTargetProps"></a>

- *Extends:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTargetCommonParameters">IPipeTargetCommonParameters</a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationTargetProps">IApiDestinationTargetProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationTargetProps.property.inputTemplate">inputTemplate</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a></code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationTargetProps.property.headerParameters">headerParameters</a></code> | <code>aws-cdk-lib.IResolvable \| {[ key: string ]: string}</code> | The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationTargetProps.property.pathParameterValues">pathParameterValues</a></code> | <code>string[]</code> | The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*"). |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationTargetProps.property.queryStringParameters">queryStringParameters</a></code> | <code>aws-cdk-lib.IResolvable \| {[ key: string ]: string}</code> | The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination. |

---

##### `inputTemplate`<sup>Optional</sup> <a name="inputTemplate" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationTargetProps.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: IInputTransformation;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a>

---

##### `headerParameters`<sup>Optional</sup> <a name="headerParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationTargetProps.property.headerParameters"></a>

```typescript
public readonly headerParameters: IResolvable | {[ key: string ]: string};
```

- *Type:* aws-cdk-lib.IResolvable | {[ key: string ]: string}

The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html#cfn-pipes-pipe-pipetargethttpparameters-headerparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html#cfn-pipes-pipe-pipetargethttpparameters-headerparameters)

---

##### `pathParameterValues`<sup>Optional</sup> <a name="pathParameterValues" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationTargetProps.property.pathParameterValues"></a>

```typescript
public readonly pathParameterValues: string[];
```

- *Type:* string[]

The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*").

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html#cfn-pipes-pipe-pipetargethttpparameters-pathparametervalues](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html#cfn-pipes-pipe-pipetargethttpparameters-pathparametervalues)

---

##### `queryStringParameters`<sup>Optional</sup> <a name="queryStringParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationTargetProps.property.queryStringParameters"></a>

```typescript
public readonly queryStringParameters: IResolvable | {[ key: string ]: string};
```

- *Type:* aws-cdk-lib.IResolvable | {[ key: string ]: string}

The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html#cfn-pipes-pipe-pipetargethttpparameters-querystringparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html#cfn-pipes-pipe-pipetargethttpparameters-querystringparameters)

---

### IApiGatewayEnrichmentProps <a name="IApiGatewayEnrichmentProps" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayEnrichmentProps"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayEnrichmentProps">IApiGatewayEnrichmentProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayEnrichmentProps.property.headerParameters">headerParameters</a></code> | <code>aws-cdk-lib.IResolvable \| {[ key: string ]: string}</code> | The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayEnrichmentProps.property.pathParameterValues">pathParameterValues</a></code> | <code>string[]</code> | The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*"). |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayEnrichmentProps.property.queryStringParameters">queryStringParameters</a></code> | <code>aws-cdk-lib.IResolvable \| {[ key: string ]: string}</code> | The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayEnrichmentProps.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayEnrichmentProps.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayEnrichmentProps.property.inputTransformation">inputTransformation</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a></code> | *No description.* |

---

##### `headerParameters`<sup>Optional</sup> <a name="headerParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayEnrichmentProps.property.headerParameters"></a>

```typescript
public readonly headerParameters: IResolvable | {[ key: string ]: string};
```

- *Type:* aws-cdk-lib.IResolvable | {[ key: string ]: string}

The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-headerparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-headerparameters)

---

##### `pathParameterValues`<sup>Optional</sup> <a name="pathParameterValues" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayEnrichmentProps.property.pathParameterValues"></a>

```typescript
public readonly pathParameterValues: string[];
```

- *Type:* string[]

The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*").

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-pathparametervalues](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-pathparametervalues)

---

##### `queryStringParameters`<sup>Optional</sup> <a name="queryStringParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayEnrichmentProps.property.queryStringParameters"></a>

```typescript
public readonly queryStringParameters: IResolvable | {[ key: string ]: string};
```

- *Type:* aws-cdk-lib.IResolvable | {[ key: string ]: string}

The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-querystringparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-querystringparameters)

---

##### `method`<sup>Required</sup> <a name="method" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayEnrichmentProps.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayEnrichmentProps.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `inputTransformation`<sup>Optional</sup> <a name="inputTransformation" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayEnrichmentProps.property.inputTransformation"></a>

```typescript
public readonly inputTransformation: IInputTransformation;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a>

---

### IApiGatewayTargetProps <a name="IApiGatewayTargetProps" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayTargetProps"></a>

- *Extends:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTargetCommonParameters">IPipeTargetCommonParameters</a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayTargetProps">IApiGatewayTargetProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayTargetProps.property.inputTemplate">inputTemplate</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a></code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayTargetProps.property.headerParameters">headerParameters</a></code> | <code>aws-cdk-lib.IResolvable \| {[ key: string ]: string}</code> | The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayTargetProps.property.pathParameterValues">pathParameterValues</a></code> | <code>string[]</code> | The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*"). |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayTargetProps.property.queryStringParameters">queryStringParameters</a></code> | <code>aws-cdk-lib.IResolvable \| {[ key: string ]: string}</code> | The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayTargetProps.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayTargetProps.property.resource">resource</a></code> | <code>string</code> | *No description.* |

---

##### `inputTemplate`<sup>Optional</sup> <a name="inputTemplate" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayTargetProps.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: IInputTransformation;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a>

---

##### `headerParameters`<sup>Optional</sup> <a name="headerParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayTargetProps.property.headerParameters"></a>

```typescript
public readonly headerParameters: IResolvable | {[ key: string ]: string};
```

- *Type:* aws-cdk-lib.IResolvable | {[ key: string ]: string}

The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html#cfn-pipes-pipe-pipetargethttpparameters-headerparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html#cfn-pipes-pipe-pipetargethttpparameters-headerparameters)

---

##### `pathParameterValues`<sup>Optional</sup> <a name="pathParameterValues" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayTargetProps.property.pathParameterValues"></a>

```typescript
public readonly pathParameterValues: string[];
```

- *Type:* string[]

The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*").

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html#cfn-pipes-pipe-pipetargethttpparameters-pathparametervalues](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html#cfn-pipes-pipe-pipetargethttpparameters-pathparametervalues)

---

##### `queryStringParameters`<sup>Optional</sup> <a name="queryStringParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayTargetProps.property.queryStringParameters"></a>

```typescript
public readonly queryStringParameters: IResolvable | {[ key: string ]: string};
```

- *Type:* aws-cdk-lib.IResolvable | {[ key: string ]: string}

The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html#cfn-pipes-pipe-pipetargethttpparameters-querystringparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html#cfn-pipes-pipe-pipetargethttpparameters-querystringparameters)

---

##### `method`<sup>Required</sup> <a name="method" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayTargetProps.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayTargetProps.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

### IDynamoDBStreamSourceProps <a name="IDynamoDBStreamSourceProps" id="@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps"></a>

- *Extends:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceCommonParameters">IPipeSourceCommonParameters</a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps">IDynamoDBStreamSourceProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps.property.batchSize">batchSize</a></code> | <code>number</code> | The maximum number of records to include in each batch. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps.property.maximumBatchingWindowInSeconds">maximumBatchingWindowInSeconds</a></code> | <code>number</code> | The maximum length of a time to wait for events. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps.property.startingPosition">startingPosition</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceStartingPosition">PipeSourceStartingPosition</a></code> | `CfnPipe.PipeSourceDynamoDBStreamParametersProperty.StartingPosition`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceDeadLetterConfig">PipeSourceDeadLetterConfig</a></code> | `CfnPipe.PipeSourceDynamoDBStreamParametersProperty.DeadLetterConfig`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps.property.maximumRecordAgeInSeconds">maximumRecordAgeInSeconds</a></code> | <code>number</code> | `CfnPipe.PipeSourceDynamoDBStreamParametersProperty.MaximumRecordAgeInSeconds`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>number</code> | `CfnPipe.PipeSourceDynamoDBStreamParametersProperty.MaximumRetryAttempts`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps.property.onPartialBatchItemFailure">onPartialBatchItemFailure</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceOnPartialBatchItemFailure">PipeSourceOnPartialBatchItemFailure</a></code> | `CfnPipe.PipeSourceDynamoDBStreamParametersProperty.OnPartialBatchItemFailure`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps.property.parallelizationFactor">parallelizationFactor</a></code> | <code>number</code> | `CfnPipe.PipeSourceDynamoDBStreamParametersProperty.ParallelizationFactor`. |

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

The maximum number of records to include in each batch.

---

##### `maximumBatchingWindowInSeconds`<sup>Optional</sup> <a name="maximumBatchingWindowInSeconds" id="@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps.property.maximumBatchingWindowInSeconds"></a>

```typescript
public readonly maximumBatchingWindowInSeconds: number;
```

- *Type:* number

The maximum length of a time to wait for events.

---

##### `startingPosition`<sup>Required</sup> <a name="startingPosition" id="@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps.property.startingPosition"></a>

```typescript
public readonly startingPosition: PipeSourceStartingPosition;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceStartingPosition">PipeSourceStartingPosition</a>

`CfnPipe.PipeSourceDynamoDBStreamParametersProperty.StartingPosition`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-startingposition](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-startingposition)

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="deadLetterConfig" id="@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps.property.deadLetterConfig"></a>

```typescript
public readonly deadLetterConfig: PipeSourceDeadLetterConfig;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceDeadLetterConfig">PipeSourceDeadLetterConfig</a>

`CfnPipe.PipeSourceDynamoDBStreamParametersProperty.DeadLetterConfig`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-deadletterconfig](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-deadletterconfig)

---

##### `maximumRecordAgeInSeconds`<sup>Optional</sup> <a name="maximumRecordAgeInSeconds" id="@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps.property.maximumRecordAgeInSeconds"></a>

```typescript
public readonly maximumRecordAgeInSeconds: number;
```

- *Type:* number

`CfnPipe.PipeSourceDynamoDBStreamParametersProperty.MaximumRecordAgeInSeconds`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-maximumrecordageinseconds](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-maximumrecordageinseconds)

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="maximumRetryAttempts" id="@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps.property.maximumRetryAttempts"></a>

```typescript
public readonly maximumRetryAttempts: number;
```

- *Type:* number

`CfnPipe.PipeSourceDynamoDBStreamParametersProperty.MaximumRetryAttempts`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-maximumretryattempts](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-maximumretryattempts)

---

##### `onPartialBatchItemFailure`<sup>Optional</sup> <a name="onPartialBatchItemFailure" id="@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps.property.onPartialBatchItemFailure"></a>

```typescript
public readonly onPartialBatchItemFailure: PipeSourceOnPartialBatchItemFailure;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceOnPartialBatchItemFailure">PipeSourceOnPartialBatchItemFailure</a>

`CfnPipe.PipeSourceDynamoDBStreamParametersProperty.OnPartialBatchItemFailure`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-onpartialbatchitemfailure](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-onpartialbatchitemfailure)

---

##### `parallelizationFactor`<sup>Optional</sup> <a name="parallelizationFactor" id="@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps.property.parallelizationFactor"></a>

```typescript
public readonly parallelizationFactor: number;
```

- *Type:* number

`CfnPipe.PipeSourceDynamoDBStreamParametersProperty.ParallelizationFactor`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-parallelizationfactor](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-parallelizationfactor)

---

### IEventBusTargetProps <a name="IEventBusTargetProps" id="@raphaelmanke/aws-cdk-pipes-rfc.IEventBusTargetProps"></a>

- *Extends:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTargetCommonParameters">IPipeTargetCommonParameters</a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IEventBusTargetProps">IEventBusTargetProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IEventBusTargetProps.property.inputTemplate">inputTemplate</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a></code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IEventBusTargetProps.property.detailType">detailType</a></code> | <code>string</code> | A free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IEventBusTargetProps.property.endpointId">endpointId</a></code> | <code>string</code> | The URL subdomain of the endpoint. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IEventBusTargetProps.property.resources">resources</a></code> | <code>string[]</code> | AWS resources, identified by Amazon Resource Name (ARN), which the event primarily concerns. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IEventBusTargetProps.property.source">source</a></code> | <code>string</code> | The source of the event. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IEventBusTargetProps.property.time">time</a></code> | <code>string</code> | The time stamp of the event, per [RFC3339](https://docs.aws.amazon.com/https://www.rfc-editor.org/rfc/rfc3339.txt) . If no time stamp is provided, the time stamp of the [PutEvents](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html) call is used. |

---

##### `inputTemplate`<sup>Optional</sup> <a name="inputTemplate" id="@raphaelmanke/aws-cdk-pipes-rfc.IEventBusTargetProps.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: IInputTransformation;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a>

---

##### `detailType`<sup>Optional</sup> <a name="detailType" id="@raphaelmanke/aws-cdk-pipes-rfc.IEventBusTargetProps.property.detailType"></a>

```typescript
public readonly detailType: string;
```

- *Type:* string

A free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-detailtype](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-detailtype)

---

##### `endpointId`<sup>Optional</sup> <a name="endpointId" id="@raphaelmanke/aws-cdk-pipes-rfc.IEventBusTargetProps.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

The URL subdomain of the endpoint.

For example, if the URL for Endpoint is https://abcde.veo.endpoints.event.amazonaws.com, then the EndpointId is `abcde.veo` .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-endpointid](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-endpointid)

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@raphaelmanke/aws-cdk-pipes-rfc.IEventBusTargetProps.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

AWS resources, identified by Amazon Resource Name (ARN), which the event primarily concerns.

Any number, including zero, may be present.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-resources](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-resources)

---

##### `source`<sup>Optional</sup> <a name="source" id="@raphaelmanke/aws-cdk-pipes-rfc.IEventBusTargetProps.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The source of the event.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-source](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-source)

---

##### `time`<sup>Optional</sup> <a name="time" id="@raphaelmanke/aws-cdk-pipes-rfc.IEventBusTargetProps.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

The time stamp of the event, per [RFC3339](https://docs.aws.amazon.com/https://www.rfc-editor.org/rfc/rfc3339.txt) . If no time stamp is provided, the time stamp of the [PutEvents](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html) call is used.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-time](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-time)

---

### IInputTransformation <a name="IInputTransformation" id="@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeInputTransformation">PipeInputTransformation</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation.property.inputTemplate">inputTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `inputTemplate`<sup>Required</sup> <a name="inputTemplate" id="@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: string;
```

- *Type:* string

---

### IKinesisStreamSourceProps <a name="IKinesisStreamSourceProps" id="@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps"></a>

- *Extends:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceCommonParameters">IPipeSourceCommonParameters</a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps">IKinesisStreamSourceProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps.property.batchSize">batchSize</a></code> | <code>number</code> | The maximum number of records to include in each batch. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps.property.maximumBatchingWindowInSeconds">maximumBatchingWindowInSeconds</a></code> | <code>number</code> | The maximum length of a time to wait for events. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps.property.startingPosition">startingPosition</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceStartingPosition">PipeSourceStartingPosition</a></code> | `CfnPipe.PipeSourceKinesisStreamParametersProperty.StartingPosition`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceDeadLetterConfig">PipeSourceDeadLetterConfig</a></code> | `CfnPipe.PipeSourceKinesisStreamParametersProperty.DeadLetterConfig`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps.property.maximumRecordAgeInSeconds">maximumRecordAgeInSeconds</a></code> | <code>number</code> | `CfnPipe.PipeSourceKinesisStreamParametersProperty.MaximumRecordAgeInSeconds`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>number</code> | `CfnPipe.PipeSourceKinesisStreamParametersProperty.MaximumRetryAttempts`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps.property.onPartialBatchItemFailure">onPartialBatchItemFailure</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceOnPartialBatchItemFailure">PipeSourceOnPartialBatchItemFailure</a></code> | `CfnPipe.PipeSourceKinesisStreamParametersProperty.OnPartialBatchItemFailure`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps.property.parallelizationFactor">parallelizationFactor</a></code> | <code>number</code> | `CfnPipe.PipeSourceKinesisStreamParametersProperty.ParallelizationFactor`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps.property.startingPositionTimestamp">startingPositionTimestamp</a></code> | <code>string</code> | `CfnPipe.PipeSourceKinesisStreamParametersProperty.StartingPositionTimestamp`. |

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

The maximum number of records to include in each batch.

---

##### `maximumBatchingWindowInSeconds`<sup>Optional</sup> <a name="maximumBatchingWindowInSeconds" id="@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps.property.maximumBatchingWindowInSeconds"></a>

```typescript
public readonly maximumBatchingWindowInSeconds: number;
```

- *Type:* number

The maximum length of a time to wait for events.

---

##### `startingPosition`<sup>Required</sup> <a name="startingPosition" id="@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps.property.startingPosition"></a>

```typescript
public readonly startingPosition: PipeSourceStartingPosition;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceStartingPosition">PipeSourceStartingPosition</a>

`CfnPipe.PipeSourceKinesisStreamParametersProperty.StartingPosition`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-startingposition](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-startingposition)

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="deadLetterConfig" id="@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps.property.deadLetterConfig"></a>

```typescript
public readonly deadLetterConfig: PipeSourceDeadLetterConfig;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceDeadLetterConfig">PipeSourceDeadLetterConfig</a>

`CfnPipe.PipeSourceKinesisStreamParametersProperty.DeadLetterConfig`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-deadletterconfig](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-deadletterconfig)

---

##### `maximumRecordAgeInSeconds`<sup>Optional</sup> <a name="maximumRecordAgeInSeconds" id="@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps.property.maximumRecordAgeInSeconds"></a>

```typescript
public readonly maximumRecordAgeInSeconds: number;
```

- *Type:* number

`CfnPipe.PipeSourceKinesisStreamParametersProperty.MaximumRecordAgeInSeconds`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-maximumrecordageinseconds](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-maximumrecordageinseconds)

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="maximumRetryAttempts" id="@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps.property.maximumRetryAttempts"></a>

```typescript
public readonly maximumRetryAttempts: number;
```

- *Type:* number

`CfnPipe.PipeSourceKinesisStreamParametersProperty.MaximumRetryAttempts`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-maximumretryattempts](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-maximumretryattempts)

---

##### `onPartialBatchItemFailure`<sup>Optional</sup> <a name="onPartialBatchItemFailure" id="@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps.property.onPartialBatchItemFailure"></a>

```typescript
public readonly onPartialBatchItemFailure: PipeSourceOnPartialBatchItemFailure;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceOnPartialBatchItemFailure">PipeSourceOnPartialBatchItemFailure</a>

`CfnPipe.PipeSourceKinesisStreamParametersProperty.OnPartialBatchItemFailure`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-onpartialbatchitemfailure](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-onpartialbatchitemfailure)

---

##### `parallelizationFactor`<sup>Optional</sup> <a name="parallelizationFactor" id="@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps.property.parallelizationFactor"></a>

```typescript
public readonly parallelizationFactor: number;
```

- *Type:* number

`CfnPipe.PipeSourceKinesisStreamParametersProperty.ParallelizationFactor`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-parallelizationfactor](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-parallelizationfactor)

---

##### `startingPositionTimestamp`<sup>Optional</sup> <a name="startingPositionTimestamp" id="@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps.property.startingPositionTimestamp"></a>

```typescript
public readonly startingPositionTimestamp: string;
```

- *Type:* string

`CfnPipe.PipeSourceKinesisStreamParametersProperty.StartingPositionTimestamp`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-startingpositiontimestamp](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-startingpositiontimestamp)

---

### IKinesisStreamTargetProps <a name="IKinesisStreamTargetProps" id="@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamTargetProps"></a>

- *Extends:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTargetCommonParameters">IPipeTargetCommonParameters</a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamTargetProps">IKinesisStreamTargetProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamTargetProps.property.inputTemplate">inputTemplate</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a></code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamTargetProps.property.partitionKey">partitionKey</a></code> | <code>string</code> | Determines which shard in the stream the data record is assigned to. |

---

##### `inputTemplate`<sup>Optional</sup> <a name="inputTemplate" id="@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamTargetProps.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: IInputTransformation;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a>

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamTargetProps.property.partitionKey"></a>

```typescript
public readonly partitionKey: string;
```

- *Type:* string

Determines which shard in the stream the data record is assigned to.

Partition keys are Unicode strings with a maximum length limit of 256 characters for each key. Amazon Kinesis Data Streams uses the partition key as input to a hash function that maps the partition key and associated data to a specific shard. Specifically, an MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetkinesisstreamparameters.html#cfn-pipes-pipe-pipetargetkinesisstreamparameters-partitionkey](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetkinesisstreamparameters.html#cfn-pipes-pipe-pipetargetkinesisstreamparameters-partitionkey)

---

### ILambdaEnrichmentProps <a name="ILambdaEnrichmentProps" id="@raphaelmanke/aws-cdk-pipes-rfc.ILambdaEnrichmentProps"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ILambdaEnrichmentProps">ILambdaEnrichmentProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ILambdaEnrichmentProps.property.inputTransformation">inputTransformation</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a></code> | *No description.* |

---

##### `inputTransformation`<sup>Optional</sup> <a name="inputTransformation" id="@raphaelmanke/aws-cdk-pipes-rfc.ILambdaEnrichmentProps.property.inputTransformation"></a>

```typescript
public readonly inputTransformation: IInputTransformation;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a>

---

### ILambdaTargetProps <a name="ILambdaTargetProps" id="@raphaelmanke/aws-cdk-pipes-rfc.ILambdaTargetProps"></a>

- *Extends:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTargetCommonParameters">IPipeTargetCommonParameters</a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ILambdaTargetProps">ILambdaTargetProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ILambdaTargetProps.property.inputTemplate">inputTemplate</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a></code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ILambdaTargetProps.property.invocationType">invocationType</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInvocationType">IInvocationType</a></code> | *No description.* |

---

##### `inputTemplate`<sup>Optional</sup> <a name="inputTemplate" id="@raphaelmanke/aws-cdk-pipes-rfc.ILambdaTargetProps.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: IInputTransformation;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a>

---

##### `invocationType`<sup>Optional</sup> <a name="invocationType" id="@raphaelmanke/aws-cdk-pipes-rfc.ILambdaTargetProps.property.invocationType"></a>

```typescript
public readonly invocationType: IInvocationType;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInvocationType">IInvocationType</a>

---

### ILogsTargetProps <a name="ILogsTargetProps" id="@raphaelmanke/aws-cdk-pipes-rfc.ILogsTargetProps"></a>

- *Extends:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTargetCommonParameters">IPipeTargetCommonParameters</a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ILogsTargetProps">ILogsTargetProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ILogsTargetProps.property.inputTemplate">inputTemplate</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a></code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ILogsTargetProps.property.logStreamName">logStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ILogsTargetProps.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |

---

##### `inputTemplate`<sup>Optional</sup> <a name="inputTemplate" id="@raphaelmanke/aws-cdk-pipes-rfc.ILogsTargetProps.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: IInputTransformation;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a>

---

##### `logStreamName`<sup>Optional</sup> <a name="logStreamName" id="@raphaelmanke/aws-cdk-pipes-rfc.ILogsTargetProps.property.logStreamName"></a>

```typescript
public readonly logStreamName: string;
```

- *Type:* string

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@raphaelmanke/aws-cdk-pipes-rfc.ILogsTargetProps.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

### IMQBrokerAccessCredentials <a name="IMQBrokerAccessCredentials" id="@raphaelmanke/aws-cdk-pipes-rfc.IMQBrokerAccessCredentials"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMQBrokerAccessCredentials">IMQBrokerAccessCredentials</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMQBrokerAccessCredentials.property.basicAuth">basicAuth</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |

---

##### `basicAuth`<sup>Required</sup> <a name="basicAuth" id="@raphaelmanke/aws-cdk-pipes-rfc.IMQBrokerAccessCredentials.property.basicAuth"></a>

```typescript
public readonly basicAuth: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

### IMskSourceCredentials <a name="IMskSourceCredentials" id="@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceCredentials"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceCredentials">IMskSourceCredentials</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceCredentials.property.clientCertificateTlsAuth">clientCertificateTlsAuth</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceCredentials.property.saslScram512Auth">saslScram512Auth</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |

---

##### `clientCertificateTlsAuth`<sup>Optional</sup> <a name="clientCertificateTlsAuth" id="@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceCredentials.property.clientCertificateTlsAuth"></a>

```typescript
public readonly clientCertificateTlsAuth: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

##### `saslScram512Auth`<sup>Optional</sup> <a name="saslScram512Auth" id="@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceCredentials.property.saslScram512Auth"></a>

```typescript
public readonly saslScram512Auth: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

### IMskSourceProps <a name="IMskSourceProps" id="@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceProps"></a>

- *Extends:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceCommonParameters">IPipeSourceCommonParameters</a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceProps">IMskSourceProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceProps.property.batchSize">batchSize</a></code> | <code>number</code> | The maximum number of records to include in each batch. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceProps.property.maximumBatchingWindowInSeconds">maximumBatchingWindowInSeconds</a></code> | <code>number</code> | The maximum length of a time to wait for events. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceProps.property.topicName">topicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceProps.property.consumerGroupId">consumerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceProps.property.credentials">credentials</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceCredentials">IMskSourceCredentials</a></code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceProps.property.startingPosition">startingPosition</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceStartingPosition">PipeSourceStartingPosition</a></code> | *No description.* |

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceProps.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

The maximum number of records to include in each batch.

---

##### `maximumBatchingWindowInSeconds`<sup>Optional</sup> <a name="maximumBatchingWindowInSeconds" id="@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceProps.property.maximumBatchingWindowInSeconds"></a>

```typescript
public readonly maximumBatchingWindowInSeconds: number;
```

- *Type:* number

The maximum length of a time to wait for events.

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceProps.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

---

##### `consumerGroupId`<sup>Optional</sup> <a name="consumerGroupId" id="@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceProps.property.consumerGroupId"></a>

```typescript
public readonly consumerGroupId: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceProps.property.credentials"></a>

```typescript
public readonly credentials: IMskSourceCredentials;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceCredentials">IMskSourceCredentials</a>

---

##### `startingPosition`<sup>Optional</sup> <a name="startingPosition" id="@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceProps.property.startingPosition"></a>

```typescript
public readonly startingPosition: PipeSourceStartingPosition;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceStartingPosition">PipeSourceStartingPosition</a>

---

### IPipe <a name="IPipe" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipe"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.Pipe">Pipe</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipe">IPipe</a>

Interface all Pipe constructs must implement.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipe.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipe.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipe.property.pipeArn">pipeArn</a></code> | <code>string</code> | The ARN of the pipe. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipe.property.pipeName">pipeName</a></code> | <code>string</code> | The name of the pipe. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipe.property.pipeRole">pipeRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used by the pipe. |

---

##### `node`<sup>Required</sup> <a name="node" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipe.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipe.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipe.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `pipeArn`<sup>Required</sup> <a name="pipeArn" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipe.property.pipeArn"></a>

```typescript
public readonly pipeArn: string;
```

- *Type:* string

The ARN of the pipe.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#Arn-fn::getatt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#Arn-fn::getatt)

---

##### `pipeName`<sup>Required</sup> <a name="pipeName" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipe.property.pipeName"></a>

```typescript
public readonly pipeName: string;
```

- *Type:* string

The name of the pipe.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-name](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-name)

---

##### `pipeRole`<sup>Required</sup> <a name="pipeRole" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipe.property.pipeRole"></a>

```typescript
public readonly pipeRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role used by the pipe.

---

### IPipeEnrichment <a name="IPipeEnrichment" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeEnrichment"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationEnrichment">ApiDestinationEnrichment</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayEnrichment">ApiGatewayEnrichment</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.LambdaEnrichment">LambdaEnrichment</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeEnrichment">PipeEnrichment</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionEnrichment">StepFunctionEnrichment</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeEnrichment">IPipeEnrichment</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeEnrichment.grantInvoke">grantInvoke</a></code> | *No description.* |

---

##### `grantInvoke` <a name="grantInvoke" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeEnrichment.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeEnrichment.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeEnrichment.property.enrichmentArn">enrichmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeEnrichment.property.enrichmentParameters">enrichmentParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty</code> | *No description.* |

---

##### `enrichmentArn`<sup>Required</sup> <a name="enrichmentArn" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeEnrichment.property.enrichmentArn"></a>

```typescript
public readonly enrichmentArn: string;
```

- *Type:* string

---

##### `enrichmentParameters`<sup>Required</sup> <a name="enrichmentParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeEnrichment.property.enrichmentParameters"></a>

```typescript
public readonly enrichmentParameters: PipeEnrichmentParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty

---

### IPipeFilterPattern <a name="IPipeFilterPattern" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeFilterPattern"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeFilterPattern">IPipeFilterPattern</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeFilterPattern.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeFilterPattern.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

### IPipeProps <a name="IPipeProps" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps">IPipeProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps.property.source">source</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSource">IPipeSource</a></code> | The source of the pipe. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps.property.target">target</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget">IPipeTarget</a></code> | The target of the pipe. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps.property.description">description</a></code> | <code>string</code> | A description of the pipe displayed in the AWS console. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps.property.desiredState">desiredState</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.DesiredState">DesiredState</a></code> | The desired state of the pipe. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps.property.enrichment">enrichment</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeEnrichment">IPipeEnrichment</a></code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps.property.filter">filter</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceFilter">PipeSourceFilter</a></code> | The filter pattern for the pipe source. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps.property.name">name</a></code> | <code>string</code> | Name of the pipe in the AWS console. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used by the pipe which has permissions to read from the source and write to the target. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | `AWS::Pipes::Pipe.Tags`. |

---

##### `source`<sup>Required</sup> <a name="source" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps.property.source"></a>

```typescript
public readonly source: IPipeSource;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSource">IPipeSource</a>

The source of the pipe.

---

##### `target`<sup>Required</sup> <a name="target" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps.property.target"></a>

```typescript
public readonly target: IPipeTarget;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget">IPipeTarget</a>

The target of the pipe.

---

##### `description`<sup>Optional</sup> <a name="description" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the pipe displayed in the AWS console.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-description](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-description)

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps.property.desiredState"></a>

```typescript
public readonly desiredState: DesiredState;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.DesiredState">DesiredState</a>

The desired state of the pipe.

If the state is set to STOPPED, the pipe will not process events.

> [https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_Pipe.html#eventbridge-Type-Pipe-DesiredState](https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_Pipe.html#eventbridge-Type-Pipe-DesiredState)

---

##### `enrichment`<sup>Optional</sup> <a name="enrichment" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps.property.enrichment"></a>

```typescript
public readonly enrichment: IPipeEnrichment;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeEnrichment">IPipeEnrichment</a>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps.property.filter"></a>

```typescript
public readonly filter: PipeSourceFilter;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceFilter">PipeSourceFilter</a>

The filter pattern for the pipe source.

---

##### `name`<sup>Optional</sup> <a name="name" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the pipe in the AWS console.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-name](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-name)

---

##### `role`<sup>Optional</sup> <a name="role" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role used by the pipe which has permissions to read from the source and write to the target.

If an enriched target is used, the role also have permissions to call the enriched target.
If no role is provided, a role will be created.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

`AWS::Pipes::Pipe.Tags`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-tags](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-tags)

---

### IPipeSource <a name="IPipeSource" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeSource"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ActiveMqBrokerSource">ActiveMqBrokerSource</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.AmazonMqBrokerSource">AmazonMqBrokerSource</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.DynamoDBStreamSource">DynamoDBStreamSource</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamSource">KinesisStreamSource</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.MskSource">MskSource</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.RabbitMqBrokerSource">RabbitMqBrokerSource</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.SelfManagedKafkakSource">SelfManagedKafkakSource</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.SqsSource">SqsSource</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSource">IPipeSource</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSource.grantRead">grantRead</a></code> | *No description.* |

---

##### `grantRead` <a name="grantRead" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeSource.grantRead"></a>

```typescript
public grantRead(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeSource.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSource.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSource.property.sourceParameters">sourceParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty \| aws-cdk-lib.IResolvable</code> | *No description.* |

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeSource.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `sourceParameters`<sup>Optional</sup> <a name="sourceParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeSource.property.sourceParameters"></a>

```typescript
public readonly sourceParameters: PipeSourceParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty | aws-cdk-lib.IResolvable

---

### IPipeSourceCommonParameters <a name="IPipeSourceCommonParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceCommonParameters"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IAmazonMqBrokerSourceProps">IAmazonMqBrokerSourceProps</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IDynamoDBStreamSourceProps">IDynamoDBStreamSourceProps</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamSourceProps">IKinesisStreamSourceProps</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceProps">IMskSourceProps</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceCommonParameters">IPipeSourceCommonParameters</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IRabbitMqBrokerSourceProps">IRabbitMqBrokerSourceProps</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps">ISelfManagedKafkaSourceProps</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsSourceProps">ISqsSourceProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceCommonParameters.property.batchSize">batchSize</a></code> | <code>number</code> | The maximum number of records to include in each batch. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceCommonParameters.property.maximumBatchingWindowInSeconds">maximumBatchingWindowInSeconds</a></code> | <code>number</code> | The maximum length of a time to wait for events. |

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceCommonParameters.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

The maximum number of records to include in each batch.

---

##### `maximumBatchingWindowInSeconds`<sup>Optional</sup> <a name="maximumBatchingWindowInSeconds" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceCommonParameters.property.maximumBatchingWindowInSeconds"></a>

```typescript
public readonly maximumBatchingWindowInSeconds: number;
```

- *Type:* number

The maximum length of a time to wait for events.

---

### IPipeSourceFilter <a name="IPipeSourceFilter" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceFilter"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceFilter">PipeSourceFilter</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSqsFilterPattern">PipeSqsFilterPattern</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceFilter">IPipeSourceFilter</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceFilter.property.filters">filters</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeFilterPattern">IPipeFilterPattern</a>[]</code> | *No description.* |

---

##### `filters`<sup>Required</sup> <a name="filters" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceFilter.property.filters"></a>

```typescript
public readonly filters: IPipeFilterPattern[];
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeFilterPattern">IPipeFilterPattern</a>[]

---

### IPipeSourceProperties <a name="IPipeSourceProperties" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceProperties"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceProperties">IPipeSourceProperties</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceProperties.property.activeMqBrokerParameters">activeMqBrokerParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceActiveMQBrokerParametersProperty \| aws-cdk-lib.IResolvable</code> | `CfnPipe.PipeSourceParametersProperty.ActiveMQBrokerParameters`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceProperties.property.dynamoDbStreamParameters">dynamoDbStreamParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceDynamoDBStreamParametersProperty \| aws-cdk-lib.IResolvable</code> | `CfnPipe.PipeSourceParametersProperty.DynamoDBStreamParameters`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceProperties.property.kinesisStreamParameters">kinesisStreamParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceKinesisStreamParametersProperty \| aws-cdk-lib.IResolvable</code> | `CfnPipe.PipeSourceParametersProperty.KinesisStreamParameters`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceProperties.property.managedStreamingKafkaParameters">managedStreamingKafkaParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceManagedStreamingKafkaParametersProperty \| aws-cdk-lib.IResolvable</code> | `CfnPipe.PipeSourceParametersProperty.ManagedStreamingKafkaParameters`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceProperties.property.rabbitMqBrokerParameters">rabbitMqBrokerParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceRabbitMQBrokerParametersProperty \| aws-cdk-lib.IResolvable</code> | `CfnPipe.PipeSourceParametersProperty.RabbitMQBrokerParameters`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceProperties.property.selfManagedKafkaParameters">selfManagedKafkaParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceSelfManagedKafkaParametersProperty \| aws-cdk-lib.IResolvable</code> | `CfnPipe.PipeSourceParametersProperty.SelfManagedKafkaParameters`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceProperties.property.sqsQueueParameters">sqsQueueParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceSqsQueueParametersProperty \| aws-cdk-lib.IResolvable</code> | `CfnPipe.PipeSourceParametersProperty.SqsQueueParameters`. |

---

##### `activeMqBrokerParameters`<sup>Optional</sup> <a name="activeMqBrokerParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceProperties.property.activeMqBrokerParameters"></a>

```typescript
public readonly activeMqBrokerParameters: PipeSourceActiveMQBrokerParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceActiveMQBrokerParametersProperty | aws-cdk-lib.IResolvable

`CfnPipe.PipeSourceParametersProperty.ActiveMQBrokerParameters`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-activemqbrokerparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-activemqbrokerparameters)

---

##### `dynamoDbStreamParameters`<sup>Optional</sup> <a name="dynamoDbStreamParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceProperties.property.dynamoDbStreamParameters"></a>

```typescript
public readonly dynamoDbStreamParameters: PipeSourceDynamoDBStreamParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceDynamoDBStreamParametersProperty | aws-cdk-lib.IResolvable

`CfnPipe.PipeSourceParametersProperty.DynamoDBStreamParameters`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-dynamodbstreamparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-dynamodbstreamparameters)

---

##### `kinesisStreamParameters`<sup>Optional</sup> <a name="kinesisStreamParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceProperties.property.kinesisStreamParameters"></a>

```typescript
public readonly kinesisStreamParameters: PipeSourceKinesisStreamParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceKinesisStreamParametersProperty | aws-cdk-lib.IResolvable

`CfnPipe.PipeSourceParametersProperty.KinesisStreamParameters`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-kinesisstreamparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-kinesisstreamparameters)

---

##### `managedStreamingKafkaParameters`<sup>Optional</sup> <a name="managedStreamingKafkaParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceProperties.property.managedStreamingKafkaParameters"></a>

```typescript
public readonly managedStreamingKafkaParameters: PipeSourceManagedStreamingKafkaParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceManagedStreamingKafkaParametersProperty | aws-cdk-lib.IResolvable

`CfnPipe.PipeSourceParametersProperty.ManagedStreamingKafkaParameters`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-managedstreamingkafkaparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-managedstreamingkafkaparameters)

---

##### `rabbitMqBrokerParameters`<sup>Optional</sup> <a name="rabbitMqBrokerParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceProperties.property.rabbitMqBrokerParameters"></a>

```typescript
public readonly rabbitMqBrokerParameters: PipeSourceRabbitMQBrokerParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceRabbitMQBrokerParametersProperty | aws-cdk-lib.IResolvable

`CfnPipe.PipeSourceParametersProperty.RabbitMQBrokerParameters`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-rabbitmqbrokerparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-rabbitmqbrokerparameters)

---

##### `selfManagedKafkaParameters`<sup>Optional</sup> <a name="selfManagedKafkaParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceProperties.property.selfManagedKafkaParameters"></a>

```typescript
public readonly selfManagedKafkaParameters: PipeSourceSelfManagedKafkaParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceSelfManagedKafkaParametersProperty | aws-cdk-lib.IResolvable

`CfnPipe.PipeSourceParametersProperty.SelfManagedKafkaParameters`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-selfmanagedkafkaparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-selfmanagedkafkaparameters)

---

##### `sqsQueueParameters`<sup>Optional</sup> <a name="sqsQueueParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceProperties.property.sqsQueueParameters"></a>

```typescript
public readonly sqsQueueParameters: PipeSourceSqsQueueParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceSqsQueueParametersProperty | aws-cdk-lib.IResolvable

`CfnPipe.PipeSourceParametersProperty.SqsQueueParameters`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-sqsqueueparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-sqsqueueparameters)

---

### IPipeTarget <a name="IPipeTarget" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiDestinationTarget">ApiDestinationTarget</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ApiGatewayTarget">ApiGatewayTarget</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.EventBridgeEventBusTarget">EventBridgeEventBusTarget</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.KinesisStreamTarget">KinesisStreamTarget</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.LambdaTarget">LambdaTarget</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.LogsTarget">LogsTarget</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.SnsTarget">SnsTarget</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.SqsTarget">SqsTarget</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.StepFunctionTarget">StepFunctionTarget</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget">IPipeTarget</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget.grantPush">grantPush</a></code> | *No description.* |

---

##### `grantPush` <a name="grantPush" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget.grantPush"></a>

```typescript
public grantPush(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget.grantPush.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget.property.targetParameters">targetParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty</code> | *No description.* |

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `targetParameters`<sup>Required</sup> <a name="targetParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeTarget.property.targetParameters"></a>

```typescript
public readonly targetParameters: PipeTargetParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty

---

### IPipeTargetCommonParameters <a name="IPipeTargetCommonParameters" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeTargetCommonParameters"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiDestinationTargetProps">IApiDestinationTargetProps</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IApiGatewayTargetProps">IApiGatewayTargetProps</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IEventBusTargetProps">IEventBusTargetProps</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IKinesisStreamTargetProps">IKinesisStreamTargetProps</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ILambdaTargetProps">ILambdaTargetProps</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ILogsTargetProps">ILogsTargetProps</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTargetCommonParameters">IPipeTargetCommonParameters</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISnsTargetProps">ISnsTargetProps</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsTargetProps">ISqsTargetProps</a>, <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IStepFunctionTargetProps">IStepFunctionTargetProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTargetCommonParameters.property.inputTemplate">inputTemplate</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a></code> | *No description.* |

---

##### `inputTemplate`<sup>Optional</sup> <a name="inputTemplate" id="@raphaelmanke/aws-cdk-pipes-rfc.IPipeTargetCommonParameters.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: IInputTransformation;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a>

---

### IRabbitMqBrokerSourceProps <a name="IRabbitMqBrokerSourceProps" id="@raphaelmanke/aws-cdk-pipes-rfc.IRabbitMqBrokerSourceProps"></a>

- *Extends:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IAmazonMqBrokerSourceProps">IAmazonMqBrokerSourceProps</a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IRabbitMqBrokerSourceProps">IRabbitMqBrokerSourceProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IRabbitMqBrokerSourceProps.property.batchSize">batchSize</a></code> | <code>number</code> | The maximum number of records to include in each batch. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IRabbitMqBrokerSourceProps.property.maximumBatchingWindowInSeconds">maximumBatchingWindowInSeconds</a></code> | <code>number</code> | The maximum length of a time to wait for events. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IRabbitMqBrokerSourceProps.property.credentials">credentials</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMQBrokerAccessCredentials">IMQBrokerAccessCredentials</a></code> | `CfnPipe.PipeSourceActiveMQBrokerParametersProperty.Credentials`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IRabbitMqBrokerSourceProps.property.queueName">queueName</a></code> | <code>string</code> | `CfnPipe.PipeSourceActiveMQBrokerParametersProperty.QueueName`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IRabbitMqBrokerSourceProps.property.virtualHost">virtualHost</a></code> | <code>string</code> | *No description.* |

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@raphaelmanke/aws-cdk-pipes-rfc.IRabbitMqBrokerSourceProps.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

The maximum number of records to include in each batch.

---

##### `maximumBatchingWindowInSeconds`<sup>Optional</sup> <a name="maximumBatchingWindowInSeconds" id="@raphaelmanke/aws-cdk-pipes-rfc.IRabbitMqBrokerSourceProps.property.maximumBatchingWindowInSeconds"></a>

```typescript
public readonly maximumBatchingWindowInSeconds: number;
```

- *Type:* number

The maximum length of a time to wait for events.

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@raphaelmanke/aws-cdk-pipes-rfc.IRabbitMqBrokerSourceProps.property.credentials"></a>

```typescript
public readonly credentials: IMQBrokerAccessCredentials;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMQBrokerAccessCredentials">IMQBrokerAccessCredentials</a>

`CfnPipe.PipeSourceActiveMQBrokerParametersProperty.Credentials`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-credentials](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-credentials)

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@raphaelmanke/aws-cdk-pipes-rfc.IRabbitMqBrokerSourceProps.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

`CfnPipe.PipeSourceActiveMQBrokerParametersProperty.QueueName`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-queuename](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-queuename)

---

##### `virtualHost`<sup>Required</sup> <a name="virtualHost" id="@raphaelmanke/aws-cdk-pipes-rfc.IRabbitMqBrokerSourceProps.property.virtualHost"></a>

```typescript
public readonly virtualHost: string;
```

- *Type:* string

---

### ISelfManagedKafkaAccessConfigurationVpcProperty <a name="ISelfManagedKafkaAccessConfigurationVpcProperty" id="@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaAccessConfigurationVpcProperty"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaAccessConfigurationVpcProperty">ISelfManagedKafkaAccessConfigurationVpcProperty</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaAccessConfigurationVpcProperty.property.securityGroup">securityGroup</a></code> | <code>string[]</code> | `CfnPipe.SelfManagedKafkaAccessConfigurationVpcProperty.SecurityGroup`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaAccessConfigurationVpcProperty.property.subnets">subnets</a></code> | <code>string[]</code> | `CfnPipe.SelfManagedKafkaAccessConfigurationVpcProperty.Subnets`. |

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaAccessConfigurationVpcProperty.property.securityGroup"></a>

```typescript
public readonly securityGroup: string[];
```

- *Type:* string[]

`CfnPipe.SelfManagedKafkaAccessConfigurationVpcProperty.SecurityGroup`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc.html#cfn-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc-securitygroup](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc.html#cfn-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc-securitygroup)

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaAccessConfigurationVpcProperty.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

`CfnPipe.SelfManagedKafkaAccessConfigurationVpcProperty.Subnets`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc.html#cfn-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc-subnets](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc.html#cfn-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc-subnets)

---

### ISelfManagedKafkaSourceProps <a name="ISelfManagedKafkaSourceProps" id="@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps"></a>

- *Extends:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceCommonParameters">IPipeSourceCommonParameters</a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps">ISelfManagedKafkaSourceProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps.property.batchSize">batchSize</a></code> | <code>number</code> | The maximum number of records to include in each batch. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps.property.maximumBatchingWindowInSeconds">maximumBatchingWindowInSeconds</a></code> | <code>number</code> | The maximum length of a time to wait for events. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps.property.topicName">topicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaAccessConfigurationVpcProperty">ISelfManagedKafkaAccessConfigurationVpcProperty</a></code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps.property.additionalBootstrapServers">additionalBootstrapServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps.property.consumerGroupId">consumerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps.property.credentials">credentials</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceCredentials">IMskSourceCredentials</a></code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps.property.serverRootCaCertificate">serverRootCaCertificate</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps.property.startingPosition">startingPosition</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceStartingPosition">PipeSourceStartingPosition</a></code> | *No description.* |

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

The maximum number of records to include in each batch.

---

##### `maximumBatchingWindowInSeconds`<sup>Optional</sup> <a name="maximumBatchingWindowInSeconds" id="@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps.property.maximumBatchingWindowInSeconds"></a>

```typescript
public readonly maximumBatchingWindowInSeconds: number;
```

- *Type:* number

The maximum length of a time to wait for events.

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: ISelfManagedKafkaAccessConfigurationVpcProperty;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaAccessConfigurationVpcProperty">ISelfManagedKafkaAccessConfigurationVpcProperty</a>

---

##### `additionalBootstrapServers`<sup>Optional</sup> <a name="additionalBootstrapServers" id="@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps.property.additionalBootstrapServers"></a>

```typescript
public readonly additionalBootstrapServers: string[];
```

- *Type:* string[]

---

##### `consumerGroupId`<sup>Optional</sup> <a name="consumerGroupId" id="@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps.property.consumerGroupId"></a>

```typescript
public readonly consumerGroupId: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps.property.credentials"></a>

```typescript
public readonly credentials: IMskSourceCredentials;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IMskSourceCredentials">IMskSourceCredentials</a>

---

##### `serverRootCaCertificate`<sup>Optional</sup> <a name="serverRootCaCertificate" id="@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps.property.serverRootCaCertificate"></a>

```typescript
public readonly serverRootCaCertificate: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

##### `startingPosition`<sup>Optional</sup> <a name="startingPosition" id="@raphaelmanke/aws-cdk-pipes-rfc.ISelfManagedKafkaSourceProps.property.startingPosition"></a>

```typescript
public readonly startingPosition: PipeSourceStartingPosition;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceStartingPosition">PipeSourceStartingPosition</a>

---

### ISnsTargetProps <a name="ISnsTargetProps" id="@raphaelmanke/aws-cdk-pipes-rfc.ISnsTargetProps"></a>

- *Extends:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTargetCommonParameters">IPipeTargetCommonParameters</a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISnsTargetProps">ISnsTargetProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISnsTargetProps.property.inputTemplate">inputTemplate</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a></code> | *No description.* |

---

##### `inputTemplate`<sup>Optional</sup> <a name="inputTemplate" id="@raphaelmanke/aws-cdk-pipes-rfc.ISnsTargetProps.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: IInputTransformation;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a>

---

### ISqsAttributes <a name="ISqsAttributes" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsAttributes"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsAttributes">ISqsAttributes</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsAttributes.property.approximateFirstReceiveTimestamp">approximateFirstReceiveTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsAttributes.property.approximateReceiveCount">approximateReceiveCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsAttributes.property.messageDeduplicationId">messageDeduplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsAttributes.property.messageGroupId">messageGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsAttributes.property.senderId">senderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsAttributes.property.sentTimestamp">sentTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsAttributes.property.sequenceNumber">sequenceNumber</a></code> | <code>string</code> | *No description.* |

---

##### `approximateFirstReceiveTimestamp`<sup>Optional</sup> <a name="approximateFirstReceiveTimestamp" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsAttributes.property.approximateFirstReceiveTimestamp"></a>

```typescript
public readonly approximateFirstReceiveTimestamp: string;
```

- *Type:* string

---

##### `approximateReceiveCount`<sup>Optional</sup> <a name="approximateReceiveCount" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsAttributes.property.approximateReceiveCount"></a>

```typescript
public readonly approximateReceiveCount: string;
```

- *Type:* string

---

##### `messageDeduplicationId`<sup>Optional</sup> <a name="messageDeduplicationId" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsAttributes.property.messageDeduplicationId"></a>

```typescript
public readonly messageDeduplicationId: string;
```

- *Type:* string

---

##### `messageGroupId`<sup>Optional</sup> <a name="messageGroupId" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsAttributes.property.messageGroupId"></a>

```typescript
public readonly messageGroupId: string;
```

- *Type:* string

---

##### `senderId`<sup>Optional</sup> <a name="senderId" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsAttributes.property.senderId"></a>

```typescript
public readonly senderId: string;
```

- *Type:* string

---

##### `sentTimestamp`<sup>Optional</sup> <a name="sentTimestamp" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsAttributes.property.sentTimestamp"></a>

```typescript
public readonly sentTimestamp: string;
```

- *Type:* string

---

##### `sequenceNumber`<sup>Optional</sup> <a name="sequenceNumber" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsAttributes.property.sequenceNumber"></a>

```typescript
public readonly sequenceNumber: string;
```

- *Type:* string

---

### ISqsMessagePipeFilter <a name="ISqsMessagePipeFilter" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsMessagePipeFilter"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsMessagePipeFilter">ISqsMessagePipeFilter</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsMessagePipeFilter.property.attributes">attributes</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsAttributes">ISqsAttributes</a></code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsMessagePipeFilter.property.body">body</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsMessagePipeFilter.property.md5OfBody">md5OfBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsMessagePipeFilter.property.messageAttributes">messageAttributes</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsMessagePipeFilter.property.messageId">messageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsMessagePipeFilter.property.receiptHandle">receiptHandle</a></code> | <code>string</code> | *No description.* |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsMessagePipeFilter.property.attributes"></a>

```typescript
public readonly attributes: ISqsAttributes;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsAttributes">ISqsAttributes</a>

---

##### `body`<sup>Optional</sup> <a name="body" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsMessagePipeFilter.property.body"></a>

```typescript
public readonly body: any;
```

- *Type:* any

---

##### `md5OfBody`<sup>Optional</sup> <a name="md5OfBody" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsMessagePipeFilter.property.md5OfBody"></a>

```typescript
public readonly md5OfBody: string;
```

- *Type:* string

---

##### `messageAttributes`<sup>Optional</sup> <a name="messageAttributes" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsMessagePipeFilter.property.messageAttributes"></a>

```typescript
public readonly messageAttributes: any;
```

- *Type:* any

---

##### `messageId`<sup>Optional</sup> <a name="messageId" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsMessagePipeFilter.property.messageId"></a>

```typescript
public readonly messageId: string;
```

- *Type:* string

---

##### `receiptHandle`<sup>Optional</sup> <a name="receiptHandle" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsMessagePipeFilter.property.receiptHandle"></a>

```typescript
public readonly receiptHandle: string;
```

- *Type:* string

---

### ISqsSourceProps <a name="ISqsSourceProps" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsSourceProps"></a>

- *Extends:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeSourceCommonParameters">IPipeSourceCommonParameters</a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsSourceProps">ISqsSourceProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsSourceProps.property.batchSize">batchSize</a></code> | <code>number</code> | The maximum number of records to include in each batch. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsSourceProps.property.maximumBatchingWindowInSeconds">maximumBatchingWindowInSeconds</a></code> | <code>number</code> | The maximum length of a time to wait for events. |

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsSourceProps.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

The maximum number of records to include in each batch.

---

##### `maximumBatchingWindowInSeconds`<sup>Optional</sup> <a name="maximumBatchingWindowInSeconds" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsSourceProps.property.maximumBatchingWindowInSeconds"></a>

```typescript
public readonly maximumBatchingWindowInSeconds: number;
```

- *Type:* number

The maximum length of a time to wait for events.

---

### ISqsTargetProps <a name="ISqsTargetProps" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsTargetProps"></a>

- *Extends:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTargetCommonParameters">IPipeTargetCommonParameters</a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsTargetProps">ISqsTargetProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsTargetProps.property.inputTemplate">inputTemplate</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a></code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsTargetProps.property.messageDeduplicationId">messageDeduplicationId</a></code> | <code>string</code> | `CfnPipe.PipeTargetSqsQueueParametersProperty.MessageDeduplicationId`. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.ISqsTargetProps.property.messageGroupId">messageGroupId</a></code> | <code>string</code> | `CfnPipe.PipeTargetSqsQueueParametersProperty.MessageGroupId`. |

---

##### `inputTemplate`<sup>Optional</sup> <a name="inputTemplate" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsTargetProps.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: IInputTransformation;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a>

---

##### `messageDeduplicationId`<sup>Optional</sup> <a name="messageDeduplicationId" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsTargetProps.property.messageDeduplicationId"></a>

```typescript
public readonly messageDeduplicationId: string;
```

- *Type:* string

`CfnPipe.PipeTargetSqsQueueParametersProperty.MessageDeduplicationId`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetsqsqueueparameters.html#cfn-pipes-pipe-pipetargetsqsqueueparameters-messagededuplicationid](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetsqsqueueparameters.html#cfn-pipes-pipe-pipetargetsqsqueueparameters-messagededuplicationid)

---

##### `messageGroupId`<sup>Optional</sup> <a name="messageGroupId" id="@raphaelmanke/aws-cdk-pipes-rfc.ISqsTargetProps.property.messageGroupId"></a>

```typescript
public readonly messageGroupId: string;
```

- *Type:* string

`CfnPipe.PipeTargetSqsQueueParametersProperty.MessageGroupId`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetsqsqueueparameters.html#cfn-pipes-pipe-pipetargetsqsqueueparameters-messagegroupid](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetsqsqueueparameters.html#cfn-pipes-pipe-pipetargetsqsqueueparameters-messagegroupid)

---

### IStepFunctionEnrichmentProps <a name="IStepFunctionEnrichmentProps" id="@raphaelmanke/aws-cdk-pipes-rfc.IStepFunctionEnrichmentProps"></a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IStepFunctionEnrichmentProps">IStepFunctionEnrichmentProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IStepFunctionEnrichmentProps.property.inputTransformation">inputTransformation</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a></code> | *No description.* |

---

##### `inputTransformation`<sup>Optional</sup> <a name="inputTransformation" id="@raphaelmanke/aws-cdk-pipes-rfc.IStepFunctionEnrichmentProps.property.inputTransformation"></a>

```typescript
public readonly inputTransformation: IInputTransformation;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a>

---

### IStepFunctionTargetProps <a name="IStepFunctionTargetProps" id="@raphaelmanke/aws-cdk-pipes-rfc.IStepFunctionTargetProps"></a>

- *Extends:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IPipeTargetCommonParameters">IPipeTargetCommonParameters</a>

- *Implemented By:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IStepFunctionTargetProps">IStepFunctionTargetProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IStepFunctionTargetProps.property.inputTemplate">inputTemplate</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a></code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IStepFunctionTargetProps.property.invocationType">invocationType</a></code> | <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInvocationType">IInvocationType</a></code> | *No description.* |

---

##### `inputTemplate`<sup>Optional</sup> <a name="inputTemplate" id="@raphaelmanke/aws-cdk-pipes-rfc.IStepFunctionTargetProps.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: IInputTransformation;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a>

---

##### `invocationType`<sup>Required</sup> <a name="invocationType" id="@raphaelmanke/aws-cdk-pipes-rfc.IStepFunctionTargetProps.property.invocationType"></a>

```typescript
public readonly invocationType: IInvocationType;
```

- *Type:* <a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInvocationType">IInvocationType</a>

---

## Enums <a name="Enums" id="Enums"></a>

### DesiredState <a name="DesiredState" id="@raphaelmanke/aws-cdk-pipes-rfc.DesiredState"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.DesiredState.RUNNING">RUNNING</a></code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.DesiredState.STOPPED">STOPPED</a></code> | *No description.* |

---

##### `RUNNING` <a name="RUNNING" id="@raphaelmanke/aws-cdk-pipes-rfc.DesiredState.RUNNING"></a>

---


##### `STOPPED` <a name="STOPPED" id="@raphaelmanke/aws-cdk-pipes-rfc.DesiredState.STOPPED"></a>

---


### IInvocationType <a name="IInvocationType" id="@raphaelmanke/aws-cdk-pipes-rfc.IInvocationType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInvocationType.FIRE_AND_FORGET">FIRE_AND_FORGET</a></code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.IInvocationType.REQUEST_RESPONSE">REQUEST_RESPONSE</a></code> | *No description.* |

---

##### `FIRE_AND_FORGET` <a name="FIRE_AND_FORGET" id="@raphaelmanke/aws-cdk-pipes-rfc.IInvocationType.FIRE_AND_FORGET"></a>

---


##### `REQUEST_RESPONSE` <a name="REQUEST_RESPONSE" id="@raphaelmanke/aws-cdk-pipes-rfc.IInvocationType.REQUEST_RESPONSE"></a>

---


### PipeSourceOnPartialBatchItemFailure <a name="PipeSourceOnPartialBatchItemFailure" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceOnPartialBatchItemFailure"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceOnPartialBatchItemFailure.AUTOMATIC_BISECT">AUTOMATIC_BISECT</a></code> | *No description.* |

---

##### `AUTOMATIC_BISECT` <a name="AUTOMATIC_BISECT" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceOnPartialBatchItemFailure.AUTOMATIC_BISECT"></a>

---


### PipeSourceStartingPosition <a name="PipeSourceStartingPosition" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceStartingPosition"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceStartingPosition.LATEST">LATEST</a></code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceStartingPosition.TRIM_HORIZON">TRIM_HORIZON</a></code> | *No description.* |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceStartingPosition.AT_TIMESTAMP">AT_TIMESTAMP</a></code> | *No description.* |

---

##### `LATEST` <a name="LATEST" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceStartingPosition.LATEST"></a>

---


##### `TRIM_HORIZON` <a name="TRIM_HORIZON" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceStartingPosition.TRIM_HORIZON"></a>

---


##### `AT_TIMESTAMP` <a name="AT_TIMESTAMP" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeSourceStartingPosition.AT_TIMESTAMP"></a>

---


### PipeVariables <a name="PipeVariables" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeVariables"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeVariables.PIPE_ARN">PIPE_ARN</a></code> | The Amazon Resource Name (ARN) of the pipe. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeVariables.PIPE_NAME">PIPE_NAME</a></code> | The name of the pipe. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeVariables.PIPE_SOURCE_ARN">PIPE_SOURCE_ARN</a></code> | The ARN of the event source of the pipe. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeVariables.PIPE_ENRICHMENT_ARN">PIPE_ENRICHMENT_ARN</a></code> | The ARN of the enrichment of the pipe. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeVariables.PIPE_TARGET_ARN">PIPE_TARGET_ARN</a></code> | The ARN of the target of the pipe. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeVariables.PIPE_EVENT_INGESTION_TIME">PIPE_EVENT_INGESTION_TIME</a></code> | The time at which the event was received by the input transformer. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeVariables.PIPE_EVENT">PIPE_EVENT</a></code> | The event as received by the input transformer. |
| <code><a href="#@raphaelmanke/aws-cdk-pipes-rfc.PipeVariables.PIPE_EVENT_JSON">PIPE_EVENT_JSON</a></code> | The same as aws.pipes.event, but the variable only has a value if the original payload, either from the source or returned by the enrichment, is JSON. If the pipe has an encoded field, such as the Amazon SQS body field or the Kinesis data, those fields are decoded and turned into valid JSON. Because it isn't escaped, the variable can only be used as a value for a JSON field. For more information, see Implicit body data parsing. |

---

##### `PIPE_ARN` <a name="PIPE_ARN" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeVariables.PIPE_ARN"></a>

The Amazon Resource Name (ARN) of the pipe.

---


##### `PIPE_NAME` <a name="PIPE_NAME" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeVariables.PIPE_NAME"></a>

The name of the pipe.

---


##### `PIPE_SOURCE_ARN` <a name="PIPE_SOURCE_ARN" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeVariables.PIPE_SOURCE_ARN"></a>

The ARN of the event source of the pipe.

---


##### `PIPE_ENRICHMENT_ARN` <a name="PIPE_ENRICHMENT_ARN" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeVariables.PIPE_ENRICHMENT_ARN"></a>

The ARN of the enrichment of the pipe.

---


##### `PIPE_TARGET_ARN` <a name="PIPE_TARGET_ARN" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeVariables.PIPE_TARGET_ARN"></a>

The ARN of the target of the pipe.

---


##### `PIPE_EVENT_INGESTION_TIME` <a name="PIPE_EVENT_INGESTION_TIME" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeVariables.PIPE_EVENT_INGESTION_TIME"></a>

The time at which the event was received by the input transformer.

This is an ISO 8601 timestamp. This time is different for the enrichment input transformer and the target input transformer, depending on when the enrichment completed processing the event.

---


##### `PIPE_EVENT` <a name="PIPE_EVENT" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeVariables.PIPE_EVENT"></a>

The event as received by the input transformer.

---


##### `PIPE_EVENT_JSON` <a name="PIPE_EVENT_JSON" id="@raphaelmanke/aws-cdk-pipes-rfc.PipeVariables.PIPE_EVENT_JSON"></a>

The same as aws.pipes.event, but the variable only has a value if the original payload, either from the source or returned by the enrichment, is JSON. If the pipe has an encoded field, such as the Amazon SQS body field or the Kinesis data, those fields are decoded and turned into valid JSON. Because it isn't escaped, the variable can only be used as a value for a JSON field. For more information, see Implicit body data parsing.

---

