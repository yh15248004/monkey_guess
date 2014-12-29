jest.dontMock('../../src/model/print');
jest.dontMock('lodash');

describe('Printer', function() {
  var Printer;
  var printer;

  beforeEach(function() {
    Printer = require('../../src/model/print');
    printer = new Printer();
  });

  describe('.gameBegin()', function() {
    it('should return correct gameBejinText', function() {

      var result = Printer.gameBegin();
      expect(result).toBe('please input 4 number betwen 0 and 9:');
    });
  });

  describe('#getGuessResultText()', function() {

    it('should return correct text for 4A0B', function() {

      var result = printer.getGuessResultText('4A0B', 5);

      expect(result).toBe('congratulations!');
    });

    it('should return correct text for 2A1B', function() {

      var result = printer.getGuessResultText('2A1B', 4);

      expect(result).toBe('Your answer is:2A1B,please continute!');
    });

    it('should return correct text for 1A1B', function() {

      var result = printer.getGuessResultText('1A1B', 5);

      expect(result).toBe('GameOver!!!');
    });

  });

  describe('#getInputMessage()', function() {
    it('should return correct message', function() {

      var result = printer.getInputMessage(['3','1','2','5','6']);
      expect(result).toBe('Please input 4 number without repeat!');
    });

    it('should return correct message', function() {
      var result = printer.getInputMessage(['3','1','1','5']);
      expect(result).toBe('There is repeat in your number!');
    });

    it('should return correct message', function() {
      var result = printer.getInputMessage(['3','1','2','5']);
      expect(result).toBe('');
    });

  });

});
