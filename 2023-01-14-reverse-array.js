function reverseArray(inputArray) {
  let resultArray = [];
  for (let i = inputArray.length -1; i >=0; i--) {
    resultArray += inputArray[i];
  }
  return resultArray;
}

const inputArray = [3, 5, 9, 1];
const z = reverseArray(inputArray);
console.log(z);