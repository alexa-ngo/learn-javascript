function reverseArrayTwo(inputArray) {
  for (let i = 0, j = inputArray.length -1; i <= j; i++, j--) {
    const temp = inputArray[i];
    inputArray[i] = inputArray[j];
    inputArray[j] = temp;
  }
  return inputArray;
}

const inputArray = [1,2,5,99];
const z = reverseArrayTwo(inputArray);
console.log(z);
