const loaderUtils = require('loader-utils')
const chalk = require('chalk')

module.exports = function traceLoader(input) {
  const option = loaderUtils.getOptions(this) || {}
  const prefix = option['prefix'].toString() || ''
  console.log(chalk.green(prefix) + input)
  return input;
};