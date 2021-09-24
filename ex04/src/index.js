function sumFibonacci(num) {
  if (num === 1) return 1;
  var sum = 0;
  var arr = [1, 1];
  for (var i = 0; i <= num; i++) {
    arr[i + 2] = arr[i] + arr[i + 1];
  }

  var i = 0;
  while (arr[i] <= num) {
    if (arr[i] % 2 == 1) {
      sum = sum + arr[i];
    }
    i++;
  }
  return sum;
}

console.log(sumFibonacci(4));

module.exports = sumFibonacci;
