function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  // Get the keys to check from the source
  var keys = Object.keys(source);
  console.log(keys);
  // Filter through the collection using a function that takes each item as an argument
  return collection.filter(function(item){
    // Map the keys array applying a function that takes key as an argument
    return keys.map(function(key){
      // Returns any objects in the keys array that has the property of the current key and where the value is the same as the value of the current key
      return item.hasOwnProperty(key) && item[key] === source[key];
      // Reduces the feturned booleans from the map function to a single boolean that only returns true if all checked objects are true.
    }).reduce(function(a, b){
      return a && b;
    })

  })

  // Only change code above this line
  console.log(arr);
  return arr;
}
