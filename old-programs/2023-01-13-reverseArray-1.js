function reverseArray(inputArray) {
  let resultArray = [];
  for(let i = inputArray.length - 1; i >=0; i--) {
    resultArray.push(inputArray[i]);
  }
  return resultArray;
}

const inputArray = [2,5,7];
const z = reverseArray(inputArray);
console.log(z);