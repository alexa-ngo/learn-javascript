const inputArray = [2,5,9,17,14];
const resultArray = inputArray.map( item => {
  if (item %2 === 0) {
    return 1;
  } else {
    return 0;
  }
});

console.log(resultArray);