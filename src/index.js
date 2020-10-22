module.exports = function reverse (n) {
  numbersArr = String(n).split('');

  if (numbersArr[0] === '-') {
    numbersArr.shift();
  }
  let reversedNum = Number(numbersArr.reverse().join(''));
  return reversedNum;
}
