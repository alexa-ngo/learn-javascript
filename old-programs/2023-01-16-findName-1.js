function findNames(nameArray, theirName) {
  const result = nameArray.find(nameArray => nameArray === theirName)
  if (result === theirName) {
    return true;
  } else {
    return false;
  }
}

const nameArray = ['pris','shir', 'may'];
const theirName = 'alexa';
console.log(findNames(nameArray, theirName));