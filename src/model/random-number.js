var _ = require('lodash');

function RandomNumber() {
}
RandomNumber.getRandomNumbers = function() {

  var randoms = [];
  var temp = 0;

  while(randoms.length < 4) {
    temp  = _.random(0,9).toString();
    if (!_.contains(randoms, temp)) {
      randoms.push(temp);
    }
  }

  return randoms;
};
module.exports = RandomNumber;
