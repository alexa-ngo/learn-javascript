function findName(nameArray, theirName) {
  const result = nameArray.find(nameArray => nameArray === theirName); {
    if (result === theirName)
      return true;
    }
  return false;
  }

const nameArray = ['pris', 'shan', 'may'];
const theirName = 'may';
const z = findName(nameArray, theirName);
console.log(z);