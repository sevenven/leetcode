// https://leetcode-cn.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力破解 时间复杂度O(n^2) 空间复杂度O(1)
var twoSum = function (nums, target) {
	for (var i = 0; i < nums.length - 1; i++) {
		for (var j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) return [i, j];
		}
	}
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 使用哈希表快速查找 时间复杂度O(n) 空间复杂度O(n)
var twoSum = function (nums, target) {
	var exits = {};
	for (var i = 0; i < nums.length; i++) {
		exits[nums[i]] = i;
	}
	for (var i = 0; i < nums.length; i++) {
		var another = target - nums[i];
		if (exits[another] !== undefined && exits[another] !== i) return [i, exits[another]];
	}
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 使用对象实现快速查找 时间复杂度O(n) 空间复杂度O(n) --> 代码优化
var twoSum = function (nums, target) {
	var exits = {};
	for (var i = 0; i < nums.length; i++) {
		var another = target - nums[i];
		if (exits[another] !== undefined) return[exits[another], i];
		exits[nums[i]] = i;
	}
};

var res = twoSum([2, 7, 11, 15], 13) // [0, 2]
console.log(res)