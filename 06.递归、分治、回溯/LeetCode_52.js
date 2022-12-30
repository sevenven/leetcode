// https://leetcode-cn.com/problems/n-queens-ii/
// n 皇后问题 研究的是如何将 n 个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。
// 给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。

/**
 * @param {number} n
 * @return {number}
 */
// 写法一
var totalNQueens = function(n) {
  var count = 0;
  placeQueues({}, {}, {}, 0, n);
  return count;
  function placeQueues (col, pie, na, row, n) {
    if (row === n) {
      count++;
      return;
    }
    for (var i = 0; i < n; i++) {
      if (!col[i] && !pie[row+i] && !na[row-i]) {
        col[i] = true;
        pie[row+i] = true;
        na[row-i] = true;
        placeQueues(col, pie, na, row + 1, n);
        delete col[i];
        delete pie[row+i];
        delete na[row-i];
      }
    }
  }
};

/**
 * @param {number} n
 * @return {number}
 */
// 写法二
var totalNQueens = function(n) {
  var count = 0;
  placeQueues([], 0, n);
  return count;
  function placeQueues (state, row, n) {
    if (row === n) {
      count++;
      return;
    }
    for (var i = 0; i < n; i++) {
      if (!state.some((col, s_row) => i === col || (row - i) === (s_row - col) || (row + i) === (s_row + col))) {
        state.push(i);
        placeQueues(state, row + 1, n);
        state.pop();
      }
    }
  }
};

console.log(totalNQueens(1)); // 1
console.log(totalNQueens(2)); // 0
console.log(totalNQueens(3)); // 0
console.log(totalNQueens(4)); // 2
console.log(totalNQueens(5)); // 10
console.log(totalNQueens(6)); // 4