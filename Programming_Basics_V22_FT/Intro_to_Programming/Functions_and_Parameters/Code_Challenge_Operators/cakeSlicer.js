function howMuchLeftOverCake(numberOfPieces, numberOfPeople) {
    var leftOvers = numberOfPieces % numberOfPeople;

    if(leftOvers === 0) {
        console.log("No leftovers for you!");
    } else if(leftOvers <= 2) {
        console.log("You have some leftovers");
    } else if(leftOvers <= 5) {
        console.log("You have leftovers to share");
    } else {
        console.log("Hold another party!");
    }
}

howMuchLeftOverCake(20, 11);