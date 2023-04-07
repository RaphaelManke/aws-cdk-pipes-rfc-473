const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Raphael Manke',
  authorAddress: 'github@manke.cloud',
  cdkVersion: '2.66.1',
  defaultReleaseBranch: 'main',
  name: 'aws-cdk-pipes-rfc',
  repositoryUrl: 'https://github.com/raphael.manke/aws-cdk-pipes-rfc.git',
  releaseToNpm: true,
  depsUpgrade: false,
  gitignore: [
    'cdk.out',
    'cdk.context.json',
  ],
  tsconfigDev: {
    include: [
      'e2e/**/*.ts',
    ],
  },

  scripts: {
    'cdk:deploy:source:sqs': "cdk deploy --app 'npx ts-node --prefer-ts-exts e2e/sources/Sqs.ts'",
    'cdk:deploy:source:dynamodb': "cdk deploy --app 'npx ts-node --prefer-ts-exts e2e/sources/DynamoDbStream.ts'",
    'cdk:deploy:source:kafka-serverless': "cdk deploy --app 'npx ts-node --prefer-ts-exts e2e/sources/MskServerless.ts'",
    'cdk:deploy:target:eventbus:dynamo-stream': "cdk deploy --app 'npx ts-node --prefer-ts-exts e2e/targets/EventBus/DynamoStreamEventBus.ts'",
    'cdk:deploy:target:eventbus:sqs': "cdk deploy --app 'npx ts-node --prefer-ts-exts e2e/targets/EventBus/SqsEventBus.ts'",
    'cdk:deploy:target:eventbus:kinesis-stream': "cdk deploy --app 'npx ts-node --prefer-ts-exts e2e/targets/EventBus/KinesisStreamEventBus.ts'",
    'cdk:deploy:all:sqs:sfn:eventbus': "cdk deploy --app 'npx ts-node --prefer-ts-exts e2e/SqsSfnEventBus.ts'",
  },
  deps: [
  ], /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    '@jm18457/kafkajs-msk-iam-authentication-mechanism@2.0.3',
    'aws-sdk',
    'kafkajs',

    'aws-cdk',
    'esbuild',
  ], /* Build dependencies for this module. */
  // bundledDeps: [
  //   '@jm18457/kafkajs-msk-iam-authentication-mechanism@2.0.3',
  //   'aws-sdk',
  //   'kafkajs',
  // ],
  packageName: '@raphaelmanke/aws-cdk-pipes-rfc', /* The "name" in package.json. */
  npmAccess: 'public', /* The npm access level to use when releasing this module. */


});
project.addPackageIgnore('cdk.out');
project.addPackageIgnore('e2e');
project.addPackageIgnore('yarn-error.log');
project.addPackageIgnore('cdk.context.json');
project.addPackageIgnore('.talismanrc');
project.synth();