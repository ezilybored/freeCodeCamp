// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (list, bookName) {
  let newArr = [...list];
  newArr.push(bookName);
  return newArr;

  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (list, bookName) {
  let newArr = [...list];

  if (newArr.indexOf(bookName) >= 0) {

    // Removes one item from the array newArr at the index coresponding to the name of the book
    newArr.splice(newArr.indexOf(bookName), 1);

    return newArr;

    // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
console.log(newerBookList);
console.log(newestBookList);
