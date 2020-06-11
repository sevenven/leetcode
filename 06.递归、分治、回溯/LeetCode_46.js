// https://leetcode-cn.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯解法
var permute = function (nums) {
	var result = [];
	rePermute([], nums, nums.length);
	return result;
	function rePermute (arr, nums, len) {
		if (arr.length === len) {
			result.push(arr);
			return;
		}
		for (var i = 0; i < nums.length; i++) {
			rePermute(arr.concat([nums[i]]), nums.slice(0, i).concat(nums.slice(i + 1)), len);
		}
	}
};

console.log(permute([1, 2, 3])); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


