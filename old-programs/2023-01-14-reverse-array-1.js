function reverseArray(inputArray) {
  const resultArray = [];
  for (let i = inputArray.length -1; i >=0; i--) {
    resultArray.push(inputArray[i]);
  }
  return resultArray;
}

const inputArray = [1,4,5];
const result = reverseArray(inputArray);
console.log(result);