const input = require('input');
const utils = require('./utils');

const SHIP_LENGTHS = [
  1, 1, 1, 1,
  2, 2, 2,
  3, 3,
  4,
];

async function selectDifficulty() {
  // return the difficulty of the game. You can choose to have only one difficulty
  // This function is async because we need keyboard input
}

function fillComputerBoard(board) {
  // fill the computer board.
}

async function fillPlayerBoard(board) {
  // fill the computer board.
  // This function is async because we need keyboard input. You can also choose to
  // create the playerBoard randomly.
}

async function playerMove(computerBoard) {
  // update the computerBoard with the player's move
  // This function is async because we need keyboard input
}

function computerMove(playerBoard) {
  // update the computerBoard with the player's move
  // This function is async because we need keyboard input
}

function areAllShipsDestroyed(board) {
  // check if all ships are destroyed in the board
}

async function main() {
  const computerBoard = utils.createGamingBoard();
  const playerBoard = utils.createGamingBoard();

  const difficulty = await selectDifficulty();

  fillComputerBoard(computerBoard);
  await fillPlayerBoard(playerBoard);
  
  // with this utils function you can print a board
  utils.printBoard(playerBoard, false); 
  // while (!areAllShipsDestroyed(computerBoard) || !areAllShipsDestroyed(playerBoard)) {
  //   await playerMove(computerBoard);
  //   computerMove(playerBoard, difficulty);
  // }

  // output the winner (computer or player)
}

main();