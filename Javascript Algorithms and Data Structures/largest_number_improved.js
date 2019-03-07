
function largestOfFour(arr) {
  // Apply the map function to the array passing in the current value as group
  return arr.map(function(group){
  // Apply the reduce function to this value.
  // a is the accumulator, in this case the current highest value
  // b is the current value in this array having the function applied
  // i.e. being compared to the accumulator a
    return group.reduce(function(a, b){
  // This then returns the largest out of and b and stores it in a
      return (a > b) ? a : b
    })
  })
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
