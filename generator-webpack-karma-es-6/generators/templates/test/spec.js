import func from '../src/index'

var Promise = require('es6-promise').Promise;

var testData = [
  {group:'problem',title:"some problem"}
];

describe('crud', function () {

    it('can query ideas', function () {
        var result = func(testData)
        expect(result[0].key).toBe('problem');
        expect(result[0].items.length).toBe(1);
    });

});
