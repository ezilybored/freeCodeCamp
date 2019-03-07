function titleCase(str) {
  let capString = str.split(" ");
  let capArray = []
  for (var word in capString) {
    var lower = capString[word].toLowerCase()
    var upper = lower.charAt(0).toUpperCase() + lower.slice(1);
    capArray[word] = upper;
  }
  return capArray.join(" ");
}

titleCase("sHoRt AnD sToUt");
