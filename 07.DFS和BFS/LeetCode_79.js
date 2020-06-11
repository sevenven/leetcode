// https://leetcode-cn.com/problems/word-search/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        if (backTrack(board, word, i, j, 0, {})) return true;
      }
    }
  }
  return false;

  function backTrack (board, word, x, y, curIndex, visited) {
    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return false;
    if (visited[x * board[0].length + y]) return false;
    if (board[x][y] !== word[curIndex]) return false;
    if (curIndex === word.length - 1) return true;
    var dx = [-1, 0, 1, 0],
      dy = [0, 1, 0, -1];
    visited[x * board[0].length + y] = true;
    for (var i = 0; i < 4; i++) {
      if (backTrack(board, word, x + dx[i], y + dy[i], curIndex+1, visited)) return true;
    }
    delete visited[x * board[0].length + y];
  }
}

var board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']];
console.log(exist(board, 'ABCCED'));
