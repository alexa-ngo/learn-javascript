
// function tryIterator(iterable) {
  
//   let iterator = iterable[Symbol.iterator]();
//   for(let result = iterator.next(); !result.done; result = iterator.next()) {
//     console.log(result.value)
//   }
// }
  
// let iterable = [23, 39, 48, 53, 99];
// console.log(tryIterator(iterable));

function printValues(inputArray) {
  let iterator = inputArray[Symbol.iterator](); 
  for(let result = iterator.next(); !result.done; result = iterator.next()){
    console.log(result);
  }
}

let inputArray = [2,4,6,8];
console.log(printValues(inputArray));