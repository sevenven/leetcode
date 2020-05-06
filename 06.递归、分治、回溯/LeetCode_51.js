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
	return genetate(result, n);
	function placeQueens (cols, pie, na, curRow, curState, n) {
		if (curRow === n) {
			result.push(Array.from(curState));
			return;
		}
		for (var col = 0; col < n; col++) {
			if (cols[col] || pie[curRow + col] || na[curRow - col]) continue;
			cols[col] = true;
			pie[curRow + col] = true;
			na[curRow - col] = true;
			curState.push(col);
			placeQueens(cols, pie, na, curRow + 1, curState, n);
			delete cols[col];
			delete pie[curRow + col];
			delete na[curRow - col];
			curState.pop();
		}
	}
	function genetate (result, n) {
		var board = [];
		for (var i = 0; i < result.length; i++) {
			board[i] = [];
			for (col of result[i]) 
				board[i].push(".".repeat(col) + 'Q' + ".".repeat(n-col-1));
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
    placeQueens(result, n);
    return result;
};

function placeQueens (result, col, board = [], row = 0) {
    if (row === col) {
        result.push(board.map(b_col => '.'.repeat(b_col) + 'Q' + '.'.repeat(col - b_col - 1)))
    }
    for (var i = 0; i < col; i++) {
        if (!board.some((b_col, b_row) => i === b_col || (i - b_col) === (row - b_row) || (b_col + b_row) === (i + row))) {
            board.push(i);
            placeQueens(result, col, board, row + 1);
            board.pop();
        }
    }
}

console.log(solveNQueens(4));
// console.log(solveNQueens(5));