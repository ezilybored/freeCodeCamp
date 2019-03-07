function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

getIndexToIns([40, 50, 30, 20, 10], 30);
