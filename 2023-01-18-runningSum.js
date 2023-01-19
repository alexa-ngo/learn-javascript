function runningSum(inputArray) {
  const resultArray = [];
  resultArray[0] = inputArray[0];
  for (let i = 1; i<inputArray.length; i++) {
    resultArray[i] = inputArray[i] + resultArray[i-1];
  }
  return resultArray;
}

console.log(runningSum([1,20,30,33,100])); // 1, 21, 51, 84, 184