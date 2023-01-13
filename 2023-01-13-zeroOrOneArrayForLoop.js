function zeroOrOneArrayForLoop(inputArray) {
  let resultArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % 2 === 0) {
      resultArray.push(1);
    } else {
      resultArray.push(0); 
    }
  }
  return resultArray;
}

const inputArray = [2,1,4,9,0];
const z = zeroOrOneArrayForLoop(inputArray);
console.log(z);