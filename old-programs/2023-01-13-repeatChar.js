function repeatChar(inputString) {
  const workingSet = new Set();
  for (let i = 0; i < inputString.length; i++) {
    if (workingSet.has(inputString[i])) {
      return inputString[i];
    } else {
      workingSet.add(inputString[i]);
    }
  }
}

const inputString = 'trees';
const z = repeatChar(inputString);
console.log(z);