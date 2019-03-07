
function findLongestWordLength(str) {

  return str.split(" ").reduce(function(a, b){return Math.max(a, b.length)}, 0)
  // reduce function where a is the accumulator
  // b is the current value.
  // Math.max(a, b.length) compares the accumulator with the length of the   current value

}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
