function fearNotLetter(str) {
  // Loop through the string
  for (let i = 1; i < str.length; i++){
    // If the current letter minus current letter -1 is not equal to one the gap is bigger than one       // and therefore a skip has happened
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
      // return the missing character by finding the code and converting it back to a string
      return String.fromCharCode(str.charCodeAt(i-1) + 1);
    };
  };
};

console.log(fearNotLetter("abce"));
