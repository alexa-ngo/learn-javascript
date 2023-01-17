function findName(nameArray, theirName) {
  const result = nameArray.find(nameArray => nameArray === theirName)
  return result
}

const nameArray = ['pris', 'shan', 'may'];
const theirName = 'shan';
const z = findName(nameArray, theirName);
console.log(z);