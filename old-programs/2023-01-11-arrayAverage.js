function arrayAverage(inputArray) {
  let sum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    sum += inputArray[i];
  }
  return sum / inputArray.length;
}

const inputArray = [3, 17, 10];
const x = arrayAverage(inputArray);
console.log(x);