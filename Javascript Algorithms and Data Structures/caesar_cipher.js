function rot13(str) {
  let convertStr = [];

  let regex = /[A-Z]/;

  str = str.split("");

  for (let c in str) {
    if (regex.test(str[c])) {
      convertStr.push(((str[c].charCodeAt() - 65 + 13) % 26) + 65);
    } else {
      convertStr.push(str[c].charCodeAt());
    }
  }

  str = String.fromCharCode.apply(String, convertStr);

  return str;
}

// Change the inputs below to test

console.log(rot13("SERR PBQR PNZC"));
