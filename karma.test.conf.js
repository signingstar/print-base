var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon', 'es6-shim'],
    files: [
      'tests/server/**/*test.js',
      'tests/integration/**/*test.js',
      'tests/client/**/*test.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'tests/**/*.js': ['webpack', 'sourcemap']
    },
    webpack: {
      module: webpackConfig[0].module,
      resolve: webpackConfig[0].resolve
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity
  })
}
