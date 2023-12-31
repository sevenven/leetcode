// https://leetcode-cn.com/problems/maximum-subarray/

// dp方程：max:dp[i] = max{dp[i-1], 0} + a[i]

/**
 * @param {number[]} nums
 * @return {number}
 */
// 写法一
// dp状态使用一维数组
// 时间复杂度O(n) 空间复杂度O(n);
var maxSubArray = function(nums) {
	var len = nums.length,
		dp = [nums[0]],
		max = nums[0];
	for (var i = 1; i < len; i++) {
		dp[i] = Math.max(dp[i-1], 0) + nums[i];
		max = Math.max(max, dp[i]);
	}
	return max;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// 写法二
// dp状态只记录前一个dp状态
// 时间复杂度O(n) 空间复杂度O(1);
var maxSubArray = function(nums) { 
	var len = nums.length,
		max = dp = nums[0];
	for (var i = 1; i < len; i++) {
		dp = Math.max(dp, 0) + nums[i];
		max = Math.max(max, dp);
	}
	return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6