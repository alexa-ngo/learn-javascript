function reverseArray(inputArray) {
  const resultArray = [];
  for(let i = inputArray.length -1; i >= 0; i--) {
    resultArray.push(inputArray[i]);
  }
  return resultArray;
}

console.log(reverseArray([1,2,3]));