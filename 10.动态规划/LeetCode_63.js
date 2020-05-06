// https://leetcode-cn.com/problems/unique-paths-ii/

// dp方程：dp[i, j] = dp[i, j-1] + dp[i-1, j]

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// 写法一
// 直接更改传进来的数组(不提倡)
// 时间复杂度O(n*m) 空间复杂度O(1)
var uniquePathsWithObstacles = function(obstacleGrid) {
	if (!obstacleGrid || !obstacleGrid.length || obstacleGrid[0][0] == 1) return 0;
	var n = obstacleGrid.length,
		m = obstacleGrid[0].length;
	obstacleGrid[0][0] = 1;
	for (var i = 1; i < n; i++) 
		obstacleGrid[i][0] = obstacleGrid[i][0] == 1 ? 0 : obstacleGrid[i-1][0];
	for (var j = 1; j < m; j++) 
		obstacleGrid[0][j] = obstacleGrid[0][j] == 1 ? 0 : obstacleGrid[0][j-1];
	for (var i = 1; i < n; i++) {
		for (var j = 1; j < m; j++) {
			if (obstacleGrid[i][j] == 1) 
				obstacleGrid[i][j] = 0; 
			else 
				obstacleGrid[i][j] = obstacleGrid[i][j-1] + obstacleGrid[i-1][j];
		}
	}
	return obstacleGrid[n-1][m-1];
};

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// 写法二
// 不更改传进来的数组
// 时间复杂度O(n*m) 空间复杂度O(n*m)
var uniquePathsWithObstacles = function(obstacleGrid) { 
	if (!obstacleGrid || !obstacleGrid.length || obstacleGrid[0][0] == 1) return 0;
	var n = obstacleGrid.length,
		m = obstacleGrid[0].length,
		dp = [];
	dp[0] = [];
	dp[0][0] = 1;
	for (var i = 1; i < n; i++) {
		dp[i] = [];
		dp[i][0] = obstacleGrid[i][0] == 1 ? 0 : dp[i-1][0];
	}
	for (var j = 1; j < m; j++) 
		dp[0][j] = obstacleGrid[0][j] == 1 ? 0 : dp[0][j-1];
	for (var i = 1; i < n; i++) {
		for (var j = 1; j < m; j++) {
			if (obstacleGrid[i][j] == 1) 
				dp[i][j] = 0;
			else 
				dp[i][j] = dp[i][j-1] + dp[i-1][j];
		}
	}
	return dp[n-1][m-1];
};


/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// 写法三
// 状态压缩一
// 时间复杂度O(n*m) 空间复杂度O(2m)
var uniquePathsWithObstacles = function(obstacleGrid) {
	if (!obstacleGrid || !obstacleGrid.length || obstacleGrid[0][0] == 1) return 0;
	var n = obstacleGrid.length,
		m = obstacleGrid[0].length,
		cur = [1],
		pre = [1];
	for (var j = 1; j < m; j++) 
		pre[j] = cur[j] = obstacleGrid[0][j] == 1 ? 0 : cur[j-1];
	for (var i = 1; i < n; i++) {
		if (obstacleGrid[i][0] == 1) cur[0] = 0;
		for (var j = 1; j < m; j++) {
			if (obstacleGrid[i][j] == 1) 
				cur[j] = 0;
			else 
				cur[j] = cur[j-1] + pre[j];
		}
		pre = cur.slice(0);
	}
	return cur[m-1];
};

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// 写法四
// 状态压缩二
// 时间复杂度O(n*m) 空间复杂度O(m)
var uniquePathsWithObstacles = function(obstacleGrid) {
	if (!obstacleGrid || !obstacleGrid.length || obstacleGrid[0][0] === 1) return 0;
	var n = obstacleGrid.length,
		m = obstacleGrid[0].length,
		cur = [1];
	for (var j = 1; j < m; j++) 
		cur[j] = obstacleGrid[0][j] == 1 ? 0 : cur[j-1];
	for (var i = 1; i < n; i++) {
		if (obstacleGrid[i][0] == 1) cur[0] = 0;
		for (var j = 1; j < m; j++) {
			if (obstacleGrid[i][j] == 1) 
				cur[j] = 0;
			else
			 cur[j] += cur[j-1];
		}
	}
	return cur[m-1];
};

console.log(uniquePathsWithObstacles(
	[
		[0, 0, 0, 0],
		[1, 1, 0, 0],
		[0, 0, 0, 0]
	]
)); // 3