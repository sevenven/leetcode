// https://leetcode-cn.com/problems/unique-paths/

// dp方程：dp[i, j] = dp[i, j-1] + dp[i-1, j]

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 写法一：时间复杂度O(n*m) 空间复杂度O(n*m)
var uniquePaths = function (m, n) {
	var dp = [];
	for (var i = 0; i < n; i++) {
		dp[i] = [];
		for (var j = 0; j < m; j++) {
			if (i === 0 || j === 0) 
				dp[i][j] = 1;
			else 
				dp[i][j] = dp[i][j-1] + dp[i-1][j];
		}
	}
	return dp[n-1][m-1];
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 写法二：时间复杂度O(n*m) 空间复杂度O(2m)
var uniquePaths = function (m, n) {
	var cur = new Array(m).fill(1),
		pre = cur.slice(0);
	for (var i = 1; i < n; i++) {
		for (var j = 1; j < m; j++) {
			cur[j] = cur[j-1] + pre[j];
		}
		pre = cur.slice(0);
	}
	return cur[m-1];
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 写法三：时间复杂度O(n*m) 空间复杂度O(m)
var uniquePaths = function (m, n) {
	var cur = new Array(m).fill(1);
	for (var i = 1; i < n; i++) {
		for (var j = 1; j < m; j++) {
			cur[j] += cur[j-1];
		} 
	}
	return cur[m-1];
};

console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(7, 3)); // 28