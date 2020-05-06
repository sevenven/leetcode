// https://leetcode-cn.com/problems/permutations-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯+剪枝解法
var permuteUnique = function (nums) {
	var result = [];
	repermuteUnique([], nums, nums.length);
	return result;
	function repermuteUnique(arr, nums, len) {
		if (arr.length === len) {
			result.push(arr);
			return;
		}
		var used = {};
		for (var i = 0; i < nums.length; i++) {
			if (used[nums[i]]) continue;
			used[nums[i]] = true;
			repermuteUnique(arr.concat([nums[i]]), nums.slice(0, i).concat(nums.slice(i + 1)), len);
		}
	}
};

console.log(permuteUnique([3, 3, 0, 3]))