const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Raphael Manke',
  authorAddress: 'github@manke.cloud',
  cdkVersion: '2.66.1',
  defaultReleaseBranch: 'main',
  name: 'aws-cdk-pipes-rfc',
  repositoryUrl: 'https://github.com/raphael.manke/aws-cdk-pipes-rfc.git',
  releaseToNpm: false,
  depsUpgrade: false,
  gitignore: [
    'cdk.out',
  ],
  tsconfigDev: {
    include: [
      'e2e/**/*.ts',
    ],
  },
  // eslintOptions: {
  //   dirs: [
  //     '.projenrc.js',
  //     'src/**/*.ts',
  //     'test/**/*.ts',
  //   ],
  // },
  scripts: {
    'cdk:deploy:source:sqs': "cdk deploy --app 'npx ts-node --prefer-ts-exts e2e/sources/Sqs.ts'",
    'cdk:deploy:source:dynamodb': "cdk deploy --app 'npx ts-node --prefer-ts-exts e2e/sources/DynamoDbStream.ts'",
    'cdk:deploy:source:kafka-serverless': "cdk deploy --app 'npx ts-node --prefer-ts-exts e2e/sources/MskServerless.ts'",
    'cdk:deploy:target:eventbus:dynamo-stream': "cdk deploy --app 'npx ts-node --prefer-ts-exts e2e/targets/EventBus/DynamoStreamEventBus.ts'",
    'cdk:deploy:target:eventbus:sqs': "cdk deploy --app 'npx ts-node --prefer-ts-exts e2e/targets/EventBus/SqsEventBus.ts'",
    'cdk:deploy:target:eventbus:kinesis-stream': "cdk deploy --app 'npx ts-node --prefer-ts-exts e2e/targets/EventBus/KinesisStreamEventBus.ts'",
  },
  deps: [
    '@jm18457/kafkajs-msk-iam-authentication-mechanism@2.0.3',
    'aws-sdk',
    'kafkajs',

  ], /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    'aws-cdk',
    'esbuild',
  ], /* Build dependencies for this module. */
  bundledDeps: [
    '@jm18457/kafkajs-msk-iam-authentication-mechanism@2.0.3',
    'aws-sdk',
    'kafkajs',
  ],
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();