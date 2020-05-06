// https://leetcode-cn.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯法
var subsets = function(nums) {
	var result = [];
	sub([], nums, nums.length);
	return result;
	function sub (arr, nums, len) {
		result.push(arr);
		if (arr.length === len) return;
		for (var i = 0; i < nums.length; i++) 
			sub(arr.concat(nums[i]), nums.slice(i + 1), len);
	}
};

console.log(subsets([1, 2, 3]))