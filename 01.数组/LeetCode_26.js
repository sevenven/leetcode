// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 快慢指针法
// 时间复杂度O(n) 空间复杂度O(1)
var removeDuplicates = function (nums) {
	if (!nums || !nums.length) return;
	var pos = 0;
	for (var i = 1; i < nums.length; i++) {
		if (nums[pos] !== nums[i]) {
			nums[++pos] = nums[i]
		}
	}
	return nums.length = pos + 1;
};

var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums), nums) // 5