// Karma configuration
const path = require('path');

const OUTPUT_DIR = process.env.TEST_UNDECLARED_OUTPUTS_DIR;

module.exports = function(config) {
  config.set({
    reporters: ['junit'],
    junitReporter: {
      outputDir: path.join(OUTPUT_DIR, "reports"),
      xmlVersion: 1
    }

    // reporters: ['coverage-istanbul'],
    // preprocessors: {
    //   "**/a.js": ["karma-coverage-istanbul-instrumenter", "sourcemap"]
    // },
    // coverageIstanbulInstrumenter: {
    //   esModules: false,
    //   produceSourceMap: false,
    //   preserveComments: true,
    // },
    // coverageIstanbulReporter: {
    //   reports: ['text-summary', 'html'],
    //   dir: path.join(OUTPUT_DIR, "reports"),
    //   verbose: false
    // }
  })
};
