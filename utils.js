const CELL_NUMBER = 10;

function createGamingBoard() {
  const board = [];
  for (let i = 0; i < CELL_NUMBER; i += 1) {
    board.push([]);
    for (let j = 0; j < CELL_NUMBER; j += 1) {
      board[i].push(0);
    }
  }
  return board;
}

function printBoard(board, showOnlyShot) {
 console.log(['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].join('\t'));
  for (let i = 0; i < CELL_NUMBER; i += 1) {
    const cells = board[i].map((c) => {
      if (showOnlyShot) {
        if (c === 2) {
          return 'X';
        }
        else if (c === 3) {
          return '+';
        }
        else {
          return ' ';
        }
      }
      else {
        if (c === 0) {
          return '~';
        }
        else if (c === 1) {
          return '\u2593';
        }
        if (c === 2) {
          return 'X';
        }
        else if (c === 3) {
          return '+';
        }
      }
    });
    console.log([i + 1, ...cells].join('\t'));
  }
}

function getRandomNumber(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

module.exports = {
  createGamingBoard,
  printBoard,
  getRandomNumber,
}