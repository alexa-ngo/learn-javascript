function findNameExists(nameArray, theirName) {
  const result = nameArray.find(item => item === theirName);
  if (result === theirName) {
    return true;
  }
  return false;
}

const nameArray = ['pris', 'shan', 'may', 'janice'];
const theirName = 'alex'
console.log(findNameExists(nameArray, theirName));