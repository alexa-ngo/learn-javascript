function findName(nameArray, theirName) {
  const result = nameArray.find(nameArray => nameArray === theirName) 
    if (result === theirName) {
      return true;
    }
  return false;
  }


  const nameArray = ["pris", "shir", "may"];
  const theirName = "alexa";
  const result = findName(nameArray, theirName);
  console.log(result);