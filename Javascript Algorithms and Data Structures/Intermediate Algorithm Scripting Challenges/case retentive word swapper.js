function myReplace(str, before, after) {

  let index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()){
    after = after.charAt(0).toUpperCase(0) + after.slice(1);

  }
  str = str.replace(before, after);

  return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
