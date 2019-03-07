function findLongestWordLength(str) {
  let chop = str.split(" ");
  str = " ";
  for (let s in chop){
    let length = chop[s].length;
    if (length > str.length) {
      str = chop[s];
    };
  }
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
