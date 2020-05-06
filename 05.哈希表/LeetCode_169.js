// https://leetcode-cn.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力法
// 时间复杂度O(n^2) 空间复杂度O(1)
var majorityElement = function (nums) {
	var majorityCount = Math.floor(nums.length / 2);
	for (var i = 0; i < nums.length; i++) {
		var count = 0;
		for (var j = 0; j < nums.length; j++) {
			if (nums[i] === nums[j]) {
				count++;
			}
		}
		if (count > majorityCount) return nums[i];
	}
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// 哈希表
// 时间复杂度O(n) 空间复杂度O(n)
var majorityElement = function (nums) {
	var count = {}, 
		majorityCount = Math.floor(nums.length / 2);
	for (num of nums) {
		if (!count[num]) {
			count[num] = 0;
		}
		count[num]++;
	}
	for (key in count) {
		if (count[key] > majorityCount) return key * 1;
	}
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序
// 时间复杂度O(nlogn) 空间复杂度O(1)
var majorityElement = function(nums) {
	nums.sort(function (a, b) {return a - b;});
	return nums[Math.floor(nums.length / 2)];
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([1, 2, 1, 1, 1, 2, 2])); // 1