function isSorted(inputArray) {
  for (let i = 1; i < inputArray.length + 1; i++) {
    if (inputArray[i] < inputArray[i-1]) {
      return false;
    }
  }
  return true;
}

const inputArray = [1,2,3,1,4];
const result = isSorted(inputArray);
console.log(result);