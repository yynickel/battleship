let playerGrid = [];

function init() {
  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
      row.push(0);
    }
    playerGrid.push(row);
  }
}

//coordinates is an array of points
function placeShip(coordinates, shipType) {
  for (let i = 0; i < coordinates.length; i++) {
    playerGrid[coordinates[i][0]][coordinates[i][1]] = shipType;
  }
}

//coordinates is an array of points
function gettingHit(coordinates) {
  for (let i = 0; i < coordinates.length; i++) {
    if ((playerGrid[coordinates[i][0]][coordinates[i][1]] !== 0) && (playerGrid[coordinates[i][0]][coordinates[i][1]] !== "x"))
      playerGrid[coordinates[i][0]][coordinates[i][1]] = "x";

  }
}

init();
let carrierCoordinates = [
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5]
];
placeShip(carrierCoordinates, "cv");
gettingHit([
  [1, 2]
]);
console.log(playerGrid);