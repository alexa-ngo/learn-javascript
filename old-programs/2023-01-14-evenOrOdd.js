function evenOrOdd(n) {
  for (let i= 0; i < n +1; i++) {
    if (i% 2 === 0) {
      console.log(`This ${i} is even.`);
    } else {
      console.log(`This ${i} is odd.`);
    }
  }
}

evenOrOdd(5);
