function isSorted(inputArray) {
  for(let i = 0; i < inputArray.length; i++) 
    if (inputArray[i-1] > inputArray[i]) {
      return false;
    }
  return true;
  }


const inputArray = [1,2,55];
const z = isSorted(inputArray);
console.log(z);