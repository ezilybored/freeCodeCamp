function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let chop = str.slice(str.length - target.length)
  if (chop == target){
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
