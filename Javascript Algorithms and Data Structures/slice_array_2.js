function nonMutatingSplice(cities) {
  // Add your code below this line
  //Slices from first item up to before the fourth. So removes the first three
  return cities.slice(0, 3);

  // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));
