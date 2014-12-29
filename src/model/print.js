function Printer() {
}

Printer.gameBejin = function() {
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

module.exports = Printer;
