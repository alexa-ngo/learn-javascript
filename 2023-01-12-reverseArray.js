function reverseArray(inputArray) {
  let resultArray = [];
  for (let i = inputArray.length - 1; i >= 0; i--) {
    resultArray.push(inputArray[i]);
  }
  return resultArray;
}

const inputArray = [4,5,6,7];
const x = reverseArray(inputArray);
console.log(x);