import { DynamoDBRecord, DynamoDBStreamEvent } from 'aws-lambda';
export const handler = async (event: DynamoDBStreamEvent['Records']) => {
  console.log(JSON.stringify(event));
  for (const record of event) {
    console.log(record);
    const id = record.dynamodb?.NewImage?.id?.S;
    console.log(id);
    const idNumber = parseInt(id || '0', 10);
    if (idNumber > 16) {
      throw new Error('ID 1 is not allowed');
    } else {
      console.log(`ID ${idNumber} is less than 10`);
    }

    return record;

  } ;
};