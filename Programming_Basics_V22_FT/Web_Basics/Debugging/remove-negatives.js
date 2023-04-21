// Debug the following code that removes negative values from an array

function removeNegatives(arr) {
    var retArr = [];
    for(var i=0; i<=arr.length; i++) {
        if(arr[i] >= 0) {
            retArr.push(arr[i]); 
            //i--;
        }
    }
    return retArr;
}

var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
console.log(result);