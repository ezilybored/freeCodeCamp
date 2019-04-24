function palindrome(str) {
  // Good luck!
  let newStr = str.replace(/[^a-zA-Z1-9]/g, "").toLowerCase()
  if (newStr === newStr.split("").reverse().join("")) {
    return true;
  }
  else {
    return false;
  }
}



palindrome("1 eye for of 1 eye.");