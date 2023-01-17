function reverseArrayOrig(inputArray) {
  for(let i = 0, j = inputArray.length-1; i < j; i++, j--) {
    const temp = inputArray[i];
    inputArray[i] = inputArray[j];
    inputArray[j] = temp;
  }
  return inputArray;
}

console.log(reverseArrayOrig([1,5,7,889]));