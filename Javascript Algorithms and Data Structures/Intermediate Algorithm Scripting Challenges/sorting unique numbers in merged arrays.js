function uniteUnique(arr) {
  let sortedArr = []
  let i = 0;
  // Concatenates the arguments onto the sortedArr array
  while(arguments[i]) {
    sortedArr = sortedArr.concat(arguments[i]);
    i++;
  }

  // Use filter to remove any duplicates from the array. Function takes two arguments
  // The element value is given by val and the index of the current element given by position
  sortedArr = sortedArr.filter(function(val, position) {
     console.log(val);
     console.log(sortedArr.indexOf(val))
     console.log(position);
    // indexOf(val) returns the first index to contain this value. If this is not equal to the
    // position then it will return false
    /* E.g. the first 1 has a val =1, sortedArr.indexOf(val) = 0 and position =0
            the second 1 has a val =1, sortedArr.indexOf(val) = 0 and position =5
            This is because the first returned indexOf(val) is still 0
            Therefore the second 1 is removed
    */
    return sortedArr.indexOf(val) == position;
  })

  return sortedArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*

let sortedArr = []

  // Loops through arguments
  for (let i = 0; i < arguments.length; i++) {
    let arg = arguments[i];

    // Loops through indices in each argument
    for (let j = 0; j < arg.length; j++ ) {
      let index = arg[j];

      // Check to see if this value is in the array already
      if (sortedArr.indexOf(index) < 0) {
        sortedArr.push(index);
      }
    }
  }
  return sortedArr

  */
