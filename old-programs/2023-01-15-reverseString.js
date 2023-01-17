function reverseWords(inputString) {
  let resultString = ""; 
  const workingString = inputString.split(" ");
  for (let i=workingString.length -1; i >=0; i--) {
    resultString += workingString[i] + " ";
  }
  return resultString;
}


console.log(reverseWords("Do or do not, there is no try."));