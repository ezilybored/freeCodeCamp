function pairElement(str) {

  // Create an object containing all key pair possibilities
  var basePairs = {
    "A": "T",
    "T": "A",
    "G": "C",
    "C": "G",
  }
  // Split up the input string of bases
  var dnaArr = str.split("");

  //Use map() to map each base to a key: value pair from basePairs object
  // The function takes each value as an argument and compares it to the values in basePairs object
  // returning the pair to the array if there is a match
  return dnaArr.map(val => [val, basePairs[val]]);
}

console.log(pairElement("GCG"));
