function evenOrOdd(inputArray) {
  const result = inputArray.map(item => {
  if (item % 2 === 0) 
    return 1;
  else
    return 0;
  });
  return result;
}

console.log(evenOrOdd([1,2,3]));