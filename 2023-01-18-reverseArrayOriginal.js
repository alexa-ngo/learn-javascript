function reverseArrayOriginal(inputArray) {
  for(let i=0, j = inputArray.length-1; i<j; i++, j--){
    temp = inputArray[i];
    inputArray[i] = inputArray[j];
    inputArray[j] = temp;
  }
  return inputArray;
}

console.log(reverseArrayOriginal([1,2,4,5]));
