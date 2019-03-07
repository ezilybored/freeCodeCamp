function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length <= num) {
    return str;
  }
  var newStr = str.slice(0, num) + "...";
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
