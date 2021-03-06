// Karma configuration

const webpackConfig = require('./webpack.config')({ mode: 'test' });

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'test/*-test.js', watched: false },
      { pattern: 'test/**/*-test.js', watched: false },
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/*-test.js': ['webpack', 'sourcemap'],
      'test/**/*-test.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      devtool: webpackConfig.devtool,
      plugins: webpackConfig.plugins,
      module: {
        rules: webpackConfig.module.rules,
      },
      node: webpackConfig.node,
      performance: false,
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: [ 'progress', 'coverage' ],
    reporters: [ 'spec', 'coverage' ],

    // web server port
    // port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeCanary'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // client: {
    //   mocha: {
    //     timeout: 5000,
    //   },
    // },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only',
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
    },
  });
};
