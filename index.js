const input = require('input');
const utils = require('./utils');

let SHIP_LENGTHS = [
  1, 1, 1, 1,
  2, 2, 2,
  3, 3,
  4,
];

let secondCoordinateNumber;
let thirdCoordinateNumber;
let fourthCoordinateNumber;
let secondCoordinateLetter;
let thirdCoordinateLetter;
let fourthCoordinateLetter;
let direction;
let playerPoints = 0;
let computerPoints = 0;

async function selectDifficulty() {

  // return the difficulty of the game. You can choose to have only one difficulty
  // This function is async because we need keyboard input

}

function fillComputerBoard(board) {
  function random() {
  for (let b = 10; b > 0; b = b - 1) {

      // get ship 
      let randomChooseShip = SHIP_LENGTHS[b - 1];
      SHIP_LENGTHS.pop();

      // select position of number
      let randomPositionNumber = utils.getRandomNumber(0, 9);

      // select position of the letters
      let randomPositionLetter = utils.getRandomNumber(0, 9);


      console.log(randomChooseShip);
      direction = utils.getRandomNumber(0, 1);
      check(randomPositionNumber, randomPositionLetter, randomChooseShip, board);

      if (randomChooseShip == 1) {

      }
      else if (randomChooseShip == 2) {
        if (direction == 0 && typeof (randomPositionNumber + 1) !== undefined && typeof (randomPositionLetter) !== undefined) {
          secondCoordinateNumber = randomPositionNumber + 1;
          secondCoordinateLetter = randomPositionLetter;
        }
        else if (direction == 1 && typeof (randomPositionLetter + 1) !== undefined) {
          secondCoordinateNumber = randomPositionNumber;
          secondCoordinateLetter = randomPositionLetter + 1;
        }
      }
      else if (randomChooseShip == 3) {
        if (direction == 0 && typeof (randomPositionNumber + 2) !== undefined && typeof (readPositionLetter) !== undefined) {
          thirdCoordinateNumber = randomPositionNumber + 2;
          thirdCoordinateLetter = randomPositionLetter;
          board[thirdCoordinateNumber - 1][thirdCoordinateLetter] = 1;
          board[thirdCoordinateNumber][thirdCoordinateLetter] = 1;
        }
        else if (direction == 1 && typeof (randomPositionLetter + 2) !== undefined) {
          thirdCoordinateNumber = randomPositionNumber;
          thirdCoordinateLetter = randomPositionLetter + 2;
          board[thirdCoordinateNumber][thirdCoordinateLetter - 1] = 1;
          board[thirdCoordinateNumber][thirdCoordinateLetter] = 1;
        }
      }
      else if (randomChooseShip == 4) {
        if (direction == 0 && typeof (randomPositionNumber + 3) !== undefined && typeof (randomPositionLetter) !== undefined) {
          fourthCoordinateNumber = randomPositionNumber + 3;
          fourthCoordinateLetter = randomPositionLetter;
          board[fourthCoordinateNumber - 2][fourthCoordinateLetter] = 1;
          board[fourthCoordinateNumber - 1][fourthCoordinateLetter] = 1;
          board[fourthCoordinateNumber][fourthCoordinateLetter] = 1;
        }
        else if (direction == 1 && typeof (randomPositionLetter + 3) !== undefined) {
          fourthCoordinateNumber = randomPositionNumber;
          fourthCoordinateLetter = randomPositionLetter + 3;
          board[fourthCoordinateNumber][fourthCoordinateLetter - 2] = 1;
          board[fourthCoordinateNumber][fourthCoordinateLetter - 1] = 1;
          board[fourthCoordinateNumber][fourthCoordinateLetter] = 1;
        }
        else {
          random();
        }
      }
    }

    SHIP_LENGTHS = [
      1, 1, 1, 1,
      2, 2, 2,
      3, 3,
      4,
    ];
  }

  random()
}

function check(coordinateNumber, coordinateLetter, shipChoice, board) {

  if (board[coordinateNumber][coordinateLetter] == 1) {
    coordinateNumber = utils.getRandomNumber(0, 9);
    coordinateLetter = utils.getRandomNumber(0, 9);
    check(coordinateNumber, coordinateLetter, shipChoice, board);
  }
  else {
    board[coordinateNumber][coordinateLetter] = 1;
  }
}

async function fillPlayerBoard(board) {

  console.log('\x1b[44m%s\x1b[0m', 'Here is your board');
  utils.printBoard(board, false);

  for (let a = 0; a < 10; a = a + 1) {

    console.log();
    console.log('\x1b[43m%s\x1b[0m', 'Here are the ships avalible. The number represents the length.');

    console.log();
    console.log(...SHIP_LENGTHS.join(', '), '.');
    console.log();

    let shipChoice = await input.readInteger('Choose the ship');
    let coordinateNumber = await input.readInteger('Type the number coordinate');
    let coordinateLetter = letterToNumber(await input.readString('Type the letter coordinate'));
    board[coordinateNumber - 1][coordinateLetter - 1] = 1;

    if (shipChoice === 1 && SHIP_LENGTHS.includes(shipChoice)) {

    }
    else if (shipChoice === 2 && SHIP_LENGTHS.includes(shipChoice)) {
      secondCoordinateNumber = await input.readInteger('Type the second number coordinate');
      secondCoordinateLetter = letterToNumber(await input.readString('Type the letter coordinate'));
      board[secondCoordinateNumber - 1][secondCoordinateLetter - 1] = 1;
    }

    else if (shipChoice === 3 && SHIP_LENGTHS.includes(shipChoice)) {
      thirdCoordinateNumber = await input.readInteger('Type the third number coordinate');
      thirdCoordinateLetter = letterToNumber(await input.readString('Type the third letter coordinate'));

      if (thirdCoordinateLetter === coordinateLetter) {
        board[thirdCoordinateNumber - 2][thirdCoordinateLetter - 1] = 1;
      }
      else if (thirdCoordinateNumber === coordinateNumber) {
        board[thirdCoordinateNumber - 1][thirdCoordinateLetter - 2] = 1;
      }
      else {
        console.log('\x1b[41m%s\x1b[0m', 'Something went wrong!');
        return;
      }
      board[thirdCoordinateNumber - 1][thirdCoordinateLetter - 1] = 1;
    }

    else if (shipChoice === 4) {
      fourthCoordinateNumber = await input.readInteger('Type the fourth number coordinate');
      fourthCoordinateLetter = letterToNumber(await input.readString('Type the fourth letter coordinate'));
      if (fourthCoordinateLetter === coordinateLetter) {
        board[fourthCoordinateNumber - 3][fourthCoordinateLetter - 1] = 1;
        board[fourthCoordinateNumber - 2][fourthCoordinateLetter - 1] = 1;
      }
      else if (fourthCoordinateNumber === coordinateNumber) {
        board[fourthCoordinateNumber - 1][fourthCoordinateLetter - 3] = 1;
        board[fourthCoordinateNumber - 1][fourthCoordinateLetter - 2] = 1;
      }
      else {
        console.log('\x1b[41m%s\x1b[0m', 'Something went wrong!');
        return;
      }
      board[fourthCoordinateNumber - 1][fourthCoordinateLetter - 1] = 1;
    }
    else {
      console.log('\x1b[41m%s\x1b[0m', 'Something went worng!');
      return;
    }

    SHIP_LENGTHS.splice(SHIP_LENGTHS.indexOf(shipChoice), 1);
    console.log('\x1b[44m%s\x1b[0m', 'Here is your board');
    utils.printBoard(board, false);
  }
}


async function playerMove(computerBoard) {

  let playerMoveNumber = (await input.readInteger('Choose the number to hit the ship') - 1);
  let playerMoveLetter = (letterToNumber(await input.readString('Choose the letter to hit the ship')) - 1);

  if (computerBoard[playerMoveNumber][playerMoveLetter] == 0) {
    console.log('There is no ship there! Missed shot!');
    computerBoard[playerMoveNumber][playerMoveLetter] = 3;
  }
  else if (computerBoard[playerMoveNumber][playerMoveLetter] == 1) {
    console.log('Great! You just hit a ship!');
    computerBoard[playerMoveNumber][playerMoveLetter] = 2;
    playerPoints = playerPoints + 10;
  }
  else if (computerBoard[playerMoveNumber][playerMoveLetter] == 2) {
    console.log('Are you serious?! You have already hit a ship there.');
  }
  else if (computerBoard[playerMoveNumber][playerMoveLetter] == 3) {
    console.log('You have already tried there, there are no ships!');
  }

}

function computerMove(playerBoard) {

  console.log('My turn! I say...');
  let computerMoveNumber = utils.getRandomNumber(0, 9);
  let computerMoveLetter = utils.getRandomNumber(0, 9);

  if (playerBoard[computerMoveNumber][computerMoveLetter] == 0) {
    console.log('\x1b[32m%s\x1b[0m', 'Aaaaa I missed the shot... :{');
    playerBoard[computerMoveNumber][computerMoveLetter] = 3;
  }
  else if (playerBoard[computerMoveNumber][computerMoveLetter] == 1) {
    console.log('\x1b[31m%s\x1b[0m', 'Ha! I have just hit a ship! :D');
    playerBoard[computerMoveNumber][computerMoveLetter] = 2;
    computerPoints = computerPoints + 10;
    // utils.printBoard(playerBoard);
  }
  else if (playerBoard[computerMoveNumber][computerMoveLetter] == 2) {
    console.log('\x1b[32m%s\x1b[0m', 'Crap! I have already hit a ship there.');
  }
  else if (playerBoard[computerMoveNumber][computerMoveLetter] == 3) {
    console.log('\x1b[32m%s\x1b[0m', 'Jeez... I have already tried there... :(');
  }
}

function areAllShipsDestroyed(board) {
  if (board.indexOf(1) == -1) {
    console.log('Computer, GO!');
    return false;
  }
}

function letterToNumber(number) {
  if (number >= 0) {
    console.log('Hey! Type a letter, not a number!');
    return;
  }
  number = number.toUpperCase();
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  number = letters.indexOf(number) + 1;
  return number;
}

async function main() {

  console.log('\x1b[46m%s\x1b[0m', 'Welcome to Battle Ship Game! To play, follow the on-screen instructions.')

  const computerBoard = utils.createGamingBoard();
  const playerBoard = utils.createGamingBoard();

  // utils.printBoard(player, false); 

  const difficulty = await selectDifficulty();

  fillComputerBoard(computerBoard);
  utils.printBoard(computerBoard, false); 
  await fillPlayerBoard(playerBoard);
  await playerMove(computerBoard);
  computerMove(playerBoard, difficulty);

  while (!areAllShipsDestroyed(computerBoard) && !areAllShipsDestroyed(playerBoard)) {
    await playerMove(computerBoard);
    computerMove(playerBoard, difficulty);
  }
  console.log('\x1b[32m%s\x1b[0m', 'Type node index.js to play again!');
  
  console.log('You made ' + playerPoints + ' points!')
}


main();