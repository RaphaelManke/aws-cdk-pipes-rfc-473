/* eslint-disable import/no-extraneous-dependencies */
import {
  awsIamAuthenticator,
  Type,
} from '@jm18457/kafkajs-msk-iam-authentication-mechanism';
import * as AWS from 'aws-sdk';
import { Kafka } from 'kafkajs';

// https://github.com/jmaver-plume/kafkajs-msk-iam-authentication-mechanism
export const handler = async () => {
  // make aws api call to retrieve kafka bootstrap servers
  const msk = new AWS.Kafka();
  const mskCluster = await msk
    .getBootstrapBrokers({
      ClusterArn: process.env.MSK_CLUSTER_ARN!,
    })
    .promise();
  const brokerUrl = mskCluster.BootstrapBrokerStringSaslIam!;
  const kafka = new Kafka({
    clientId: 'my-app',
    brokers: [
      brokerUrl,
    ],
    ssl: true,
    sasl: {
      mechanism: Type,
      authenticationProvider: awsIamAuthenticator(process.env.AWS_REGION!),
    },
  });

  async function run() {
    const admin = kafka.admin();
    await admin.connect();
    const topics = await admin.listTopics();
    console.log('Topics: ', topics);

    if (!topics.includes('test-topic')) {
      await admin.createTopics({
        topics: [{ topic: 'test-topic', numPartitions: 1 }],
      });
    }

    // publish kafka message to test-topic
    const producer = kafka.producer();
    await producer.connect();
    await producer
      .send({
        topic: 'test-topic',
        messages: [
          {
            value: 'Hello Kafka',
            key: 'key-1',
            headers: {
              'header-1': 'value-1',
            },
          },
        ],
      })
      .then(console.log);
    await admin.disconnect();
  }
  await run().catch(console.error);

  return;
};