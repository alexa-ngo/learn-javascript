function evenOrOdd(inputInteger) {

    for (let element = 0; element <= inputInteger; element++) {
        if (element % 2 === 0) {
            console.log("This " + element + " is even.");
        } else {
            console.log("This " + element + " is odd.");
        }
    }
}

evenOrOdd(10);
