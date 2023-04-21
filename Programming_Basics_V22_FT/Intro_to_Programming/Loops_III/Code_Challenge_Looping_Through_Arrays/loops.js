// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];

var allArrays = [arr1, arr2, arr3];

for (let i = 0; i < allArrays.length; i++) {
    console.log("array #", i + 1);
    const arr = allArrays[i];
    let sum = 0;
    for(let j = 0; j < arr.length; j++) {
        console.log(arr[j]);
    }


    for(let j = 0; j < arr.length; j++) {
       sum += arr[j];
       console.log(sum, j); 
    }

    
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] > 5) {
            console.log(arr[j]);
        } else {
            arr[j] = "No dice";
        }
    }
}