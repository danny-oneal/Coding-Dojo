/* 
  Given a string,
  return a new string with the duplicate characters excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABCabcABCabcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

//bonus
const str5 = "aba";
const expected5 = "ba"; // ab

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
  const result = {};
  for (let i = 0; i < str.length; i++) {
    // create object property with a value of the index
    result[str[i]] = i;
  }

  // return Object.entries(result)
  //   .sort((a, b) => a[1] - b[1])
  //   .map((x) => x[0])
  //   .join("");
  const entries = Object.entries(result);
  const sorted = entries.sort((a, b) => a[1] - b[1]);
  const mapped = sorted.map((x) => x[0]);
  const joined = mapped.join("");

  return joined;
}

console.log(stringDedupe(str1));
console.log(stringDedupe(str2));
console.log(stringDedupe(str3));
console.log(stringDedupe(str4));
console.log(stringDedupe(str5));
