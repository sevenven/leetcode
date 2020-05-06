// https://leetcode-cn.com/problems/minesweeper

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
	var dx = [-1, -1, -1, 0, 0, 1, 1, 1],
		dy = [-1, 0, 1, -1, 1, -1, 0, 1],
		n = board.length,
		m = board[0].length,
		i = click[0],
		j = click[1];
	board[i][j] == 'M' ? board[i][j] = 'X' : update(i, j);
	return board;
	function update (i, j) {
		if (outOfbound(i, j) || board[i][j] == 'B' || board[i][j] == 'M') return;
		var count = 0;
		for (var k = 0; k < dx.length; k++) {
			if (outOfbound(i + dx[k], j + dy[k])) continue;
			if (board[i + dx[k]][j + dy[k]] == 'M') count++;
		}
		if (count) {
			board[i][j] = count + ''
		} else {
			board[i][j] = 'B';
			for (var k = 0; k < dx.length; k++)
				update(i + dx[k], j + dy[k]);
		}
	}
	function outOfbound(i, j) {
		return i < 0 || j < 0 || i >= n || j >= m;
	}
};

console.log(updateBoard([
	['E', 'E', 'E', 'E', 'E'],
	['E', 'E', 'M', 'E', 'E'],
	['E', 'E', 'E', 'E', 'E'],
	['E', 'E', 'E', 'E', 'E']],
	[3, 0]
))
console.log(updateBoard([
	['B', '1', 'E', '1', 'B'],
	['B', '1', 'M', '1', 'B'],
	['B', '1', '1', '1', 'B'],
	['B', 'B', 'B', 'B', 'B']],
	[1, 2]
))