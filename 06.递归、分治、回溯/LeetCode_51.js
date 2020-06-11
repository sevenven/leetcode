// https://leetcode-cn.com/problems/n-queens/

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
	function placeQueens (col, pie, na, row, state, n) {
		if (row === n) {
			result.push(generate(state, n));
		}
		for (var i = 0; i < n; i++) {
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