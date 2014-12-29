var readline = require('readline');
var _ = require('lodash');
var Printer = require('./model/print');
var RandomNumber = require('./model/random-number');
var Judgement = require('./model/judgement');
function guessNumber() {

  console.log(Printer.gameBejin());
  var time = 0;

  var randomNumbers = RandomNumber.getRandomNumbers();
  console.log(randomNumbers);

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', function(inputs) {
    time += 1;
    var judgement = new Judgement(randomNumbers, _.toArray(inputs));
    console.log(_.toArray(inputs) + '-----');
    var judgeResult = judgement.getGuessResult();
    console.log(judgeResult);
    var printer = new Printer();
    if (printer.getGuessResultText(judgeResult, time) === 'congratulations!' || time === 5) {
      console.log(printer.getGuessResultText(judgeResult, time));
      rl.close();
    } else {
      console.log(printer.getGuessResultText(judgeResult, time));
    }
  });

  // for (var i = 0; i < 6; i++) {
  //
  //   var inputNumbers = [];
  //   var judgement = new Judgement(randomNumbers, inputNumbers);
  //   var printer = new Printer();
  //   if (printer.getGuessResultText(judgement, i) === 'congratulations!') {
  //     process.stdout.write(printer.getGuessResultText(judgement, i));
  //     break;
  //   } else {
  //     process.stdout.write(printer.getGuessResultText(judgement, i));
  //   }
  //
  // }
}
guessNumber();
