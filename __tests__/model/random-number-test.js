jest.dontMock('lodash');
jest.dontMock('../../src/model/random-number');

describe('RandomNumber', function() {
  describe('.getRandomNumbers()', function() {

    it('should return correct randnumbers', function() {
      var RandomNumber = require('../../src/model/random-number');
      var _ = require('lodash');

      var randoms = RandomNumber.getRandomNumbers();
      var diffrentNumber = _.difference(_.range(0, 10), randoms);
      
      expect(diffrentNumber.length).toBe(6);
      expect(randoms.length).toBe(4);
    });

  });
});
