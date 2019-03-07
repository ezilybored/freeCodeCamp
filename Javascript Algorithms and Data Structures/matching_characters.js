function mutation(arr) {
  let array1 = arr[1].toLowerCase();
  let array2 = arr[0].toLowerCase();

  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) < 0)
      return false;
    }
    return true;
}

mutation(["hello", "Hello"]);
