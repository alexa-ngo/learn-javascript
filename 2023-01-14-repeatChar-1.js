function repeatChar(inputArray) {
  const workingSet = new Set();
  for (let i = 0; i < inputArray.length; i++) {
    if (workingSet.has(inputArray[i])) {
      return inputArray[i];
    } else {
      workingSet.add(inputArray[i]);
    }
  }
}

const inputArray = 'stella';
const result = repeatChar(inputArray);
console.log(result);