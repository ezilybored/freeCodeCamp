function diffArray(arr1, arr2) {

  var newArr = arr1.concat(arr2);
  newArr = newArr.filter(value => !arr1.includes(value) || !arr2.includes(value));
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
