function isSorted(inputArray) {
  for(let i = 1; i < inputArray.length; i++) {
    if(inputArray[i-1] < inputArray[i]); {
      return false;
    } 
  }
  return true;
}

console.log(isSorted([5,1]));