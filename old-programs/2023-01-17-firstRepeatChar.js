function firstRepeatChar(inputString){
  const workingSet = new Set();
  for (i = 0; i < inputString.length; i++) {
    if (workingSet.has(inputString[i])){
      return inputString[i];
    } else {
      workingSet.add(inputString[i]);
    }
  }
  return workingSet;
}

console.log(firstRepeatChar('abcdeffg')) //f)
console.log(firstRepeatChar('zaz')) //z
console.log(firstRepeatChar('pppp')) //p