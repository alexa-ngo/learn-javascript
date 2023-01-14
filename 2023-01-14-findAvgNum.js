function findAvgNum(inputArray) {
  let sum = 0; 
  for (let i = 0; i < inputArray.length; i++) {
    sum += inputArray[i];
  }
  return sum /inputArray.length;
}

const inputArray = [3, 9, 18];
const z = findAvgNum(inputArray);
console.log(z);