import { IRole, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import {
  IResource,
  Lazy,
  Names,
  Resource,
} from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { PipeEnrichment } from './PipeEnrichment';
import { IPipeSource } from './PipeSource';
import { PipeSourceFilter as IPipeSourceFilter } from './PipeSourceFilter';
import { IPipeTarget } from './PipeTarget';

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

export enum DesiredState {
  RUNNING = 'RUNNING',
  STOPPED = 'STOPPED',
}


export interface IPipeProps {
  /**
   *
   */
  readonly source: IPipeSource;
  /**
   *
   */
  readonly sourceFilter?: IPipeSourceFilter;
  /**
   *
   */
  readonly target: IPipeTarget;
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

abstract class PipeBase extends Resource implements IPipe {
  public abstract readonly pipeName: string;
  public abstract readonly pipeArn: string;
  public abstract readonly pipeRole: IRole;
}

export class Pipe extends PipeBase {
  public readonly pipeName: string;
  public readonly pipeArn: string;
  public readonly pipeRole: IRole;

  constructor(scope: Construct, id: string, props: IPipeProps) {
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
