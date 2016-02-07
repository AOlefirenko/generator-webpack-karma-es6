'use strict';

module.exports = {
    basePath: '.',
    autoWatch: false,
    singleRun: true,
    colors: false,
    frameworks: ['jasmine'],
    browsers:['PhantomJS'],
    files: ['./test/**/*.spec.js'],
    preprocessors: {
       './test/**/*.spec.js': ['webpack']
    },
    webpack: {
       module: {
         loaders: [
           {
             test: /\.js?$/,
             exclude: /(node_modules)/,
             loader: 'babel?optional[]=runtime'
           }
         ]
       }
    },
    webpackMiddleware: { noInfo: true }
}
