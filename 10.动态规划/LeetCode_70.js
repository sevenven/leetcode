// https://leetcode-cn.com/problems/climbing-stairs/

// 变形一 走一步走两步走三步
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	var dp = [1, 2, 3];
	for (var i = 3; i < n; i++) {
		dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
	}
	return dp[n-1];
};

console.log(climbStairs(4))

// 变形二 步数为数组
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, steps) {
	var dp = new Array(n).fill(0);
	for (var i = 0; i < n; i++) {
		for (step of steps) {
			if (i === step)
				dp[i] += 1;
			else if (i > step)
				dp[i] += dp[i-step]
		}
	}
	return dp[n - 1];
};

console.log(climbStairs(8, [1, 2, 5]));

// 变形3 步数为数组且相邻步伐不能相同
/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n, steps) {
	var len = steps.length,
		dp = new Array(n).fill(0);
	for (var i = 0; i < n; i++) {
		for (j = 0; j < len; j++) {
			for (var k = 0; k < len; k++) {

			}
		}
	}
	return dp[n - 1];
};

