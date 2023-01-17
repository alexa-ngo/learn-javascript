function setRepeatChar(inputString) {
  const newSet = new Set();
  for (let i = 0; i < inputString.length; i++) {
    if (newSet.has(inputString[i])){
      return inputString[i];
    } else {
      newSet.add(inputString[i]);
    }
  }
}

console.log(setRepeatChar('abcdefgggghi'))