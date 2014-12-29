var readline = require('readline');
var _ = require('lodash');
var Printer = require('./model/print');
var RandomNumber = require('./model/random-number');
var Judgement = require('./model/judgement');

function guessNumber() {

  console.log(Printer.gameBegin());
  var time = 6;

  var randomNumbers = RandomNumber.getRandomNumbers();
  console.log(randomNumbers);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', function(inputs) {

    var printer = new Printer();

    if (printer.getInputMessage(_.toArray(inputs)) !== '') {
      console.log(printer.getInputMessage(_.toArray(inputs)));
      return;
    }

    time -= 1;
    var judgement = new Judgement(randomNumbers, _.toArray(inputs));
    var judgeResult = judgement.getGuessResult();

    if (printer.getGuessResultText(judgeResult, time) === 'congratulations!' || time === 0) {
      console.log(printer.getGuessResultText(judgeResult, time));
      rl.close();
    } else {
      console.log(printer.getGuessResultText(judgeResult, time));
    }
  });

}

guessNumber();
exports.guessNumber = guessNumber;
