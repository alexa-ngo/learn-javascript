function runningSum(inputArray) {
  let resultArray = [];
  resultArray[0] = inputArray[0];
  for (let i = 1; i < inputArray.length; i++){
    resultArray[i] = resultArray[i-1] + inputArray[i];
  }
  return resultArray;
}

console.log(runningSum([1,2,3,4]));