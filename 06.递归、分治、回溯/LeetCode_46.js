// https://leetcode-cn.com/problems/permutations/
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯解法
var permute = function (nums) {
	var result = [];
	rPermute([], nums, nums.length);
	return result;
	function rPermute (arr, nums, len) {
		if (arr.length === len) {
			result.push(arr);
			return;
		}
		for (var i = 0; i < nums.length; i++) {
			rPermute(arr.concat([nums[i]]), nums.slice(0, i).concat(nums.slice(i + 1)), len);
		}
	}
};

console.log(permute([1, 2, 3])); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


