function convertHTML(str) {

  // Create an object of characters and HTML entities to check
  let pairings = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    '\'':"&apos;"
  };

  // Split the string into characters
  let splitStr = str.split("");

  //Use map() to map each character to a key: value pair from pairings object
  // The function takes each value as an argument and compares it to the values in pairings object
  // returning the pair to the array if there is a match
  return splitStr.map(val => pairings[val] || val).join("");
};

console.log(convertHTML("Dolce & Gabbana"));

// Similar to the code used to solve the DNA pairing problem
