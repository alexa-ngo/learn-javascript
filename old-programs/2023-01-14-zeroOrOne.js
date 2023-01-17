const inputArray = [2, 7, 1, 18];
const newArray = inputArray.map(item => {
  if (item % 2 === 0)
    return 1;
  else
    return 0;    
});

console.log(newArray);