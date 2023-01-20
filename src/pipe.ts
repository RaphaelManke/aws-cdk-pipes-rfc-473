import { IRole, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import {
  IResolvable,
  IResource,
  Lazy,
  Names,
  Resource,
} from 'aws-cdk-lib/core';
import { Construct } from 'constructs';

/**
 * Interface all Pipe constructs must implement
 */
export interface IPipe extends IResource {
  /**
   * The name of the pipe
   *
   * @attribute
   * @link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-name
   */
  readonly pipeName: string;

  /**
   * The ARN of the pipe
   *
   * @attribute
   * @link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#Arn-fn::getatt
   */
  readonly pipeArn: string;

  /**
   * The role used by the pipe
   *
   * @attribute
   */
  readonly pipeRole: IRole;
}

abstract class PipeBase extends Resource implements IPipe {
  public abstract readonly pipeName: string;
  public abstract readonly pipeArn: string;
  public abstract readonly pipeRole: IRole;
}

export enum DesiredState {
  RUNNING = 'RUNNING',
  STOPPED = 'STOPPED',
}

export abstract class PipeEnrichment {
  public readonly enrichmentArn: string;
  public enrichmentParameters: CfnPipe.PipeEnrichmentParametersProperty;

  constructor( enrichmentArn: string, props: CfnPipe.PipeEnrichmentParametersProperty) {
    this.enrichmentParameters = props;
    this.enrichmentArn = enrichmentArn;
  }

  abstract grantInvoke(grantee: IRole): void;
}

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

export interface IPipeTarget {
  targetArn: string;
  targetParameters: CfnPipe.PipeTargetParametersProperty;

  grantPush(grantee: IRole): void;
};

enum reservedVariables {
  PIPES_ARN = '<aws.pipes.pipe-arn>',
  PIPES_NAME = '<aws.pipes.pipe-name>',
  PIPES_TARGET_ARN = '<aws.pipes.target-arn>',
  PIPE_EVENT_INGESTION_TIME = '<aws.pipes.event.ingestion-time>',
  PIPE_EVENT = '<aws.pipes.event>',
  PIPE_EVENT_JSON = '<aws.pipes.event.json>'
}

type StaticString = string;
type JsonPath = `<$.${string}>`;
type KeyValue = Record<string, string | reservedVariables>;
type StaticJsonFlat = Record<string, StaticString| JsonPath | KeyValue >;
type InputTransformJson = Record<string, StaticString| JsonPath | KeyValue | StaticJsonFlat>;


type PipeInputTransformationValue = StaticString | InputTransformJson


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

export abstract class PipeTarget implements IPipeTarget {
  public readonly targetArn: string;
  public readonly targetParameters: CfnPipe.PipeTargetParametersProperty ;
  constructor(
    targetArn: string,
    props: CfnPipe.PipeTargetParametersProperty,
  ) {
    this.targetArn = targetArn;
    this.targetParameters = props;
  }

  public abstract grantPush(grantee: IRole): void;
}


export interface IPipeFilterPattern {
  pattern: string;
}

export class PipeGenericFilterPattern {
  static fromJson(patternObject: Record<string, any>): IPipeFilterPattern {
    return { pattern: JSON.stringify(patternObject) };
  }
}

export class PipeSqsFilterPattern extends PipeGenericFilterPattern {
  static fromSqsMessageAttributes(attributes: {
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
  }): IPipeFilterPattern {
    return {
      pattern: JSON.stringify(attributes),
    };
  }
}

export class PipeSourceFilter {
  public filters: IPipeFilterPattern[];

  constructor(filter: IPipeFilterPattern[]) {
    this.filters = filter;
  }
}

export interface PipeProps {
  /**
   *
   */
  readonly source: PipeSource;
  /**
   *
   */
  readonly target: PipeTarget;

  /**
   *
   */
  readonly sourceFilter?: PipeSourceFilter;

  /**
   *
   *
   */
  readonly role?: IRole;
  /**
   * `AWS::Pipes::Pipe.Description`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-description
   */
  readonly description?: string;
  /**
   * `AWS::Pipes::Pipe.DesiredState`
   *
   * @link https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_Pipe.html#eventbridge-Type-Pipe-DesiredState
   */
  readonly desiredState?: DesiredState;
  /**
   *
   */
  readonly enrichment?: PipeEnrichment;
  /**
   * `AWS::Pipes::Pipe.Name`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-name
   */
  readonly name?: string;
  /**
   * `AWS::Pipes::Pipe.Tags`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-tags
   */
  readonly tags?: {
    [key: string]: string;
  };
}

export class Pipe extends PipeBase {
  public readonly pipeName: string;
  public readonly pipeArn: string;
  public readonly pipeRole: IRole;

  constructor(scope: Construct, id: string, props: PipeProps) {
    const pipeName =
      props.name || Lazy.string({ produce: () => Names.uniqueId(this) });
    super(scope, id, { physicalName: pipeName });

    this.pipeRole =
      props.role ||
      new Role(this, 'Role', {
        assumedBy: new ServicePrincipal('pipes.amazonaws.com'),
      });
    this.pipeName = pipeName;

    const sourceParameters = {
      ...props.source.sourceParameters,
      filterCriteria: props.sourceFilter,
    };

    props.source.grantRead(this.pipeRole);
    props.target.grantPush(this.pipeRole);

    const resource = new CfnPipe(this, 'Resource', {
      name: props.name,
      source: props.source.sourceArn,
      sourceParameters: sourceParameters,
      target: props.target.targetArn,
      targetParameters: props.target.targetParameters,
      enrichment: props.enrichment?.enrichmentArn,
      roleArn: this.pipeRole.roleArn,
      description: props.description,
      desiredState: props.desiredState,
      enrichmentParameters: props.enrichment?.enrichmentParameters,
      tags: props.tags,
    });
    this.pipeArn = resource.attrArn;
  }
}


