function repeatChar(inputString) {
  let workingSet = new Set(); 
  for (let i = 0; i < inputString.length; i++) {
    if (workingSet.has(inputString[i])) {
      return inputString[i];
    } else {
      workingSet.add(inputString[i]);
    }
  }
  console.log(workingSet);
}

const inputString = 'allie';
x = repeatChar(inputString);
console.log(x);