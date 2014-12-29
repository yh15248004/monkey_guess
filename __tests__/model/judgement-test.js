jest.dontMock('lodash');
jest.dontMock('../../src/model/judgement');

describe('Judgement', function() {

  describe('#getGuessResult()', function() {

    it('should return correct string', function() {

      var Judgement = require('../../src/model/judgement');
      var judgement = new Judgement([0,5,7,3], [0,4,3,7]);
      var result = judgement.getGuessResult();

      expect(result).toBe('1A2B');
    });

  });

});
