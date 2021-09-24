function myCounter(n) {
  if (n <= 0) {
    return [];
  } else {
    const countArray = myCounter(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

console.log(myCounter(10));

module.exports = myCounter;
