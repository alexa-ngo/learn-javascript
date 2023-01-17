function zeroOrOneForLoop(inputArray) {
  let resultArray = []; 
  for (let i = 0; i < inputArray.length; i++) {
    if (i % 2 === 0) {
      resultArray.push(1);
    } else {
      resultArray.push(0);
    }
  }
  return resultArray;
}

const inputArray = [12, 7, 9, 8, 1];
const result = zeroOrOneForLoop(inputArray);
console.log(result);