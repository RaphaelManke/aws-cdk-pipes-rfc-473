import { IRole } from 'aws-cdk-lib/aws-iam';
import { ILogGroup } from 'aws-cdk-lib/aws-logs';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { IPipeTarget } from '../PipeTarget';

export interface ILogsTargetProps {
  logStreamName?: string;
  timestamp?: string;
}
export class LogsTarget implements IPipeTarget {
  private readonly logGroup: ILogGroup;
  targetArn: string;
  targetParameters: CfnPipe.PipeTargetParametersProperty;

  constructor(logGroup : ILogGroup, props?: ILogsTargetProps) {
    this.logGroup = logGroup;
    this.targetArn = logGroup.logGroupArn;
    this.targetParameters = {
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