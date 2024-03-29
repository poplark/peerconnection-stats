// Karma configuration
// Generated on Mon May 18 2020 13:51:18 GMT+0800 (GMT+08:00)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'jasmine',
      'karma-typescript',
    ],


    // list of files / patterns to load in the browser
    files: [{
      pattern: 'src/**/*.ts'
    }, {
      pattern: 'test/**/*.ts'
    }],


    // list of files / patterns to exclude
    exclude: [
      'node_modules',
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.ts': ['karma-typescript'],
    },

    karmaTypescriptConfig: {
      compilerOptions: {
        target: "es2015",
        lib: ["es2015", "es2016", "es2017", "dom"]
      },
      bundlerOptions: {
        transforms: [require('karma-typescript-es6-transform')()],
        constants: {
          __VERSION__: false
        }
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // use karam-edge-launcher, not karma-edgium-launcher
    // browsers: ['Chrome', 'Firefox', 'Safari', 'Edge'],
    // browsers: ['ChromeHeadless', 'FirefoxHeadless', 'Safari'],
    browsers: ['ChromeHeadless', 'FirefoxHeadless'],

    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222',
          '--no-sandbox'
        ]
      },
      FirefoxHeadless: {
        base: 'Firefox',
        flags: ['-headless'],
      },
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: 2,

    plugins: [
      'karma-jasmine',
      'karma-typescript',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      // 'karma-safari-launcher',
      // 'karma-edge-launcher'
    ]
  })
}
