function popFront(arr) {
    var front = arr[0];
    
    for(var i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr.pop();

    return front;
}

var testArr = [5,93,22,4];
console.log(popFront(testArr));
console.log(testArr);
