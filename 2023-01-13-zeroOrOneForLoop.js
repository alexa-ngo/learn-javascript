function zeroOrOne(inputArray) {
  let resultArray = [];
  for(let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % 2 === 0) {
      resultArray.push(1);
    } else {
      resultArray.push(0);
    }
  }
  return resultArray;
}

const inputArray = [ 4, 9, 10, 11];
const z = zeroOrOne(inputArray);
console.log(z);