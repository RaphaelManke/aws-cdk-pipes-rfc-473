const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Raphael Manke',
  authorAddress: 'raphaz110@gmail.com',
  cdkVersion: '2.59.0',
  defaultReleaseBranch: 'main',
  name: 'aws-cdk-pipes-rfc',
  repositoryUrl: 'https://github.com/raphael.manke/aws-cdk-pipes-rfc.git',
  releaseToNpm: false,
  depsUpgrade: false,


  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();