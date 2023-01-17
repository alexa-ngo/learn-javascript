function isSorted(inputArray) {
  if (inputArray.length === 0) {
    return false; 
  }
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] < inputArray[i -1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([-99, -43, -22, -12, -8, -4, -1]));