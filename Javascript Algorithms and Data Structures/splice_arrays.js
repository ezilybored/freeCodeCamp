function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let arr3 = arr2.slice();
  for (let i = 0; i < arr1.length; i++){
    arr3.splice(n, 0, arr1[i]);
    n++;
  }
  console.log(arr3);
  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
