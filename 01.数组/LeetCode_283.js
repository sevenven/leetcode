// https://leetcode-cn.com/problems/move-zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 暴力破解1 自己移动元素
// 时间复杂度O(n^2) 空间复杂度O(1)
var moveZeroes = function (nums) {
	var len = nums.length;
	for (var i = 0; i < len; i++) {
		if (nums[i] === 0) {
			for (var j = i + 1; j < len; j++) {
				nums[j-1] = nums[j];
			}
			nums[len-1] = 0;
			i--;
			len--;
		}
	}
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 暴力破解2 使用Array.prototype.splice
// 时间复杂度O(n^2) 空间复杂度O(1)
var moveZeroes = function (nums) {
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			nums.push(0);
		}
	}
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 快慢指针法1 时间复杂度O(n) 空间复杂度O(1)
var moveZeroes = function (nums) {
	var j = 0;
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			var tmp = nums[j];
			nums[j++] = nums[i];
			nums[i] = tmp;
		}
	}
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 快慢指针法2 时间复杂度O(n) 空间复杂度O(1)
var moveZeroes = function (nums) {
	var j = 0;
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[j] = nums[i];
			if (i !== j) {
				nums[i] = 0;
			}
			j++;
		}
	}
};

var nums = [1, 0, 3, 0, 12]
moveZeroes(nums)
console.log(nums) // [1, 3, 12, 0, 0]