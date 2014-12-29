var readline = require('readline');
var _ = require('lodash');
var Printer = require('./model/print');
var RandomNumber = require('./model/random-number');
var Judgement = require('./model/judgement');
function guessNumber() {

  console.log(Printer.gameBegin());
  var time = 0;

  var randomNumbers = RandomNumber.getRandomNumbers();
  //console.log(randomNumbers);

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', function(inputs) {
    time += 1;
    var judgement = new Judgement(randomNumbers, _.toArray(inputs));
    var judgeResult = judgement.getGuessResult();
    var printer = new Printer();
    if (printer.getGuessResultText(judgeResult, time) === 'congratulations!' || time === 5) {
      console.log(printer.getGuessResultText(judgeResult, time));
      rl.close();
    } else {
      console.log(printer.getGuessResultText(judgeResult, time));
    }
  });

}

guessNumber();
module.exports = Printer;
