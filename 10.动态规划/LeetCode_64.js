// https://leetcode-cn.com/problems/minimum-path-sum/

/**
 * @param {number[][]} grid
 * @return {number}
 */
// 递归
// 时间复杂度O(2^(m+n)) 空间复杂度O(m+n)
var minPathSum = function(grid) {
	return sum(grid, 0, 0);
	function sum (grid, i, j) {
		if (i >= grid.length || j >= grid[0].length) return Number.MAX_SAFE_INTEGER;
		if (i === grid.length - 1 && j === grid[0].length - 1) return grid[i][j];
		return grid[i][j] + Math.min(sum(grid, i + 1, j), sum(grid, i, j + 1));
	}
};

// dp方程
// dp[i, j] = grid[i, j] + min {dp[i, j-1], dp[i-1, j]}

// 写法一
// 时间复杂度O(n*m) 空间复杂度O(n*m)
var minPathSum = function(grid) {
	var n = grid.length,
		m = grid[0].length,
		dp = [];
	for (var i = 0; i < n; i++) {
		dp[i] = [];
		dp[i][0] = i === 0 ? grid[i][0] : grid[i][0] + dp[i-1][0];
	}
	for (var j = 1; j < m; j++) 
		dp[0][j] = grid[0][j] + dp[0][j-1];
	for (var i = 1; i < n; i++) {
		for (var j = 1; j < m; j++) {
			dp[i][j] = grid[i][j] + Math.min(dp[i][j-1], dp[i-1][j]);
		}
	}
	return dp[n-1][m-1];
};

// 写法二
// 时间复杂度O(n*m) 空间复杂度O(m)
var minPathSum = function(grid) {
	var n = grid.length,
		m = grid[0].length,
		cur = [];
	for (var j = 0; j < m; j++) 
		cur[j] = j === 0 ? grid[0][j] : grid[0][j] + cur[j-1];
	for (var i = 1; i < n; i++) {
		cur[0] += grid[i][0];
		for (var j = 1; j < m; j++) {
			cur[j] = grid[i][j] + Math.min(cur[j-1], cur[j]);
		}
	}
	return cur[m-1];
};

console.log(minPathSum(
	[
		[1, 3, 1],
		[1, 5, 1],
		[4, 2, 1]
	]
)); // 7
console.log(minPathSum(
	[
		[1]
	]
)); // 1