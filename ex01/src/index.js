function myRecursion(arr, n) {
  if (n == 0) {
    return 0;
  } else {
    return myRecursion(arr, n - 1) + arr[n - 1];
  }
}

var pom3 = [1, 2, 3, 4, 5, 6];

console.log(myRecursion(pom3, 5));

module.exports = myRecursion;
