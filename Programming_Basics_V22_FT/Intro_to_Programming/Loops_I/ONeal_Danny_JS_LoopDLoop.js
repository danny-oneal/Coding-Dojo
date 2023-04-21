/**
 * 1. We need a loop to keep track of the number of miles ran.
 * 2. The starting point of the loop is 0.
 * 3. The loop should stop at 6.
 * 4. The loop will know when to stop when a condition is met.
 * 5. The loop control variable increments eatch iteration.
 * 6. We need a variable to track if the treadmill is on, the speed, and a loop control variable.
 */

var treadmillOn = false;
var speed = 0.0;

for(var i = 0; i <= 6 && treadmillOn; i++) {
    if(i >= 2 && i % 2 == 0) {
        console.log("dispense candy");
    }
}

for(var i = 0; i <= 6 && treadmillOn && speed > 5.5; i++) {
    if(i >= 2 && i % 2 == 0) {
        console.log("dispense candy");
    }
}