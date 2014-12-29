var _ = require('lodash');

function Judgement(randomNumbers, inputNumbers) {
  this.randomNumbers = randomNumbers;
  this.inputNumbers = inputNumbers;
}

Judgement.prototype.getGuessResult = function() {

  var _this = this;
  var countA = 0;
  var countB = 0;
  _.forEach(_this.randomNumbers, function(randomNumber, index) {
    if (randomNumber === _this.inputNumbers[index]) {
      countA++;
    }
  });
  countB = _.intersection(this.randomNumbers, this.inputNumbers).length - countA;
  
  return countA + 'A' + countB + 'B';
};

module.exports = Judgement;
