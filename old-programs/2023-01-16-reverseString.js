function reverseString(inputString) {
  const workingArray = inputString.split(" ");
  let resultString = "";
  for (let i = workingArray.length-1; i >= 0; i--){
    resultString = resultString + workingArray[i] + " ";
  }
  return resultString;
}

console.log(reverseString("Do or do not, there is not try."));