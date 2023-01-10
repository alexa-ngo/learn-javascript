function removeVowels(inputString) {
    result = inputString.replace(/[aeiou]/g, "");
    return result;
}

inputString = "i bought teal eggs"
x = removeVowels(inputString);
console.log(x)