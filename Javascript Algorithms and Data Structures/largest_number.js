function largestOfFour(arr) {
  // You can do this!
  let newArr = [];
  for (let num in arr) {
    let biggest = arr[num][0];
    for (let nums in arr[num]) {
      if (arr[num][nums] > biggest) {
        biggest = arr[num][nums];
      }
    }
    newArr.push(biggest);
  }
  return newArr;
}
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
