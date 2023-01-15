function removeVowels(inputString) {
  let newString = "";
  for (let i=0; i < inputString.length; i++) {
    if (inputString[i] === "a" || inputString[i] === "e" || inputString[i] === "i" || inputString[i] === "o" || inputString[i] === "u") {
      continue;
    } else{
      newString += inputString[i];
    }
  }
  return newString;
}

console.log(removeVowels('elephants'));