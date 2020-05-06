// https://leetcode-cn.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	var dx = [-1, 1, 0, 0],
		dy = [0, 0, -1, 1],
		n = grid.length,
		m = grid[0].length,
		nums = 0;
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < m; j++) {
			if (grid[i][j] == 1) {
				nums++;
				isAnLand(i, j, grid);
			}
		}
	}
	return nums;
	function isAnLand (i, j) {
		if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] == 0) return;
		grid[i][j] = 0;
		for (var k = 0; k < dx.length; k++) 
			isAnLand(i + dx[k], j + dy[k]);
	}
};


var res1 = numIslands([
	[1, 1, 1, 1, 0],
	[1, 1, 0, 1, 0],
	[1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0]
])
console.log(res1); // 1
var res2 = numIslands([
	[1, 1, 0, 0, 0],
	[1, 1, 0, 0, 0],
	[0, 0, 1, 0, 0],
	[0, 0, 0, 1, 1]
])
console.log(res2); // 3