var path = require('path');

var ROOT = path.resolve(__dirname, '.');
var SRC = path.resolve(ROOT, 'app.js');
var DEST = path.resolve(ROOT, 'build');

module.exports = {
  entry: SRC,
  output: {
    path: DEST,
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: ROOT,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    port: 9090,
    proxy: {
      '/*': {
        target: 'http://localhost:8080',
        secure: false,
        prependPath: false
      }
    },
    publicPath: 'http://localhost:9090/build/'
  }
};
