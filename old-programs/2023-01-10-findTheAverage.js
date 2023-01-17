function findTheAverage(inputArray) {
    let sum = 0; 
    for(let element of inputArray) {
        sum += element;
    }
return (sum/(inputArray.length));
}

inputArray = [2,6,12,0]
x = findTheAverage(inputArray);
console.log(x);        
