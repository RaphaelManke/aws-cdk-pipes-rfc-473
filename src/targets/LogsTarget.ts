import { IRole } from 'aws-cdk-lib/aws-iam';
import { ILogGroup } from 'aws-cdk-lib/aws-logs';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IPipeTarget, IPipeTargetCommonParameters } from '../PipeTarget';

export interface ILogsTargetProps extends IPipeTargetCommonParameters {
  logStreamName?: string;
  timestamp?: string;
}
export class LogsTarget implements IPipeTarget {
  private readonly logGroup: ILogGroup;
  readonly targetArn: string;
  readonly targetParameters: CfnPipe.PipeTargetParametersProperty;

  constructor(logGroup : ILogGroup, props?: ILogsTargetProps) {
    this.logGroup = logGroup;
    this.targetArn = logGroup.logGroupArn;
    this.targetParameters = {
      inputTemplate: props?.inputTemplate?.inputTemplate,
      cloudWatchLogsParameters: {
        logStreamName: props?.logStreamName,
        timestamp: props?.timestamp,

      },
    };
  }
  grantPush(grantee: IRole): void {
    this.logGroup.grantWrite(grantee);
  }
}