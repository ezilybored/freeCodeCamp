function repeatStringNumTimes(str, num) {
  // repeat after me
  let newStr = ""
  while (num > 0) {
    newStr += str;
    num --;
  }
  return newStr;
}

repeatStringNumTimes("*", 3);
