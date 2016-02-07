module.exports = function (config) {
    config.set({
        basePath: '.',
        autoWatch: false,
        singleRun: true,
        colors: false,
        frameworks: ['jasmine'],
        browsers:['PhantomJS'],
        files: ['./tests/**/spec.js'],

       // reporters: ['teamcity','progress', 'html'],
        reporters: ['progress', 'html'],
        htmlReporter: {
            outputFile: 'report/units.html',
            pageTitle: 'Unit Tests',
            subPageTitle: 'A sample project description'
        },
        preprocessors: {
           './spec/**/tests.js': ['webpack']
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
    });
};