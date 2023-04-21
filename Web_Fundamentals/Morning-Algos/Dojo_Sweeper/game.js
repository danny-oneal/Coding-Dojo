var theDojo = [
  [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
  [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
  [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
  [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
  [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
  [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
  [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
  [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
  [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
  [9, 2, 2, 2, 0, 7, 0, 1, 1, 0]
];
var dojoDiv = document.querySelector("#the-dojo");

function createRandomBoard(theDojo) {
  for (var i = 0; i < theDojo.length; i++) {
    const randCol = Math.floor(Math.random() * theDojo[i].length);
    for (var j = 0; j < theDojo[i].length; j++) {
      if (j === randCol) {
        theDojo[i][j] = 1;
      } else {
        theDojo[i][j] = 0;
      }
    }
  }
}

// Creates the rows of buttons for this game
function render(theDojo) {
  createRandomBoard(theDojo);
  var result = "";
  for (var i = 0; i < theDojo.length; i++) {
    for (var j = 0; j < theDojo[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
  }
  return result;
}

function isCellValid(row, col) {
  return row >= 0 && row < theDojo.length && col >= 0 && col < theDojo.length;
}

function isGameOver(row, col) {
  return theDojo[row][col] === 1;
}
// TODO - Make this function tell us how many ninjas are hiding
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(row, col, element) {
  console.log({ row, col });
  let count = 0;

  if (isGameOver(row, col)) {
    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    return;
  }

  // upper
  if (isCellValid(row - 1, col)) {
    count += theDojo[row - 1][col];
  }

  // upper right
  if (isCellValid(row - 1, col + 1)) {
    count += theDojo[row - 1][col + 1];
  }

  // right
  if (isCellValid(row, col + 1)) {
    count += theDojo[row][col + 1];
  }

  // bottom right
  if (isCellValid(row + 1, col + 1)) {
    count += theDojo[row + 1][col + 1];
  }

  // bottom
  if (isCellValid(row + 1, col)) {
    count += theDojo[row + 1][col];
  }

  // bottom left
  if (isCellValid(row + 1, col - 1)) {
    count += theDojo[row + 1][col - 1];
  }

  // left
  if (isCellValid(row, col - 1)) {
    count += theDojo[row][col - 1];
  }

  // upper left
  if (isCellValid(row - 1, col - 1)) {
    count += theDojo[row - 1][col - 1];
  }

  element.innerText = count;
}

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div>
dojoDiv.innerHTML = render(theDojo);
