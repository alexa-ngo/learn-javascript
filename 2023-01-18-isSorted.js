function isSorted(inputArray){
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] < inputArray[i-1]){
      return false;
    }
  }
  return true;
}

console.log(isSorted([1,3,88,999,1000]));