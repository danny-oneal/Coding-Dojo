function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


function getReward() {
    var rewards = ["latte", "hot chocolate", "ice cream"];
    var randomRewards = ["ice cream", "cookies", "candy", "hot chocolate", "tea", "cake"];
    var hour = new Date().getHours();

    if (hour < 10) {
        return rewards[0];
    } else if (hour >= 15 && hour < 18) {
        if (hour % 2 === 0) {
            return randomRewards[getRandomIntInclusive(0, 2)]
        } else {
            return randomRewards[getRandomIntInclusive(3, 5)]
        }
    } else if (hour >= 10 && hour < 16) {
        return rewards[1];
    } else if (hour >= 16 && hour < 22) {
        return rewards[2];
    }
}

console.log(getReward());