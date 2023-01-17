function zeroOrOneForLoop(inputArray) {
  const resultArray = [];
  for(let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] %2 === 0) {
      resultArray.push(1);
    } else {
      resultArray.push(0);
    }
  }
  return resultArray;
}

console.log(zeroOrOneForLoop([]));

