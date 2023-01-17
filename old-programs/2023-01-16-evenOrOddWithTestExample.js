function evenOrOdd(n) {
  for (let i =0 ; i < n + 1; i++) {
    if (i % 2 === 0) {
      console.log(`This ${i} is even.`);
    } else {
      console.log(`This ${i} is odd.`);
    }
  }
}

evenOrOdd(10);


function add(x, y) {
  return x + y;
}

function testAddZeros() {
  const result = add(0,0);
  const expected = 0;
  console.log(result === expected) // true
}

function testAddTwoNums() {
  const result = add(2,3);
  const expected = 5;
  console.log(result === expected) 
}