// https://leetcode-cn.com/problems/sudoku-solver/
// 编写一个程序，通过填充空格来解决数独问题。
// 数独的解法需 遵循如下规则：
// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
// 数独部分空格内已填入了数字，空白格用 '.' 表示。

/**
 * @param {character[][]} board
 * @return {void} Do not return anything,   modify board in-place instead.
 */
var solveSudoku = function (board) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (board[i][j] !== ".") continue;
      for (var k = 1; k <= 9; k++) {
        if (isValid(board, i, j, k.toString())) {
          board[i][j] = k.toString();
          if (solveSudoku(board)) return true;
          board[i][j] = ".";
        }
      }
      return false;
    }
  }
  return true;
};

function isValid(board, row, col, k) {
  var boxX = Math.floor(row / 3) * 3;
  var boxY = Math.floor(col / 3) * 3;
  for (var i = 0; i < 9; i++) {
    if (board[row][i] === k || board[i][col] === k) return false;
  }
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[boxX + i][boxY + j] === k) return false;
    }
  }
  return true;
}

var arr = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
solveSudoku(arr);
console.log(arr);
