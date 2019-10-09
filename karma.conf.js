// Karma configuration
const path = require('path');

const OUTPUT_DIR = process.env.TEST_UNDECLARED_OUTPUTS_DIR;

module.exports = function(config) {
  config.set({
    plugins: [
      "karma-junit-reporter",
      "karma-coverage-istanbul-instrumenter",
      "karma-coverage-istanbul-reporter"
    ],
    reporters: ['junit', 'coverage-istanbul'],
    junitReporter: {
      outputDir: path.join(OUTPUT_DIR, "junit"),
      xmlVersion: 1
    },
    preprocessors: {
      "**/!(*.spec).js": ["karma-coverage-istanbul-instrumenter"]
    },
    coverageIstanbulInstrumenter: {
      esModules: false,
      produceSourceMap: true
    },
    coverageIstanbulReporter: {
      reports: ['text-summary', 'html', 'lcov'],
      dir: path.join(OUTPUT_DIR, "coverage")
    }
  })
};
