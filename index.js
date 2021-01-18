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
    for (let a = 0; a < 10; a = a + 1) {
    let a = Math.floor(Math.random() * SHIP_LENGTHS.length);
    SHIP_LENGTHS.splice(SHIP_LENGTHS.indexOf(a));
    let shipChoice = SHIP_LENGTHS[a];
  
    

    // select position of number
    let randomPositionNumber = utils.getRandomNumber(1, SHIP_LENGTHS.length);

    // select position of the letters
    let randomPositionLetter = utils.getRandomNumber(1, SHIP_LENGTHS.length);

    // get ship 
    let randomChooseShip = utils.getRandomNumber(1, SHIP_LENGTHS.length);
  }
}

async function fillPlayerBoard(board) {

  let letterToNumber = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  // fill the computer board.
  // This function is async because we need keyboard input. You can also choose to

  for (let a = 0; a < 10; a = a + 1) {

  console.log('Here is your board');
  utils.printBoard(board, false);
  console.log();
  console.log('Here are the ships avalible. The number represents the length.');

  console.log()
  console.log(...SHIP_LENGTHS.join(', '), '.')
  console.log()

  let shipChoice = await input.readInteger('Choose the ship');
  SHIP_LENGTHS.splice(SHIP_LENGTHS.indexOf(shipChoice), 1);
  let coordinateNumber = await input.readInteger('Type the number coordinate');
  let coordinateLetter = await input.readString('Type the letter coordinate');
  board[coordinateNumber - 1][coordinateLetter - 1] = 1;

  let secondCoordinateNumber;
  let thirdCoordinateNumber;
  let fourthCoordinateNumber;
  let secondCoordinateLetter;
  let thirdCoordinateLetter;
  let fourthCoordinateLetter;

  if (shipChoice === 2) {
    secondCoordinateNumber = await input.readInteger('Type the second number coordinate');
    secondCoordinateLetter = await input.readString('Type the second letter coordinate');
    board[secondCoordinateNumber - 1][secondCoordinateLetter - 1] = 1;
  }

  else if (shipChoice === 3) {
    thirdCoordinateNumber = await input.readInteger('Type the third number coordinate');
    thirdCoordinateLetter = await input.readString('Type the third letter coordinate');

    if (thirdCoordinateLetter === coordinateLetter) {
      board[thirdCoordinateNumber - 2][thirdCoordinateLetter - 1] = 1;
    }
    else if (thirdCoordinateNumber === coordinateNumber) {
      board[thirdCoordinateNumber - 1][thirdCoordinateLetter - 2] = 1;
    }
    else {
      console.log('Something went wrong!');
      return;
    }
    board[thirdCoordinateNumber - 1][thirdCoordinateLetter - 1] = 1;
  }

  else if (shipChoice === 4) {
    fourthCoordinateNumber = await input.readInteger('Type the fourth number coordinate');
    fourthCoordinateLetter = await input.readString('Type the fourth letter coordinate');
    if (fourthCoordinateLetter === coordinateLetter) {
      board[fourthCoordinateNumber - 3][fourthCoordinateLetter - 1] = 1;
      board[fourthCoordinateNumber - 2][fourthCoordinateLetter - 1] = 1;
    }
    else if (fourthCoordinateNumber === coordinateNumber) {
      board[fourthCoordinateNumber - 1][fourthCoordinateLetter - 3] = 1;
      board[fourthCoordinateNumber - 1][fourthCoordinateLetter - 2] = 1;
    }
    else {
      console.log('Something went wrong!');
      return;
    }
    board[fourthCoordinateNumber - 1][fourthCoordinateLetter - 1] = 1;
  }

  utils.printBoard(board, false);
  }

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

  fillPlayerBoard(playerBoard);
  fillComputerBoard(computerBoard);
  await playerMove(computerBoard)
  computerMove(playerBoard);


  // with this utils function you can print a board

  // while (!areAllShipsDestroyed(computerBoard) || !areAllShipsDestroyed(playerBoard)) {
  //   await playerMove(computerBoard);
  //   computerMove(playerBoard, difficulty);
  // }

  // output the winner (computer or player)
}

main();