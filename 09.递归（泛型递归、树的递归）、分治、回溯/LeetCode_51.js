// https://leetcode-cn.com/problems/n-queens/
// 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

/**
 * @param {number} n
 * @return {string[][]}
 */
// 回溯+剪枝 写法一
var solveNQueens = function (
  n,
  col = {},
  pie = {},
  na = {},
  curRow = 0,
  solution = [],
  result = []
) {
  if (curRow === n)
    result.push(
      solution.map((col) => ".".repeat(col) + "Q" + ".".repeat(n - 1 - col))
    );
  for (let i = 0; i < n; i++) {
    if (!col[i] && !pie[curRow + i] && !na[curRow - i]) {
      col[i] = true;
      solution.push(i);
      pie[curRow + i] = true;
      na[curRow - i] = true;
      solveNQueens(n, col, pie, na, curRow + 1, solution, result);
      solution.pop();
      col[i] = false;
      pie[curRow + i] = false;
      na[curRow - i] = false;
    }
  }
  return result;
};

/**
 * @param {number} n
 * @return {string[][]}
 */
// 回溯+剪枝 写法二
var solveNQueens = function (n, curRow = 0, solution = [], result = []) {
  if (curRow === n)
    result.push(
      solution.map((col) => ".".repeat(col) + "Q" + ".".repeat(n - 1 - col))
    );
  for (let i = 0; i < n; i++) {
    if (
      !solution.some(
        (col, row) =>
          i === col || curRow + i === row + col || curRow - i === row - col
      )
    ) {
      solution.push(i);
      solveNQueens(n, curRow + 1, solution, result);
      solution.pop();
    }
  }
  return result;
};

console.log(solveNQueens(4)); // [['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]
// console.log(solveNQueens(5));
