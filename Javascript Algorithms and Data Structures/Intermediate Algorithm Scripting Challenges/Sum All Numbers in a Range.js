function sumAll(arr) {

  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let newArr = [];

  for (let i = min; i <= max; i++) {
    newArr.push(i);
  }
  return newArr.reduce((a,b) => a + b);
}

console.log(sumAll([1, 4]));
