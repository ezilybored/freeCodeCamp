function translatePigLatin(str) {
  let strArr = str.split("");
  let regex = (/[aeiou]/)
  let index = str.indexOf(str.match(regex));
  let start = strArr.slice(0, index);

  if (index == 0) {
    return strArr.join("") + "way";
  } else if (index == -1) {
    return strArr.join("") + "ay"
  } else {
    strArr = strArr.join("").slice(index, str.length) + start.join("") + "ay";
  }

  return strArr;
}

console.log(translatePigLatin("cwtch"));
