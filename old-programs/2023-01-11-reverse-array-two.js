function reverseArrayTwo(inputArray) {
  for (let i = 0, j = inputArray.length - 1; i < j; i++, j--) {
    const temp = inputArray[i];
    inputArray[i] = inputArray[j];
    inputArray[j] = temp;
  }
  return inputArray;
}

const inputArray = [1,2,3];
const x = reverseArrayTwo(inputArray);
console.log(x);