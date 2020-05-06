// https://leetcode-cn.com/problems/sliding-window-maximum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 暴力求解 时间复杂度O(n*k) 空间复杂度O(1)
var maxSlidingWindow = function(nums, k) {
	var maxArr = [];
	for (var i = 0; i <= nums.length - k; i++) {
		var max = nums[i];
		for (var j = i + 1; j < i + k; j++) {
			max = Math.max(max, nums[j]);
		}
		maxArr.push(max);
	}
	return maxArr;
};

// for循环移动窗口 + 大顶堆
// for循环移动窗口 + O(logn)排序

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 使用双端队列
// 只保留当前滑动窗口中有的元素的索引。
// 保证当一个元素进入队列时 前面的元素都比进入队列的元素大
// 时间复杂度O(n) 空间复杂度O(1)
var maxSlidingWindow = function(nums, k) {
	var deque = [],
		maxArr = [];
	for (var i = 0; i < nums.length; i++) {
		if (deque.length > 0 && i - deque[0] === k) {
			deque.shift();
		}
		while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
			deque.pop();
		}
		deque.push(i);
		if (i >= k - 1) {
			maxArr.push(nums[deque[0]]);
		}
	}
	return maxArr;
};


console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)) // [ 3, 3, 5, 5, 6, 7 ]
console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3)) // [3, 3, 2, 5]
console.log(maxSlidingWindow([12, 3, 1, 15, 2], 3)) // [15, 15]