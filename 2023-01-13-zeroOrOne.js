const inputArray = [9,10,2,1];
const newArray = inputArray.map(item => {
  if (item % 2 === 0) 
    return 1;
  else
    return 0;
});

console.log(newArray);