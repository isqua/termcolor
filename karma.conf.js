module.exports = function(config) {
  config.set({

    basePath: '.',

    frameworks: ['jasmine'],

    files: [
      {
        pattern: 'js/apps/*.js',
        type: 'module'
      },
      {
        pattern: 'js/utils/*.js',
        type: 'module'
      },
      {
        pattern: 'spec/**/*.spec.js',
        type: 'module'
      },
      // Fixtures
      {
        pattern: 'spec/**/*',
        served:  true,
        included: false
      }
    ],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Firefox'],

    singleRun: true,

    concurrency: Infinity
  })
}
