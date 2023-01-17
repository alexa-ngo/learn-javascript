function zeroOrOne(inputArray){
  const result = inputArray.map( item => {
  if (item %2 === 0) {
    return 1;
  } else {
    return 0;
  }})
  return result;
}

console.log(zeroOrOne([1,2,8,10,3])); // 0,1,1,1,0