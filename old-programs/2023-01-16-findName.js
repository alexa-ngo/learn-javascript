function findName(nameArray, thisName) {
  const result = nameArray.find(nameArray => nameArray === thisName)
    if (result === thisName) {
      return true;
    }
  return false;
}

const nameArray = ["shan", "pris", "may"];
const thisName = "alexa";
console.log(findName(nameArray, thisName));