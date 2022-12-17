// https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 
// 求在该柱状图中，能够勾勒出来的矩形的最大面积。

/**
 * @param {number[]} heights
 * @return {number}
 */
// 暴力破解 时间复杂度O(n^2) 空间复杂度O(1)
var largestRectangleArea = function (heights) {
	var maxarea = 0;
	for (var i = 0; i < heights.length; i++) {
		var minHeight = heights[i]
		for (var j = i; j < heights.length; j++) {
			minHeight = Math.min(minHeight, heights[j]);
			maxarea = Math.max(maxarea, (j - i + 1) * minHeight);
		}
	}
	return maxarea;
};

/**
 * @param {number[]} heights
 * @return {number}
 */
// 使用栈找出左右两边比自身高的柱子 入栈时候还存在的柱子是左边界 出栈时候枚举到的柱子是右边界 
// 时间复杂度O(n) 空间复杂度O(n)
var largestRectangleArea = function (heights) {
	var stack = [-1],
		maxarea = 0;
	for (var i = 0; i < heights.length; i++) {
		while (stack.top() !== -1 && heights[i] < heights[stack.top()]) {
			maxarea = Math.max(maxarea, heights[stack.pop()] * (i - 1 - stack.top()));
		}
		stack.push(i);
	}
	while (stack.top() !== -1) {
		maxarea = Math.max(maxarea, heights[stack.pop()] * (heights.length - 1 - stack.top()));
	}
	return maxarea;
};

Array.prototype.top = function () {
	return this[this.length - 1];
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
console.log(largestRectangleArea([1, 1, 7])); // 7