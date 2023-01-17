function reverseString(inputString) {
  const workingString = inputString.split(" ");
  let resultString = ""; 
  for (let i = workingString.length-1; i >=0; i--){
    resultString += workingString[i] + " ";
  }
  return resultString;
}

const inputString = "There is a cow in the yard." ;
const x = reverseString(inputString);
console.log(x);