function nameExistBool(nameArray, theirName) {
  const result = nameArray.find(nameArray => nameArray === theirName)
  if(result === theirName) {
    return true;
  }
  return false;
}

console.log(nameExistBool(['Pris', 'Shan', 'May'], 'Shan'))


const result = nameArray.find(nameArray => nameArray === theirName) 
