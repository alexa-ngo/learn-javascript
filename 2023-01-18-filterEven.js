function filterEven(inputArray){
  const result = inputArray.filter(item => item % 2 === 0);
  return result;
}

console.log(filterEven([1,2,3,5,6,2,0,1,8])); // 2,6,2,0,8