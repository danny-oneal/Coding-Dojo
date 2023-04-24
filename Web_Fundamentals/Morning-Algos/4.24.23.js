/* 
  Given an array of integers
  return the index where the smallest integer is located

  return -1 if there is no smallest integer (array is empty) 
  since -1 is not a valid index, this indicates it couldn't be found

  If the smallest integer occurs more than once, return the index of the first one.
*/

const nums1 = [5, 2, 3];
const expectedMin1 = 1;

const nums2 = [5, 4, 2, 2, 3];
const expectedMin2 = 2;

const nums3 = [];
const expectedMin3 = -1;

/**
 * Returns the index of the smallest number from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} Index of smallest number or -1 if empty given array.
 */
function indexOfMinVal(nums) {
  // code here
  if (nums.length < 1) return -1;

  let min = nums[0];
  let minIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      minIndex = i;
    }
  }

  return minIndex;
}

console.log(indexOfMinVal(nums1), expectedMin1);
console.log(indexOfMinVal(nums2), expectedMin2);
console.log(indexOfMinVal(nums3), expectedMin3);

/*******************************************************************************/

/* 
  Given an array, reverse it's items in place
  return the array after reversing it

  Do it in place without using any built in methods
*/

const arr1 = [1, 2, 3];
const expected1 = [3, 2, 1];

const arr2 = ["a", "b"];
const expected2 = ["b", "a"];

const arr3 = ["a"];
const expected3 = ["a"];

const arr4 = [];
const expected4 = [];

/**
 * Reverses the given arr in place without built in methods
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @returns {Array<any>} The given arr after being reversed.
 */
function reverseArr(items) {
  // code here
  let left = 0;
  let right = items.length - 1;

  while (left < right) {
    const temp = items[left];
    items[left] = items[right];
    items[right] = temp;
    left++;
    right--;
  }

  return items;
}

console.log(reverseArr(arr1), expected1);
console.log(reverseArr(arr2), expected2);
console.log(reverseArr(arr3), expected3);
console.log(reverseArr(arr4), expected4);
