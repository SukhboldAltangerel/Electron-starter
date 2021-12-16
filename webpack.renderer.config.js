/* eslint-disable */

const rules = require('./webpack.rules')
const path = require('path')

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
})

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    preferRelative: true,
    alias: {
      'src': path.resolve(__dirname, 'src')
    }
  }
}
