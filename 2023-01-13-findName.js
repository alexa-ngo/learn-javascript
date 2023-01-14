function findNameArray(nameArray, theirName) {
  const x = nameArray.find(nameArray => nameArray === theirName)
  return x
}

const nameArray = ['Shan', 'Pris', 'May'];
const theirName = 'Pris'
const z = findNameArray(nameArray, theirName);
console.log(z)