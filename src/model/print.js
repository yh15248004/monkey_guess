var _ = require('lodash');
function Printer() {
}

Printer.gameBegin = function() {
  return 'please input 4 number betwen 0 and 9:';
};

Printer.prototype.getGuessResultText = function(guessResult, time) {

  var guessResultText = '';
  if (guessResult === '4A0B' && time <= 5) {
    guessResultText = 'congratulations!';
  } else if (time < 5){
    guessResultText = 'Your answer is:' + guessResult + ',please continute!';
  } else {
    guessResultText = 'GameOver!!!';
  }

  return guessResultText;
};

Printer.prototype.getInputMessage = function(myArray) {
  var message = '';

  if (myArray.length !== 4) {
    message = 'Please input 4 number without repeat!';
  } else if (_.intersection(myArray).length !== 4) {
    message = 'There is repeat in your number!';
  } else {
    message = '';
  }

  return message;
};

module.exports = Printer;
