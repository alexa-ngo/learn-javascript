function removeVowels(inputString) {
  let resultString = "";
  for(let i=0; i< inputString.length; i++) {
    if(inputString[i] === "a" || inputString[i] === "e" || inputString[i] === "i" || inputString[i] === "o" || inputString[i] === "u"){
      continue;
    } else {
      resultString += inputString[i];
    }
  }
  return resultString;
}

console.log(removeVowels('heloaeiouagainll'));