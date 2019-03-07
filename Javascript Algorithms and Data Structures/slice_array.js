function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line
  // Creates a new array
  var newArray = []
  // Slices the input array to the new array starting at beginSlice and ending at endSlice
  return newArray = anim.slice(beginSlice, endSlice)

  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
