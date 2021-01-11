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

async function fillPlayerBoard(board, playerBoard) {
  // fill the computer board.
  // This function is async because we need keyboard input. You can also choose to
  // create the playerBoard randomly.
  let randomYesOrNo = await input.readInteger('Press 1 for a randomly generated board or 2 for choosing the specific coordinates.');
  if (randomYesOrNo == '1') {
    playerBoard[8][1] = 1;
      utils.printBoard(playerBoard, false); 
    fillPlayerBoardRandomly(fillPlayerBoard, SHIP_LENGTHS, playerBoard, board)
  }
  else if (randomYesOrNo == '2') {
    // player selects the coordinates
  }
}

function fillPlayerBoardRandomly(fillPlayerBoard, SHIP_LENGTHS, playerBoard, board) {
  for (let a = 0; a < 10; a = a + 1) {
  let a = Math.floor(Math.random() * SHIP_LENGTHS.length);
  SHIP_LENGTHS.pop(SHIP_LENGTHS[a]);
  let shipChoice = SHIP_LENGTHS[a];

  // select position of number
  let randomPositionNumber = utils.getRandomNumber(1, 10);

  // select position of the letters
  let randomPositionLetter = utils.getRandomNumber(1, 10);
  playerBoard[randomPositionNumber][randomPositionLetter] = 1;

  }
  console.log('Here is your board');
  utils.printBoard(playerBoard, false); 
}

async function playerMove(computerBoard) {
  // update the playerBoard with the computer's move
  // This function is async because we need keyboard input
}

function computerMove(playerBoard) {
  // update the computerBoard with the player's move
  // This function is not async because we don't need keyboard input
}

function areAllShipsDestroyed(board) {
  // check if all ships are destroyed in the board
}

async function main() {
  const computerBoard = utils.createGamingBoard();
  const playerBoard = utils.createGamingBoard();

  // utils.printBoard(player, false); 

  const difficulty = await selectDifficulty();

  await fillPlayerBoard(playerBoard);
  fillComputerBoard(computerBoard);

  playerMove(computerBoard)
  computerMove(playerBoard)
  

  // with this utils function you can print a board
  utils.printBoard(playerBoard, false); 
  // while (!areAllShipsDestroyed(computerBoard) || !areAllShipsDestroyed(playerBoard)) {
  //   await playerMove(computerBoard);
  //   computerMove(playerBoard, difficulty);
  // }

  // output the winner (computer or player)
}

main();