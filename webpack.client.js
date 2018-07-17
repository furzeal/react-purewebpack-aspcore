const path = require('path');

const APP_DIR = path.resolve(__dirname, 'client-app');
const PUBLIC_DIR = path.resolve(__dirname, 'public');

const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
  mode: 'none',
  entry: `${APP_DIR}/client.js`,
  devServer: {
    contentBase: PUBLIC_DIR,
    port: 9000,
    open: true,
  },
  output: {
    path: PUBLIC_DIR,
    filename: 'clientbundle.js',
  },

};

module.exports = merge(baseConfig, config)
