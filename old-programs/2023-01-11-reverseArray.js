function reverseArray(inputArray) {
  let resultString = "";
  for (let i = inputArray.length -1; i >= 0 ; i--) {
    resultString += inputArray[i];
  }
  return resultString;
}

const inputArray = [1, 2, 3, 4, 5];
const x = reverseArray(inputArray);
console.log(x);