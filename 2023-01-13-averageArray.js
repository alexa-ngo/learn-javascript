function averageArray(inputArray) {
  let sum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    sum += inputArray[i];
  }
  return sum / inputArray.length;
}

const inputArray = [1,2,3]
const z = averageArray(inputArray)
console.log(z);


