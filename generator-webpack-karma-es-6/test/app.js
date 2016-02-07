'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-webpack-karma-es6:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators'))
      .withOptions({someOption: true})
      .withPrompts({someAnswer: true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json'
    ]);
  });
});
