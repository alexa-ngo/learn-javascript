function isSorted(inputArray) { 
  for (i = 0; i < inputArray.length -1; i++) {
    let j = 0; 
    if (inputArray[i] > inputArray[j]) {
      return false;
    } else {
      j++; 
    }
  return true;
  }
}

const inputArray = [1,2,3];
const x = isSorted(inputArray);
console.log(x);
