const test1V1 = "0.1";
const test1V2 = "1.1";
const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
const expected6 = 1;

const test7V1 = "1.10";
const test7V2 = "1.100";
const expected7 = -1;

/**
 * Determines which version number is greater or if they are equal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} v1
 * @param {string} v2
 * @returns {number} 1 if v1 greater, -1 if v1 smaller, 0 if equal.
 */
function compareVersionNumbers(v1, v2) {
    let i = 0;
    let j = 0;

    const v1Mod = removePeriodsAndMiddleZeros(v1);
    const v2Mod = removePeriodsAndMiddleZeros(v2);

    while (i < v1Mod.length && j < v2Mod.length) {
        if (v1Mod[i] === ".") i++;
        if (v2Mod[j] === ".") j++;

        const v1ModNum = parseInt(v1Mod[i]);
        const v2ModNum = parseInt(v2Mod[j]);

        if (v1ModNum !== v2ModNum) {
            return v1ModNum > v2ModNum ? 1 : -1;
        }

        i++;
        j++;
    }

    if (i < v1Mod.length) return 1;
    if (j < v2Mod.length) return -1;

    return 0;
}

function removePeriodsAndMiddleZeros(str) {
    const result = [];

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (char === ".") continue;

        // if we see char !== "0", remove previous 0s
        if (char !== "0" && result.length > 0) {
            while (result[result.length - 1] === "0") result.pop();
            result.push(char);
        } else {
            result.push(char);
        }
    }

    return result.join("");
}

console.log(compareVersionNumbers(test1V1, test1V2), expected1);
console.log(compareVersionNumbers(test2V1, test2V2), expected2);
console.log(compareVersionNumbers(test3V1, test3V2), expected3);
console.log(compareVersionNumbers(test4V1, test4V2), expected4);
console.log(compareVersionNumbers(test5V1, test5V2), expected5);
console.log(compareVersionNumbers(test6V1, test6V2), expected6);
console.log(compareVersionNumbers(test7V1, test7V2), expected7);
