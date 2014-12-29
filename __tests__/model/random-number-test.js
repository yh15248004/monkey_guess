jest.dontMock('lodash');
jest.dontMock('../../src/model/random-number');

describe('RandomNumber', function() {
  describe('.getRandomNumbers()', function() {

    it('should return correct randnumbers', function() {
      var RandomNumber = require('../../src/model/random-number');
      var _ = require('lodash');

      var randoms = RandomNumber.getRandomNumbers();
      var diffrentNumber = _.difference(['0','1','2','3','4','5','6','7','8','9'], randoms);

      expect(diffrentNumber.length).toBe(6);
      expect(randoms.length).toBe(4);
    });

  });
});
