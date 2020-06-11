// https://leetcode-cn.com/problems/permutations-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯+剪枝解法
var permuteUnique = function (nums) {
	var result = [];
	rePermuteUnique([], nums, nums.length);
	return result;
	function rePermuteUnique (arr, nums, len) {
		if (arr.length === len) {
			result.push(arr);
			return;
		}
		var used = {};
		for (var i = 0; i < nums.length; i++) {
			if (!used[nums[i]]) {
				used[nums[i]] = true;
				rePermuteUnique(arr.concat([nums[i]]), nums.slice(0, i).concat(nums.slice(i+1)), len);
			}
		}
	}
};

console.log(permuteUnique([3, 3, 0, 3])) // [[3, 3, 0, 3], [3, 3, 3, 0], [3, 0, 3, 3], [0, 3, 3, 3]]