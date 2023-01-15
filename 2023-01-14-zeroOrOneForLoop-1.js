function zeroOrOne(inputArray) {
  const resultArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % 2 === 0) {
      resultArray.push(1);
    } else {
      resultArray.push(0);
    }
  }
  return resultArray;
}

const inputArray = [12,4,5,67];
const result = zeroOrOne(inputArray);
console.log(result);