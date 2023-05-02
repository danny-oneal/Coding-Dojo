/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString(str) {
  //your code here
  let retVal = "";
  // walk backward from the end of str
  for (let i = str.length - 1; i >= 0; i--) {
    retVal += str[i];
  }
  // Spencer's suggestion
  // for (let i = 0; i < str.length; i++) {
  //   // concatenate at the front of the string
  //   retVal = str[i] + retVal;
  // }
  return retVal;
}

//TEST CODE FOR REVERSE
console.log(reverseString(str1), expected1); // Expected: erutaerc
console.log(reverseString(str2), expected2); // Expected: god
console.log(reverseString(str3), expected3); // Expected: olleh
console.log(reverseString(str4), expected4); // Expected: ""
