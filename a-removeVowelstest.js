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


console.log('removeVowels:');
removeAllA()
removeLettersAndSymbols()
removeMixOfNum()
removeLongString()

function removeAllA() {
  const result = removeVowels('abcdacd');
  const expected = 'bcdcd';
  console.log(result === expected);
}

function removeLettersAndSymbols() {
  const result = removeVowels('42khjflj9abi39oufgn2');
  const expected = '42khjflj9b39fgn2';
  console.log(result === expected);
}

function removeMixOfNum() {
  const result = removeVowels('abfdbe8932ab');
  const expected = 'bfdb8932b';
  console.log(result === expected);
}

function removeLongString() {
  const result = removeVowels('heloaeiouagainll');
  const expected = 'hlgnll';
  console.log(result === expected);
}





// function test() {
//   const result = 
//   const expected = 
//   console.log(result === expected);
// }

