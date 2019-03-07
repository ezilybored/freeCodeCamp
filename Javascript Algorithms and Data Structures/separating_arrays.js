function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  while(arr.length) {
    newArr.push(arr.splice(0,size));
}
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2)
