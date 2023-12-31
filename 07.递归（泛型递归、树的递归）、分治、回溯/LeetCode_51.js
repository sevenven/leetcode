// https://leetcode-cn.com/problems/n-queens/
// 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

// 回溯+剪枝
/**
 * @param {number} n
 * @return {string[][]}
 */
// 写法一
var solveNQueens = function (n) {
	var result = [];
	placeQueens({}, {}, {}, 0, [], n);
	return result;
	// col/pie/na是之前皇后所能够攻击的位置
	function placeQueens (col, pie, na, row, state, n) {
		if (row === n) {
			result.push(generate(state, n));
		}
		for (var i = 0; i < n; i++) { // 遍历的是列
			if (!col[i] && !pie[row+i] && !na[row-i]) {
				col[i] = true;
				pie[row+i] = true;
				na[row-i] = true;
				state.push(i);
				placeQueens(col, pie, na, row + 1, state, n);
				delete col[i];
				delete pie[row+i];
				delete na[row-i];
				state.pop();
			}
		}
	}
	function generate (state, n) {
		var board = [];
		for (i of state) {
			board.push('.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1));
		}
		return board;
	}
};

/**
 * @param {number} n
 * @return {string[][]}
 */
// 写法二
var solveNQueens = function (n) {
	var result = [];
	placeQueens([], 0, n);
	return result;
	function placeQueens (state, row, n) {
		if (row === n) {
			result.push(state.map(col => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1)));
		}
		for (var i = 0; i < n; i++) {
			if (!state.some((col, s_row) => i === col || (row + i) === (s_row + col) || (row - i) === (s_row - col))) {
				state.push(i);
				placeQueens(state, row + 1, n);
				state.pop();
			}
		}
	}
};

console.log(solveNQueens(4)); // [['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]
// console.log(solveNQueens(5));