// https://leetcode-cn.com/problems/n-queens-ii/
// n 皇后问题 研究的是如何将 n 个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。
// 给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。

/**
 * @param {number} n
 * @return {number}
 */
// 回溯+剪枝
var totalNQueens = function (n, curRow = 0, solution = []) {
  if (curRow === n) return 1;
  let total = 0;
  for (let i = 0; i < n; i++) {
    if (
      !solution.some(
        (col, row) =>
          i === col || curRow - i === row - col || curRow + i === row + col
      )
    ) {
      solution.push(i);
      total += totalNQueens(n, curRow + 1, solution, total);
      solution.pop();
    }
  }
  return total;
};

console.log(totalNQueens(1)); // 1
console.log(totalNQueens(2)); // 0
console.log(totalNQueens(3)); // 0
console.log(totalNQueens(4)); // 2
console.log(totalNQueens(5)); // 10
console.log(totalNQueens(6)); // 4
