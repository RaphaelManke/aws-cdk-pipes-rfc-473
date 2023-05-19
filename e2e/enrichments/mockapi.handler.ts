import { APIGatewayProxyEventV2 } from 'aws-lambda';

export const handler = async (event: APIGatewayProxyEventV2) => {
  console.log('event', JSON.stringify(event, null, 2));
  if (event.body) {
    console.log('body', event.body );
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      method: event.requestContext.http.method,
      path: event.requestContext.http.path,
      body: event.body,
      headers: event.headers,
      queryStringParameters: event.queryStringParameters,
    }),
  };
};