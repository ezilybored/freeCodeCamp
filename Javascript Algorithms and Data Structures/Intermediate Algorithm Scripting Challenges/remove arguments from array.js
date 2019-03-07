function destroyer(arr) {
  // Remove all the values
  let argArr = []
  for (let i = 1; i < arguments.length; i++) {
    argArr.push(arguments[i]);
  }
  argArr = argArr.concat(arr).filter(value => !argArr.includes(value));
  return argArr;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);
