// https://leetcode-cn.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯法
var subsets = function(nums) {
	var result = [];
	sub([], nums)
	return result;
	function sub (arr, nums) {
		result.push(arr);
		for (var i = 0; i < nums.length; i++) {
			sub(arr.concat(nums[i]), nums.slice(i + 1));
		}
	}
};

console.log(subsets([1, 2, 3])) // [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]