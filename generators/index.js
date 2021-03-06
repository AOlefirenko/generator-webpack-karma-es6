'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');
var camelcase = require('lodash.camelcase');
var kebabcase = require('lodash.kebabcase');
var trim = require('lodash.trim');
var Promise = require('bluebird');
var exec = Promise.promisify(require('child_process').exec);
var gitConfig = require('git-config');

module.exports = generators.Base.extend({
  initializing: function() {
    this.pkg = require('../package.json');
  },

  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Webpack karma es6 Library Boilerplate') + ' generator!'
    ));

    Promise.all([exec('npm whoami').catch(function(e) {
        console.error('Error getting npm user name: run `npm login`');
        console.error(e);
      })])
      .then(function(result) {
        result = result ? result : {};
        this.username = trim(result[0]);
        this._showPrompts(done);
      }.bind(this));
  },

  _showPrompts: function(done) {
    var config = gitConfig.sync();
    config.user = config.user ? config.user : {};
    var prompts = [{
      type: 'input',
      name: 'user',
      message: 'What is the Github username/organization for this project?',
      default: this.username,
      store: true
    }, {
      type: 'input',
      name: 'repo',
      message: 'What is the repository/project name?',
      default: kebabcase(this.appname)
    }, {
      type: 'input',
      name: 'description',
      message: 'What is a short description for this project?'
    }, {
      type: 'input',
      name: 'author',
      message: 'Who is the author of this project?',
      default: config.user.name + ' <' + config.user.email + '>',
      store: true
    }, {
      type: 'input',
      name: 'variable',
      message: 'What is the name of this project\'s main variable?',
      default: camelcase(this.appname)
    }];

    this.prompt(prompts, function (props) {
      this.user = props.user;
      this.repo = props.repo;
      this.description = props.description;
      this.author = props.author;
      this.variable = props.variable;
      this.year = new Date().getFullYear();
      done();
    }.bind(this));
  },

  writing: {
    app: function() {
      this.template('babelrc', '.babelrc');
      this.template('eslintrc', '.eslintrc');
      this.template('eslintignore', '.eslintignore');
      this.template('editorconfig', '.editorconfig');
      this.template('gitignore', '.gitignore');
      this.template('_package.json', 'package.json');
      this.template('LICENSE', 'LICENSE');
      this.template('README.md', 'README.md');
      mkdirp.sync('src');
      this.template('src', 'src');
      mkdirp.sync('test');
      this.template('test/*.js', 'test');
      mkdirp.sync('webpack');
      this.template('webpack/_webpack.config.base.js', 'webpack/webpack.config.base.js');
      this.template('webpack/_webpack.config.development.js', 'webpack/webpack.config.development.js');
      this.template('webpack/_webpack.config.production.js', 'webpack/webpack.config.production.js');
      mkdirp.sync('karma');
      this.template('karma/_karma.config.base.js', 'karma/karma.config.base.js');
      this.template('karma/_karma.config.development.js', 'karma/karma.config.development.js');
      this.template('karma/_karma.config.production.js', 'karma/karma.config.production.js');
    }
  },

  install: function() {
    this.installDependencies({
      bower: false,
      npm: true,
      skipInstall: this.options['skip-install']
    });
  }
});
