/* 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.

Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times, find a pair of two songs
where the song pair ends 30 seconds before the bus ride ends.

return an array of the song indexes or [-1, -1] if no pair is found.

If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/

const busDuration1 = 300;
const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
const expected1 = [4, 6]; // 210, 60
/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const expected2 = [3, 6]; // 230, 40
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const expected3 = [-1, -1]; // not found.

/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {Array<number>} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no pair is found.
 *    If there were multiple solutions, the one with the longest song should be used.
 */
// function musicRuntime(busDuration, songDurations) {
//     songDurations.sort((a, b) => b - a);

//     let i = 0;
//     let j = 1;
//     const n = songDurations.length;
//     const target = busDuration - 30;

//     while (j < n) {
//         const sum = songDurations[i] + songDurations[j];
//         if (sum === target) {
//             return [i, j];
//         } else if (sum < target) {
//             return [-1, -1];
//         } else {
//             j++;
//         }
//     }
// }
function musicRuntime(busDuration, songDurations) {
    // key = songDuration, val = index
    const map = new Map();
    // target is always 30 seconds before busDuration
    const target = busDuration - 30;
    // max is the largest song duration that is less than target
    let max = 0;
    // return this if no pair is found
    let result = [-1, -1];

    for (let i = 0; i < songDurations.length; i++) {
        // complement is the song duration that would add up to target
        const complement = target - songDurations[i];
        // if we have seen a song duration that equals complement, we have a pair
        if (map.has(complement)) {
            // if the complement is greater than max, we have a new max
            if (complement > max) {
                max = complement;
                complementIdx = map.get(complement);
                // create new result array with the indexes of the pair
                result = [complementIdx, i];
            }
        }
        // add the song duration with its index to the map
        map.set(songDurations[i], i);
    }
    return result;
}

console.log(musicRuntime(busDuration1, songDurations1), expected1);
console.log(musicRuntime(busDuration2, songDurations2), expected2);
console.log(musicRuntime(busDuration3, songDurations3), expected3);
