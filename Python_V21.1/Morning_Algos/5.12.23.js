/* 
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionaries to represent current inventory,
  update the quantities of the current inventory
  
  if the item doesn't exist in current inventory, add it to the inventory
  return the current inventory after updating it.
*/

const newInv1 = [
  { name: "Grain of Rice", quantity: 9000 },
  { name: "Peanut Butter", quantity: 50 },
  { name: "Royal Jelly", quantity: 20 }
];
const currInv1 = [
  { name: "Peanut Butter", quantity: 20 },
  { name: "Grain of Rice", quantity: 1 }
];
const expected1 = [
  { name: "Peanut Butter", quantity: 70 },
  { name: "Grain of Rice", quantity: 9001 },
  { name: "Royal Jelly", quantity: 20 }
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];

/**
 * @typedef {Object} Inventory
 * @property {string} Inventory.name The name of the item.
 * @property {number} Inventory.quantity The quantity of the item.
 */

/**
 * Updates the current inventory based on the new inventory.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Inventory>} newInv A shipment of new inventory.
 *    An array of inventory objects.
 * @param {Array<Inventory>} currInv
 * @return The currInv after being updated.
 */
function updateInventory(newInv, currInv) {
  // loop through the new inventory
  const seen = {};
  for (let i = 0; i < currInv.length; i++) {
    seen[currInv[i].name] = i;
  }
  for (const newItem of newInv) {
    if (newItem.name in seen) {
      currInv[seen[newItem.name]].quantity += newItem.quantity;
    } else {
      currInv.push(newItem);
    }
    // let found = false;
    // for (const currItem of currInv) {
    //   if (currItem.name === newItem.name) {
    //     found = true;
    //     currItem.quantity += newItem.quantity;
    //     break;
    //   }
    // }
    // if (!found) {
    //   currInv.push(newItem);
    // }
  }
  return currInv;
}

console.log(updateInventory(newInv1, currInv1), expected1);
console.log(updateInventory(newInv2, currInv2), expected2);
console.log(updateInventory(newInv3, currInv3), expected3);
