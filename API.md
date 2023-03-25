# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pipe <a name="Pipe" id="aws-cdk-pipes-rfc.Pipe"></a>

- *Implements:* <a href="#aws-cdk-pipes-rfc.IPipe">IPipe</a>

#### Initializers <a name="Initializers" id="aws-cdk-pipes-rfc.Pipe.Initializer"></a>

```typescript
import { Pipe } from 'aws-cdk-pipes-rfc'

new Pipe(scope: Construct, id: string, props: IPipeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.Pipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.Pipe.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.Pipe.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-pipes-rfc.IPipeProps">IPipeProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-pipes-rfc.Pipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-pipes-rfc.Pipe.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-pipes-rfc.Pipe.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-pipes-rfc.IPipeProps">IPipeProps</a>

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



## Classes <a name="Classes" id="Classes"></a>

### PipeEnrichment <a name="PipeEnrichment" id="aws-cdk-pipes-rfc.PipeEnrichment"></a>

- *Implements:* <a href="#aws-cdk-pipes-rfc.IPipeEnrichment">IPipeEnrichment</a>

#### Initializers <a name="Initializers" id="aws-cdk-pipes-rfc.PipeEnrichment.Initializer"></a>

```typescript
import { PipeEnrichment } from 'aws-cdk-pipes-rfc'

new PipeEnrichment(enrichmentArn: string, props: PipeEnrichmentParametersProperty)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.PipeEnrichment.Initializer.parameter.enrichmentArn">enrichmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.PipeEnrichment.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty</code> | *No description.* |

---

##### `enrichmentArn`<sup>Required</sup> <a name="enrichmentArn" id="aws-cdk-pipes-rfc.PipeEnrichment.Initializer.parameter.enrichmentArn"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-pipes-rfc.PipeEnrichment.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.PipeEnrichment.grantInvoke">grantInvoke</a></code> | *No description.* |

---

##### `grantInvoke` <a name="grantInvoke" id="aws-cdk-pipes-rfc.PipeEnrichment.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="aws-cdk-pipes-rfc.PipeEnrichment.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.PipeEnrichment.property.enrichmentArn">enrichmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.PipeEnrichment.property.enrichmentParameters">enrichmentParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty</code> | *No description.* |

---

##### `enrichmentArn`<sup>Required</sup> <a name="enrichmentArn" id="aws-cdk-pipes-rfc.PipeEnrichment.property.enrichmentArn"></a>

```typescript
public readonly enrichmentArn: string;
```

- *Type:* string

---

##### `enrichmentParameters`<sup>Required</sup> <a name="enrichmentParameters" id="aws-cdk-pipes-rfc.PipeEnrichment.property.enrichmentParameters"></a>

```typescript
public readonly enrichmentParameters: PipeEnrichmentParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty

---


### PipeGenericFilterPattern <a name="PipeGenericFilterPattern" id="aws-cdk-pipes-rfc.PipeGenericFilterPattern"></a>

#### Initializers <a name="Initializers" id="aws-cdk-pipes-rfc.PipeGenericFilterPattern.Initializer"></a>

```typescript
import { PipeGenericFilterPattern } from 'aws-cdk-pipes-rfc'

new PipeGenericFilterPattern()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.PipeGenericFilterPattern.fromJson">fromJson</a></code> | *No description.* |

---

##### `fromJson` <a name="fromJson" id="aws-cdk-pipes-rfc.PipeGenericFilterPattern.fromJson"></a>

```typescript
import { PipeGenericFilterPattern } from 'aws-cdk-pipes-rfc'

PipeGenericFilterPattern.fromJson(patternObject: {[ key: string ]: any})
```

###### `patternObject`<sup>Required</sup> <a name="patternObject" id="aws-cdk-pipes-rfc.PipeGenericFilterPattern.fromJson.parameter.patternObject"></a>

- *Type:* {[ key: string ]: any}

---



### PipeInputTransformation <a name="PipeInputTransformation" id="aws-cdk-pipes-rfc.PipeInputTransformation"></a>

- *Implements:* <a href="#aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a>

#### Initializers <a name="Initializers" id="aws-cdk-pipes-rfc.PipeInputTransformation.Initializer"></a>

```typescript
import { PipeInputTransformation } from 'aws-cdk-pipes-rfc'

new PipeInputTransformation(inputTemplate: string | {[ key: string ]: string | {[ key: string ]: string} | {[ key: string ]: string | {[ key: string ]: string}}})
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.PipeInputTransformation.Initializer.parameter.inputTemplate">inputTemplate</a></code> | <code>string \| {[ key: string ]: string \| {[ key: string ]: string} \| {[ key: string ]: string \| {[ key: string ]: string}}}</code> | *No description.* |

---

##### `inputTemplate`<sup>Required</sup> <a name="inputTemplate" id="aws-cdk-pipes-rfc.PipeInputTransformation.Initializer.parameter.inputTemplate"></a>

- *Type:* string | {[ key: string ]: string | {[ key: string ]: string} | {[ key: string ]: string | {[ key: string ]: string}}}

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.PipeInputTransformation.fromJson">fromJson</a></code> | *No description.* |

---

##### `fromJson` <a name="fromJson" id="aws-cdk-pipes-rfc.PipeInputTransformation.fromJson"></a>

```typescript
import { PipeInputTransformation } from 'aws-cdk-pipes-rfc'

PipeInputTransformation.fromJson(inputTemplate: {[ key: string ]: any})
```

###### `inputTemplate`<sup>Required</sup> <a name="inputTemplate" id="aws-cdk-pipes-rfc.PipeInputTransformation.fromJson.parameter.inputTemplate"></a>

- *Type:* {[ key: string ]: any}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.PipeInputTransformation.property.inputTemplate">inputTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `inputTemplate`<sup>Required</sup> <a name="inputTemplate" id="aws-cdk-pipes-rfc.PipeInputTransformation.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: string;
```

- *Type:* string

---


### PipeSourceFilter <a name="PipeSourceFilter" id="aws-cdk-pipes-rfc.PipeSourceFilter"></a>

- *Implements:* <a href="#aws-cdk-pipes-rfc.IPipeSourceFilter">IPipeSourceFilter</a>

#### Initializers <a name="Initializers" id="aws-cdk-pipes-rfc.PipeSourceFilter.Initializer"></a>

```typescript
import { PipeSourceFilter } from 'aws-cdk-pipes-rfc'

new PipeSourceFilter(filter: IPipeFilterPattern[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.PipeSourceFilter.Initializer.parameter.filter">filter</a></code> | <code><a href="#aws-cdk-pipes-rfc.IPipeFilterPattern">IPipeFilterPattern</a>[]</code> | *No description.* |

---

##### `filter`<sup>Required</sup> <a name="filter" id="aws-cdk-pipes-rfc.PipeSourceFilter.Initializer.parameter.filter"></a>

- *Type:* <a href="#aws-cdk-pipes-rfc.IPipeFilterPattern">IPipeFilterPattern</a>[]

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.PipeSourceFilter.property.filters">filters</a></code> | <code><a href="#aws-cdk-pipes-rfc.IPipeFilterPattern">IPipeFilterPattern</a>[]</code> | *No description.* |

---

##### `filters`<sup>Required</sup> <a name="filters" id="aws-cdk-pipes-rfc.PipeSourceFilter.property.filters"></a>

```typescript
public readonly filters: IPipeFilterPattern[];
```

- *Type:* <a href="#aws-cdk-pipes-rfc.IPipeFilterPattern">IPipeFilterPattern</a>[]

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IInputTransformation <a name="IInputTransformation" id="aws-cdk-pipes-rfc.IInputTransformation"></a>

- *Implemented By:* <a href="#aws-cdk-pipes-rfc.PipeInputTransformation">PipeInputTransformation</a>, <a href="#aws-cdk-pipes-rfc.IInputTransformation">IInputTransformation</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.IInputTransformation.property.inputTemplate">inputTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `inputTemplate`<sup>Required</sup> <a name="inputTemplate" id="aws-cdk-pipes-rfc.IInputTransformation.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: string;
```

- *Type:* string

---

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

### IPipeEnrichment <a name="IPipeEnrichment" id="aws-cdk-pipes-rfc.IPipeEnrichment"></a>

- *Implemented By:* <a href="#aws-cdk-pipes-rfc.PipeEnrichment">PipeEnrichment</a>, <a href="#aws-cdk-pipes-rfc.IPipeEnrichment">IPipeEnrichment</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.IPipeEnrichment.grantInvoke">grantInvoke</a></code> | *No description.* |

---

##### `grantInvoke` <a name="grantInvoke" id="aws-cdk-pipes-rfc.IPipeEnrichment.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="aws-cdk-pipes-rfc.IPipeEnrichment.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.IPipeEnrichment.property.enrichmentArn">enrichmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.IPipeEnrichment.property.enrichmentParameters">enrichmentParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty</code> | *No description.* |

---

##### `enrichmentArn`<sup>Required</sup> <a name="enrichmentArn" id="aws-cdk-pipes-rfc.IPipeEnrichment.property.enrichmentArn"></a>

```typescript
public readonly enrichmentArn: string;
```

- *Type:* string

---

##### `enrichmentParameters`<sup>Required</sup> <a name="enrichmentParameters" id="aws-cdk-pipes-rfc.IPipeEnrichment.property.enrichmentParameters"></a>

```typescript
public readonly enrichmentParameters: PipeEnrichmentParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeEnrichmentParametersProperty

---

### IPipeFilterPattern <a name="IPipeFilterPattern" id="aws-cdk-pipes-rfc.IPipeFilterPattern"></a>

- *Implemented By:* <a href="#aws-cdk-pipes-rfc.IPipeFilterPattern">IPipeFilterPattern</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.IPipeFilterPattern.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="aws-cdk-pipes-rfc.IPipeFilterPattern.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

### IPipeProps <a name="IPipeProps" id="aws-cdk-pipes-rfc.IPipeProps"></a>

- *Implemented By:* <a href="#aws-cdk-pipes-rfc.IPipeProps">IPipeProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.IPipeProps.property.source">source</a></code> | <code><a href="#aws-cdk-pipes-rfc.IPipeSource">IPipeSource</a></code> | The source of the pipe. |
| <code><a href="#aws-cdk-pipes-rfc.IPipeProps.property.target">target</a></code> | <code><a href="#aws-cdk-pipes-rfc.IPipeTarget">IPipeTarget</a></code> | The target of the pipe. |
| <code><a href="#aws-cdk-pipes-rfc.IPipeProps.property.description">description</a></code> | <code>string</code> | A description of the pipe displayed in the AWS console. |
| <code><a href="#aws-cdk-pipes-rfc.IPipeProps.property.desiredState">desiredState</a></code> | <code><a href="#aws-cdk-pipes-rfc.DesiredState">DesiredState</a></code> | The desired state of the pipe. |
| <code><a href="#aws-cdk-pipes-rfc.IPipeProps.property.enrichment">enrichment</a></code> | <code><a href="#aws-cdk-pipes-rfc.IPipeEnrichment">IPipeEnrichment</a></code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.IPipeProps.property.filter">filter</a></code> | <code><a href="#aws-cdk-pipes-rfc.PipeSourceFilter">PipeSourceFilter</a></code> | The filter pattern for the pipe source. |
| <code><a href="#aws-cdk-pipes-rfc.IPipeProps.property.name">name</a></code> | <code>string</code> | Name of the pipe in the AWS console. |
| <code><a href="#aws-cdk-pipes-rfc.IPipeProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used by the pipe which has permissions to read from the source and write to the target. |
| <code><a href="#aws-cdk-pipes-rfc.IPipeProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | `AWS::Pipes::Pipe.Tags`. |

---

##### `source`<sup>Required</sup> <a name="source" id="aws-cdk-pipes-rfc.IPipeProps.property.source"></a>

```typescript
public readonly source: IPipeSource;
```

- *Type:* <a href="#aws-cdk-pipes-rfc.IPipeSource">IPipeSource</a>

The source of the pipe.

---

##### `target`<sup>Required</sup> <a name="target" id="aws-cdk-pipes-rfc.IPipeProps.property.target"></a>

```typescript
public readonly target: IPipeTarget;
```

- *Type:* <a href="#aws-cdk-pipes-rfc.IPipeTarget">IPipeTarget</a>

The target of the pipe.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-cdk-pipes-rfc.IPipeProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the pipe displayed in the AWS console.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-description](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-description)

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="aws-cdk-pipes-rfc.IPipeProps.property.desiredState"></a>

```typescript
public readonly desiredState: DesiredState;
```

- *Type:* <a href="#aws-cdk-pipes-rfc.DesiredState">DesiredState</a>

The desired state of the pipe.

If the state is set to STOPPED, the pipe will not process events.

> [https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_Pipe.html#eventbridge-Type-Pipe-DesiredState](https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_Pipe.html#eventbridge-Type-Pipe-DesiredState)

---

##### `enrichment`<sup>Optional</sup> <a name="enrichment" id="aws-cdk-pipes-rfc.IPipeProps.property.enrichment"></a>

```typescript
public readonly enrichment: IPipeEnrichment;
```

- *Type:* <a href="#aws-cdk-pipes-rfc.IPipeEnrichment">IPipeEnrichment</a>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="aws-cdk-pipes-rfc.IPipeProps.property.filter"></a>

```typescript
public readonly filter: PipeSourceFilter;
```

- *Type:* <a href="#aws-cdk-pipes-rfc.PipeSourceFilter">PipeSourceFilter</a>

The filter pattern for the pipe source.

---

##### `name`<sup>Optional</sup> <a name="name" id="aws-cdk-pipes-rfc.IPipeProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the pipe in the AWS console.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-name](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-name)

---

##### `role`<sup>Optional</sup> <a name="role" id="aws-cdk-pipes-rfc.IPipeProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role used by the pipe which has permissions to read from the source and write to the target.

If an enriched target is used, the role also have permissions to call the enriched target.
If no role is provided, a role will be created.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="aws-cdk-pipes-rfc.IPipeProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

`AWS::Pipes::Pipe.Tags`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-tags](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-tags)

---

### IPipeSource <a name="IPipeSource" id="aws-cdk-pipes-rfc.IPipeSource"></a>

- *Implemented By:* <a href="#aws-cdk-pipes-rfc.IPipeSource">IPipeSource</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.IPipeSource.grantRead">grantRead</a></code> | *No description.* |

---

##### `grantRead` <a name="grantRead" id="aws-cdk-pipes-rfc.IPipeSource.grantRead"></a>

```typescript
public grantRead(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="aws-cdk-pipes-rfc.IPipeSource.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.IPipeSource.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.IPipeSource.property.sourceParameters">sourceParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty \| aws-cdk-lib.IResolvable</code> | *No description.* |

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="aws-cdk-pipes-rfc.IPipeSource.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `sourceParameters`<sup>Optional</sup> <a name="sourceParameters" id="aws-cdk-pipes-rfc.IPipeSource.property.sourceParameters"></a>

```typescript
public readonly sourceParameters: PipeSourceParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceParametersProperty | aws-cdk-lib.IResolvable

---

### IPipeSourceCommonParameters <a name="IPipeSourceCommonParameters" id="aws-cdk-pipes-rfc.IPipeSourceCommonParameters"></a>

- *Implemented By:* <a href="#aws-cdk-pipes-rfc.IPipeSourceCommonParameters">IPipeSourceCommonParameters</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.IPipeSourceCommonParameters.property.batchSize">batchSize</a></code> | <code>number</code> | The maximum number of records to include in each batch. |
| <code><a href="#aws-cdk-pipes-rfc.IPipeSourceCommonParameters.property.maximumBatchingWindowInSeconds">maximumBatchingWindowInSeconds</a></code> | <code>number</code> | The maximum length of a time to wait for events. |

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="aws-cdk-pipes-rfc.IPipeSourceCommonParameters.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

The maximum number of records to include in each batch.

---

##### `maximumBatchingWindowInSeconds`<sup>Optional</sup> <a name="maximumBatchingWindowInSeconds" id="aws-cdk-pipes-rfc.IPipeSourceCommonParameters.property.maximumBatchingWindowInSeconds"></a>

```typescript
public readonly maximumBatchingWindowInSeconds: number;
```

- *Type:* number

The maximum length of a time to wait for events.

---

### IPipeSourceFilter <a name="IPipeSourceFilter" id="aws-cdk-pipes-rfc.IPipeSourceFilter"></a>

- *Implemented By:* <a href="#aws-cdk-pipes-rfc.PipeSourceFilter">PipeSourceFilter</a>, <a href="#aws-cdk-pipes-rfc.IPipeSourceFilter">IPipeSourceFilter</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.IPipeSourceFilter.property.filters">filters</a></code> | <code><a href="#aws-cdk-pipes-rfc.IPipeFilterPattern">IPipeFilterPattern</a>[]</code> | *No description.* |

---

##### `filters`<sup>Required</sup> <a name="filters" id="aws-cdk-pipes-rfc.IPipeSourceFilter.property.filters"></a>

```typescript
public readonly filters: IPipeFilterPattern[];
```

- *Type:* <a href="#aws-cdk-pipes-rfc.IPipeFilterPattern">IPipeFilterPattern</a>[]

---

### IPipeSourceProperties <a name="IPipeSourceProperties" id="aws-cdk-pipes-rfc.IPipeSourceProperties"></a>

- *Implemented By:* <a href="#aws-cdk-pipes-rfc.IPipeSourceProperties">IPipeSourceProperties</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.IPipeSourceProperties.property.activeMqBrokerParameters">activeMqBrokerParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceActiveMQBrokerParametersProperty \| aws-cdk-lib.IResolvable</code> | `CfnPipe.PipeSourceParametersProperty.ActiveMQBrokerParameters`. |
| <code><a href="#aws-cdk-pipes-rfc.IPipeSourceProperties.property.dynamoDbStreamParameters">dynamoDbStreamParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceDynamoDBStreamParametersProperty \| aws-cdk-lib.IResolvable</code> | `CfnPipe.PipeSourceParametersProperty.DynamoDBStreamParameters`. |
| <code><a href="#aws-cdk-pipes-rfc.IPipeSourceProperties.property.kinesisStreamParameters">kinesisStreamParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceKinesisStreamParametersProperty \| aws-cdk-lib.IResolvable</code> | `CfnPipe.PipeSourceParametersProperty.KinesisStreamParameters`. |
| <code><a href="#aws-cdk-pipes-rfc.IPipeSourceProperties.property.managedStreamingKafkaParameters">managedStreamingKafkaParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceManagedStreamingKafkaParametersProperty \| aws-cdk-lib.IResolvable</code> | `CfnPipe.PipeSourceParametersProperty.ManagedStreamingKafkaParameters`. |
| <code><a href="#aws-cdk-pipes-rfc.IPipeSourceProperties.property.rabbitMqBrokerParameters">rabbitMqBrokerParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceRabbitMQBrokerParametersProperty \| aws-cdk-lib.IResolvable</code> | `CfnPipe.PipeSourceParametersProperty.RabbitMQBrokerParameters`. |
| <code><a href="#aws-cdk-pipes-rfc.IPipeSourceProperties.property.selfManagedKafkaParameters">selfManagedKafkaParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceSelfManagedKafkaParametersProperty \| aws-cdk-lib.IResolvable</code> | `CfnPipe.PipeSourceParametersProperty.SelfManagedKafkaParameters`. |
| <code><a href="#aws-cdk-pipes-rfc.IPipeSourceProperties.property.sqsQueueParameters">sqsQueueParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceSqsQueueParametersProperty \| aws-cdk-lib.IResolvable</code> | `CfnPipe.PipeSourceParametersProperty.SqsQueueParameters`. |

---

##### `activeMqBrokerParameters`<sup>Optional</sup> <a name="activeMqBrokerParameters" id="aws-cdk-pipes-rfc.IPipeSourceProperties.property.activeMqBrokerParameters"></a>

```typescript
public readonly activeMqBrokerParameters: PipeSourceActiveMQBrokerParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceActiveMQBrokerParametersProperty | aws-cdk-lib.IResolvable

`CfnPipe.PipeSourceParametersProperty.ActiveMQBrokerParameters`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-activemqbrokerparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-activemqbrokerparameters)

---

##### `dynamoDbStreamParameters`<sup>Optional</sup> <a name="dynamoDbStreamParameters" id="aws-cdk-pipes-rfc.IPipeSourceProperties.property.dynamoDbStreamParameters"></a>

```typescript
public readonly dynamoDbStreamParameters: PipeSourceDynamoDBStreamParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceDynamoDBStreamParametersProperty | aws-cdk-lib.IResolvable

`CfnPipe.PipeSourceParametersProperty.DynamoDBStreamParameters`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-dynamodbstreamparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-dynamodbstreamparameters)

---

##### `kinesisStreamParameters`<sup>Optional</sup> <a name="kinesisStreamParameters" id="aws-cdk-pipes-rfc.IPipeSourceProperties.property.kinesisStreamParameters"></a>

```typescript
public readonly kinesisStreamParameters: PipeSourceKinesisStreamParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceKinesisStreamParametersProperty | aws-cdk-lib.IResolvable

`CfnPipe.PipeSourceParametersProperty.KinesisStreamParameters`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-kinesisstreamparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-kinesisstreamparameters)

---

##### `managedStreamingKafkaParameters`<sup>Optional</sup> <a name="managedStreamingKafkaParameters" id="aws-cdk-pipes-rfc.IPipeSourceProperties.property.managedStreamingKafkaParameters"></a>

```typescript
public readonly managedStreamingKafkaParameters: PipeSourceManagedStreamingKafkaParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceManagedStreamingKafkaParametersProperty | aws-cdk-lib.IResolvable

`CfnPipe.PipeSourceParametersProperty.ManagedStreamingKafkaParameters`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-managedstreamingkafkaparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-managedstreamingkafkaparameters)

---

##### `rabbitMqBrokerParameters`<sup>Optional</sup> <a name="rabbitMqBrokerParameters" id="aws-cdk-pipes-rfc.IPipeSourceProperties.property.rabbitMqBrokerParameters"></a>

```typescript
public readonly rabbitMqBrokerParameters: PipeSourceRabbitMQBrokerParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceRabbitMQBrokerParametersProperty | aws-cdk-lib.IResolvable

`CfnPipe.PipeSourceParametersProperty.RabbitMQBrokerParameters`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-rabbitmqbrokerparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-rabbitmqbrokerparameters)

---

##### `selfManagedKafkaParameters`<sup>Optional</sup> <a name="selfManagedKafkaParameters" id="aws-cdk-pipes-rfc.IPipeSourceProperties.property.selfManagedKafkaParameters"></a>

```typescript
public readonly selfManagedKafkaParameters: PipeSourceSelfManagedKafkaParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceSelfManagedKafkaParametersProperty | aws-cdk-lib.IResolvable

`CfnPipe.PipeSourceParametersProperty.SelfManagedKafkaParameters`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-selfmanagedkafkaparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-selfmanagedkafkaparameters)

---

##### `sqsQueueParameters`<sup>Optional</sup> <a name="sqsQueueParameters" id="aws-cdk-pipes-rfc.IPipeSourceProperties.property.sqsQueueParameters"></a>

```typescript
public readonly sqsQueueParameters: PipeSourceSqsQueueParametersProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeSourceSqsQueueParametersProperty | aws-cdk-lib.IResolvable

`CfnPipe.PipeSourceParametersProperty.SqsQueueParameters`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-sqsqueueparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-sqsqueueparameters)

---

### IPipeTarget <a name="IPipeTarget" id="aws-cdk-pipes-rfc.IPipeTarget"></a>

- *Implemented By:* <a href="#aws-cdk-pipes-rfc.IPipeTarget">IPipeTarget</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.IPipeTarget.grantPush">grantPush</a></code> | *No description.* |

---

##### `grantPush` <a name="grantPush" id="aws-cdk-pipes-rfc.IPipeTarget.grantPush"></a>

```typescript
public grantPush(grantee: IRole): void
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="aws-cdk-pipes-rfc.IPipeTarget.grantPush.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-pipes-rfc.IPipeTarget.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-pipes-rfc.IPipeTarget.property.targetParameters">targetParameters</a></code> | <code>aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty</code> | *No description.* |

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="aws-cdk-pipes-rfc.IPipeTarget.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `targetParameters`<sup>Required</sup> <a name="targetParameters" id="aws-cdk-pipes-rfc.IPipeTarget.property.targetParameters"></a>

```typescript
public readonly targetParameters: PipeTargetParametersProperty;
```

- *Type:* aws-cdk-lib.aws_pipes.CfnPipe.PipeTargetParametersProperty

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

