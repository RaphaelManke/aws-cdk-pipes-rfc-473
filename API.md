# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pipe <a name="Pipe" id="aws-cdk-pipes-rfc.Pipe"></a>

- *Implements:* <a href="#aws-cdk-pipes-rfc.IPipe">IPipe</a>

#### Initializers <a name="Initializers" id="aws-cdk-pipes-rfc.Pipe.Initializer"></a>

```typescript
import { Pipe } from 'aws-cdk-pipes-rfc'

new Pipe(scope: Construct, id: string, props: PipeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.Pipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.Pipe.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.Pipe.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-pipes-rfc.PipeProps">PipeProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-pipes-rfc.Pipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-pipes-rfc.Pipe.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-pipes-rfc.Pipe.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-pipes-rfc.PipeProps">PipeProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.Pipe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-pipes-rfc.Pipe.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-cdk-pipes-rfc.Pipe.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-cdk-pipes-rfc.Pipe.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="aws-cdk-pipes-rfc.Pipe.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.Pipe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-cdk-pipes-rfc.Pipe.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-cdk-pipes-rfc.Pipe.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-cdk-pipes-rfc.Pipe.isConstruct"></a>

```typescript
import { Pipe } from 'aws-cdk-pipes-rfc'

Pipe.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-pipes-rfc.Pipe.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-cdk-pipes-rfc.Pipe.isOwnedResource"></a>

```typescript
import { Pipe } from 'aws-cdk-pipes-rfc'

Pipe.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-pipes-rfc.Pipe.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-cdk-pipes-rfc.Pipe.isResource"></a>

```typescript
import { Pipe } from 'aws-cdk-pipes-rfc'

Pipe.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-pipes-rfc.Pipe.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.Pipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-pipes-rfc.Pipe.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-pipes-rfc.Pipe.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-pipes-rfc.Pipe.property.pipeArn">pipeArn</a></code> | <code>string</code> | The ARN of the pipe. |
| <code><a href="#aws-cdk-pipes-rfc.Pipe.property.pipeName">pipeName</a></code> | <code>string</code> | The name of the pipe. |
| <code><a href="#aws-cdk-pipes-rfc.Pipe.property.pipeRole">pipeRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used by the pipe. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-pipes-rfc.Pipe.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-pipes-rfc.Pipe.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-pipes-rfc.Pipe.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `pipeArn`<sup>Required</sup> <a name="pipeArn" id="aws-cdk-pipes-rfc.Pipe.property.pipeArn"></a>

```typescript
public readonly pipeArn: string;
```

- *Type:* string

The ARN of the pipe.

---

##### `pipeName`<sup>Required</sup> <a name="pipeName" id="aws-cdk-pipes-rfc.Pipe.property.pipeName"></a>

```typescript
public readonly pipeName: string;
```

- *Type:* string

The name of the pipe.

---

##### `pipeRole`<sup>Required</sup> <a name="pipeRole" id="aws-cdk-pipes-rfc.Pipe.property.pipeRole"></a>

```typescript
public readonly pipeRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role used by the pipe.

---


## Structs <a name="Structs" id="Structs"></a>

### PipeProps <a name="PipeProps" id="aws-cdk-pipes-rfc.PipeProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-pipes-rfc.PipeProps.Initializer"></a>

```typescript
import { PipeProps } from 'aws-cdk-pipes-rfc'

const pipeProps: PipeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.PipeProps.property.source">source</a></code> | <code><a href="#aws-cdk-pipes-rfc.PipeSource">PipeSource</a></code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.PipeProps.property.target">target</a></code> | <code><a href="#aws-cdk-pipes-rfc.PipeTarget">PipeTarget</a></code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.PipeProps.property.description">description</a></code> | <code>string</code> | `AWS::Pipes::Pipe.Description`. |
| <code><a href="#aws-cdk-pipes-rfc.PipeProps.property.desiredState">desiredState</a></code> | <code><a href="#aws-cdk-pipes-rfc.DesiredState">DesiredState</a></code> | `AWS::Pipes::Pipe.DesiredState`. |
| <code><a href="#aws-cdk-pipes-rfc.PipeProps.property.enrichment">enrichment</a></code> | <code><a href="#aws-cdk-pipes-rfc.PipeEnrichment">PipeEnrichment</a></code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.PipeProps.property.name">name</a></code> | <code>string</code> | `AWS::Pipes::Pipe.Name`. |
| <code><a href="#aws-cdk-pipes-rfc.PipeProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.PipeProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | `AWS::Pipes::Pipe.Tags`. |

---

##### `source`<sup>Required</sup> <a name="source" id="aws-cdk-pipes-rfc.PipeProps.property.source"></a>

```typescript
public readonly source: PipeSource;
```

- *Type:* <a href="#aws-cdk-pipes-rfc.PipeSource">PipeSource</a>

---

##### `target`<sup>Required</sup> <a name="target" id="aws-cdk-pipes-rfc.PipeProps.property.target"></a>

```typescript
public readonly target: PipeTarget;
```

- *Type:* <a href="#aws-cdk-pipes-rfc.PipeTarget">PipeTarget</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-cdk-pipes-rfc.PipeProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

`AWS::Pipes::Pipe.Description`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-description](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-description)

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="aws-cdk-pipes-rfc.PipeProps.property.desiredState"></a>

```typescript
public readonly desiredState: DesiredState;
```

- *Type:* <a href="#aws-cdk-pipes-rfc.DesiredState">DesiredState</a>

`AWS::Pipes::Pipe.DesiredState`.

> [https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_Pipe.html#eventbridge-Type-Pipe-DesiredState](https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_Pipe.html#eventbridge-Type-Pipe-DesiredState)

---

##### `enrichment`<sup>Optional</sup> <a name="enrichment" id="aws-cdk-pipes-rfc.PipeProps.property.enrichment"></a>

```typescript
public readonly enrichment: PipeEnrichment;
```

- *Type:* <a href="#aws-cdk-pipes-rfc.PipeEnrichment">PipeEnrichment</a>

---

##### `name`<sup>Optional</sup> <a name="name" id="aws-cdk-pipes-rfc.PipeProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

`AWS::Pipes::Pipe.Name`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-name](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-name)

---

##### `role`<sup>Optional</sup> <a name="role" id="aws-cdk-pipes-rfc.PipeProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `tags`<sup>Optional</sup> <a name="tags" id="aws-cdk-pipes-rfc.PipeProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

`AWS::Pipes::Pipe.Tags`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-tags](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-tags)

---

## Classes <a name="Classes" id="Classes"></a>

### PipeEnrichment <a name="PipeEnrichment" id="aws-cdk-pipes-rfc.PipeEnrichment"></a>

#### Initializers <a name="Initializers" id="aws-cdk-pipes-rfc.PipeEnrichment.Initializer"></a>

```typescript
import { PipeEnrichment } from 'aws-cdk-pipes-rfc'

new PipeEnrichment(props: PipeEnrichmentParametersProperty | IResolvable)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.PipeEnrichment.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty \| aws-cdk-lib.IResolvable</code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-pipes-rfc.PipeEnrichment.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty | aws-cdk-lib.IResolvable

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.PipeEnrichment.property.enrichmentArn">enrichmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.PipeEnrichment.property.enrichmentParameters">enrichmentParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty \| aws-cdk-lib.IResolvable</code> | *No description.* |

---

##### `enrichmentArn`<sup>Required</sup> <a name="enrichmentArn" id="aws-cdk-pipes-rfc.PipeEnrichment.property.enrichmentArn"></a>

```typescript
public readonly enrichmentArn: string;
```

- *Type:* string

---

##### `enrichmentParameters`<sup>Required</sup> <a name="enrichmentParameters" id="aws-cdk-pipes-rfc.PipeEnrichment.property.enrichmentParameters"></a>

```typescript
public readonly enrichmentParameters: PipeEnrichmentParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty | aws-cdk-lib.IResolvable

---


### PipeSource <a name="PipeSource" id="aws-cdk-pipes-rfc.PipeSource"></a>

#### Initializers <a name="Initializers" id="aws-cdk-pipes-rfc.PipeSource.Initializer"></a>

```typescript
import { PipeSource } from 'aws-cdk-pipes-rfc'

new PipeSource(sourceArn: string, props?: IResolvable | PipeSourceParametersProperty)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.PipeSource.Initializer.parameter.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.PipeSource.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty</code> | *No description.* |

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="aws-cdk-pipes-rfc.PipeSource.Initializer.parameter.sourceArn"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="aws-cdk-pipes-rfc.PipeSource.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.PipeSource.grantRead">grantRead</a></code> | *No description.* |

---

##### `grantRead` <a name="grantRead" id="aws-cdk-pipes-rfc.PipeSource.grantRead"></a>

```typescript
public grantRead(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="aws-cdk-pipes-rfc.PipeSource.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.PipeSource.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.PipeSource.property.sourceParameters">sourceParameters</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty</code> | *No description.* |

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="aws-cdk-pipes-rfc.PipeSource.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `sourceParameters`<sup>Optional</sup> <a name="sourceParameters" id="aws-cdk-pipes-rfc.PipeSource.property.sourceParameters"></a>

```typescript
public readonly sourceParameters: IResolvable | PipeSourceParametersProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty

---


### PipeTarget <a name="PipeTarget" id="aws-cdk-pipes-rfc.PipeTarget"></a>

#### Initializers <a name="Initializers" id="aws-cdk-pipes-rfc.PipeTarget.Initializer"></a>

```typescript
import { PipeTarget } from 'aws-cdk-pipes-rfc'

new PipeTarget(targetArn: string, props: IResolvable | PipeTargetParametersProperty)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.PipeTarget.Initializer.parameter.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.PipeTarget.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty</code> | *No description.* |

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="aws-cdk-pipes-rfc.PipeTarget.Initializer.parameter.targetArn"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-pipes-rfc.PipeTarget.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.PipeTarget.grantPush">grantPush</a></code> | *No description.* |

---

##### `grantPush` <a name="grantPush" id="aws-cdk-pipes-rfc.PipeTarget.grantPush"></a>

```typescript
public grantPush(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="aws-cdk-pipes-rfc.PipeTarget.grantPush.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.PipeTarget.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.PipeTarget.property.targetParameters">targetParameters</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty</code> | *No description.* |

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="aws-cdk-pipes-rfc.PipeTarget.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `targetParameters`<sup>Required</sup> <a name="targetParameters" id="aws-cdk-pipes-rfc.PipeTarget.property.targetParameters"></a>

```typescript
public readonly targetParameters: IResolvable | PipeTargetParametersProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IPipe <a name="IPipe" id="aws-cdk-pipes-rfc.IPipe"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-cdk-pipes-rfc.Pipe">Pipe</a>, <a href="#aws-cdk-pipes-rfc.IPipe">IPipe</a>

Interface all Pipe constructs must implement.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.IPipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-pipes-rfc.IPipe.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-pipes-rfc.IPipe.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-pipes-rfc.IPipe.property.pipeArn">pipeArn</a></code> | <code>string</code> | The ARN of the pipe. |
| <code><a href="#aws-cdk-pipes-rfc.IPipe.property.pipeName">pipeName</a></code> | <code>string</code> | The name of the pipe. |
| <code><a href="#aws-cdk-pipes-rfc.IPipe.property.pipeRole">pipeRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used by the pipe. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-pipes-rfc.IPipe.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-pipes-rfc.IPipe.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-pipes-rfc.IPipe.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `pipeArn`<sup>Required</sup> <a name="pipeArn" id="aws-cdk-pipes-rfc.IPipe.property.pipeArn"></a>

```typescript
public readonly pipeArn: string;
```

- *Type:* string

The ARN of the pipe.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#Arn-fn::getatt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#Arn-fn::getatt)

---

##### `pipeName`<sup>Required</sup> <a name="pipeName" id="aws-cdk-pipes-rfc.IPipe.property.pipeName"></a>

```typescript
public readonly pipeName: string;
```

- *Type:* string

The name of the pipe.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-name](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-name)

---

##### `pipeRole`<sup>Required</sup> <a name="pipeRole" id="aws-cdk-pipes-rfc.IPipe.property.pipeRole"></a>

```typescript
public readonly pipeRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role used by the pipe.

---

## Enums <a name="Enums" id="Enums"></a>

### DesiredState <a name="DesiredState" id="aws-cdk-pipes-rfc.DesiredState"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.DesiredState.RUNNING">RUNNING</a></code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.DesiredState.STOPPED">STOPPED</a></code> | *No description.* |

---

##### `RUNNING` <a name="RUNNING" id="aws-cdk-pipes-rfc.DesiredState.RUNNING"></a>

---


##### `STOPPED` <a name="STOPPED" id="aws-cdk-pipes-rfc.DesiredState.STOPPED"></a>

---

