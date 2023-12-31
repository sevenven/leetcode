// https://leetcode-cn.com/problems/subsets/
// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 分治法
var subsets = function (nums) {
	var result = [];
	sub([], nums, 0);
	return result;
	function sub(arr, nums, index) {
		if (nums.length === index) {
			result.push(arr);
			return;
		}
		sub(arr, nums, index + 1);
		sub(arr.concat(nums[index]), nums, index + 1);
	}
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯法
var subsets = function (nums) {
	var result = [];
	sub([], nums);
	return result;
	function sub(arr, nums) {
		result.push(arr);
		for (var i = 0; i < nums.length; i++) {
			sub(arr.concat(nums[i]), nums.slice(i + 1));
		}
	}
};

console.log(subsets([1, 2, 3])) // [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]