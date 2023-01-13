let data = [1,1,3,5,5];
const sum(x,y) => x+y;
let mean = data.reduce(sum)/data.length;
let deviations = data.map(x => x-mean);

console.log(deviations)