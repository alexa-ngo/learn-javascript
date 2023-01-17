function removeVowels(inputString) {
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === "a" || inputString[i] === "e" || inputString[i] === "i" || inputString[i] === "o" || inputString[i] === "u") {
      continue;
    } else {
      result = result + inputString[i];
    }
  }
  return result;
}

console.log(removeVowels('abcdefghijkmnopqrstuvwxyz'));