function findName(nameArray, theirName) {
  const nameResult = nameArray.find(nameArray => nameArray === theirName)
  if (nameResult === theirName) {
    return true;
  } else {
    return false;
  }
}