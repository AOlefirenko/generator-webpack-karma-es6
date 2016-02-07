import func from '../src/index'


var testData = [
  {group:'problem',title:"some problem"}
];

describe('demo', function () {

    it('can transform list', function () {
        var result = func(testData)
        expect(result[0].key).toBe('problem');
        expect(result[0].items.length).toBe(1);
    });

});
