function zeroOrOne(inputArray) {
  const result = inputArray.map(item => { 
    if(item % 2 === 0) 
    return 1; 
    else 
    return 0;});
  return result; 
}

console.log(zeroOrOne([1,2,4,5,6,7,8888,1,2])) // 0,1,1,0,1,0,1,0,1