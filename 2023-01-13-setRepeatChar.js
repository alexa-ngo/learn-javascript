function setRepeatChar(inputString) {
  let workingSet = new Set();
  for (let i = 0; i < inputString.length; i++) {
    if (workingSet.has(inputString[i])) {
      return inputString[i];
    } else {
      workingSet.add(inputString[i]);
    }
  }
}

const inputString = 'trees';
const z = setRepeatChar(inputString);
console.log(z);