import { ITable } from 'aws-cdk-lib/aws-dynamodb';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { CfnPipe } from 'aws-cdk-lib/aws-pipes';
import { PipeSource } from '../PipeSource';
import { IPipeSourceFilter } from '../PipeSourceFilter';


export interface IDynamoDBStreamSourceProps {
  filter?: IPipeSourceFilter;
  config?: CfnPipe.PipeSourceDynamoDBStreamParametersProperty;
}

export class DynamoDBStreamSource extends PipeSource {
  private table: ITable;

  constructor(table: ITable, props?: IDynamoDBStreamSourceProps) {
    super(table.tableArn, { dynamoDbStreamParameters: props?.config, filterCriteria: props?.filter });
    this.table = table;
  }

  public grantRead(grantee: IRole): void {
    this.table.grantStreamRead(grantee);
  }
}