function zeroOrOne(inputArray) {
  const result = inputArray.map(item => {if(item % 2 ===0) return 1; else return 0;});
  return result;
}

console.log(zeroOrOne([1,12,88,45,799,0])) //0,1,1,0,0,1