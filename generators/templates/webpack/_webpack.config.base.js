'use strict';

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'test-project',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader?presets[]=es2015'], exclude: /node_modules/ }
    ]
  }
};
