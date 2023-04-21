function greet(name, timeOfDay) {
    if(name === "Count Dooku") {
        console.log("I'm coming for you, Dooku!");
        return;
    }
    console.log("Good " + (timeOfDay ? timeOfDay +  ", " : "day, ") + name);
}

greet("Count Dooku");