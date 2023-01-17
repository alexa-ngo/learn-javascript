function averageArray(inputArray) {
  let sum = 0;
  for (let i=0; i < inputArray.length; i++) {
    sum += inputArray[i];
  }
  return sum/inputArray.length;
}

console.log(averageArray([10, 40, 10])); // 20