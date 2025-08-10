module.exports = {
  default: {
    require: ['features/**/*.ts',
      'features/**/CreateOrganization.ts'
    ],
    requireModule: ['ts-node/register'],
    format: ['progress'],
    paths: ['features/**/*.feature'],
    timeout: 60 * 1000
  }
};
