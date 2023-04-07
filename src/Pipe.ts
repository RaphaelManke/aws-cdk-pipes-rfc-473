import {
  IResource,
  Lazy,
  Names,
  Resource,
} from 'aws-cdk-lib';
import { IRole, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { Construct } from 'constructs';
import { IPipeEnrichment } from './PipeEnrichment';
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
   * The source of the pipe
   */
  readonly source: IPipeSource;
  /**
   * The filter pattern for the pipe source
   */
  readonly filter?: IPipeSourceFilter;
  /**
  *
  */
  readonly enrichment?: IPipeEnrichment;
  /**
   * The target of the pipe
   */
  readonly target: IPipeTarget;
  /**
  * Name of the pipe in the AWS console
  *
  * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-name
  */
  readonly name?: string;
  /**
   * The role used by the pipe which has permissions to read from the source and write to the target.
   * If an enriched target is used, the role also have permissions to call the enriched target.
   * If no role is provided, a role will be created.
   */
  readonly role?: IRole;
  /**
   * A description of the pipe displayed in the AWS console
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-description
   */
  readonly description?: string;
  /**
   * The desired state of the pipe. If the state is set to STOPPED, the pipe will not process events.
   *
   * @link https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_Pipe.html#eventbridge-Type-Pipe-DesiredState
   */
  readonly desiredState?: DesiredState;
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
      filterCriteria: props.filter,
    };
    if (props.enrichment) {
      props.enrichment.grantInvoke(this.pipeRole);
    }
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
