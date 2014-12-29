jest.dontMock('../../src/model/print');

describe('Printer', function() {

  describe('.gameBegin()', function() {
    it('should return correct gameBejinText', function() {
      var Printer = require('../../src/model/print');

      var result = Printer.gameBegin();
      expect(result).toBe('please input 4 number betwen 0 and 9:');
    });
  });

  describe('#getGuessResultText()', function() {

    it('should return correct text for 4A0B', function() {
      var Printer = require('../../src/model/print');
      var printer = new Printer();

      var result = printer.getGuessResultText('4A0B', 5);

      expect(result).toBe('congratulations!');
    });

    it('should return correct text for 2A1B', function() {
      var Printer = require('../../src/model/print');
      var printer = new Printer();

      var result = printer.getGuessResultText('2A1B', 4);

      expect(result).toBe('Your answer is:2A1B,please continute!');
    });

    it('should return correct text for 1A1B', function() {
      var Printer = require('../../src/model/print');
      var printer = new Printer();

      var result = printer.getGuessResultText('1A1B', 5);

      expect(result).toBe('GameOver!!!');
    });


  });

});
