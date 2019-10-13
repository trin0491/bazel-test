const node = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

module.exports = {
  output: {
    name: "ui",
    format: "umd",
    globals: {
      "lodash-es": "_"
    }
  },
  external: [
    'lodash-es'
  ],
  plugins: [
    node({
      mainFields: ['browser', 'es2015', 'module', 'jsnext:main', 'main'],
    }),
    commonjs(),
  ],
};