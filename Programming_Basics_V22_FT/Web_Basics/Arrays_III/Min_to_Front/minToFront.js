function minToFront(arr) {
    var returnArr = [];
    var min = Number.MAX_VALUE; // guarantees the first value seen sets the min
    var minIndex = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }

    if (minIndex !== 0) { // check to see if min is already at the front
        returnArr[0] = arr[minIndex];
        for(var i = 0; i < arr.length; i++) {
            if(i === minIndex) continue;

            returnArr.push(arr[i]);
        }
    }

    return returnArr;
}

console.log(minToFront([5,93,22,4]));