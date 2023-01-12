function removeVowels(inputString) {
  let resultString = '';
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === 'a' || inputString[i] === 'e' || inputString[i] === 'o' || inputString[i] === 'u') {
      continue;
    }
    resultString += inputString[i];
  }
  return resultString;
}

const inputString = 'abecouk';
const x = removeVowels(inputString);
console.log(x);