function firstRepeat(inputString) {
  const resultSet = new Set();
  for (let i = 0; i < inputString.length; i++) {
    if (resultSet.has(inputString[i])) {
      return inputString[i];
    } else {
      resultSet.add(inputString[i]);
    }
  }
}

console.log(firstRepeat('abcdezz'))