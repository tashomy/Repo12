function rangeOfNumbers(startN, endN) {
  if (endN < startN)
    return "The starting number will always be less than or equal to the ending number";
  if (endN == startN) {
    return [endN];
  } else {
    var rangeArray = rangeOfNumbers(startN, endN - 1);
    rangeArray.push(endN);
    return rangeArray;
  }
}

console.log(rangeOfNumbers(3, 10));

module.exports = rangeOfNumbers;
