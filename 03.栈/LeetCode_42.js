// https://leetcode-cn.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力破解 时间复杂度O(n^2) 空间复杂度O(1)
var trap = function(height) {
	var ans = 0;
	for (var i = 1; i < height.length - 1; i++) {
		var maxLeft = height[i],
			maxRight = height[i];
		for (var j = 0; j < i; j++) {
			maxLeft = Math.max(maxLeft, height[j]);
		}
		for (var j = i + 1; j < height.length; j++) {
			maxRight = Math.max(maxRight, height[j]);
		}
		ans += Math.min(maxLeft, maxRight) - height[i];
	}
	return ans;
};

/**
 * @param {number[]} height
 * @return {number}
 */
// 遍历存储每个格子的左边最高墙和右边最高墙 时间复杂度O(n) 空间复杂度O(n)
var trap = function(height) {
	var maxLeft = [],
		maxRight = [],
		ans = 0;
	maxLeft[0] = height[0];
	for (var i = 1; i < height.length - 1; i++) {
		maxLeft[i] = Math.max(maxLeft[i-1], height[i]);
	}
	maxRight[height.length-1] = height[height.length-1];
	for (var i = height.length - 2; i >= 1; i--) {
		maxRight[i] = Math.max(maxRight[i+1], height[i]);
	}
	for (var i = 1; i < height.length - 1; i++) {
		ans += Math.min(maxLeft[i], maxRight[i]) - height[i]
	}
	return ans;
};

// var stack = [],
// 		ans = 0;
// for (var i = 0; i < height.length; i++) {
// 	while (stack.length > 0 && height[i] > height[stack.top()]) {
// 		var cur = stack.pop();
// 		if (stack.length <= 0) break;
// 		var width = i - 1 - stack.top();
// 		var minHeight = Math.min(height[stack.top()], height[i]);
// 		ans += width * (minHeight - height[cur]);
// 	}
// 	stack.push(i);
// }
// return ans;
/**
 * @param {number[]} height
 * @return {number}
 */
// 使用栈查找左右边界
var trap = function(height) {
	var stack = [],
		ans = 0;
	for (var i = 0; i < height.length; i++) {
		while (stack.length > 0 && height[i] > height[stack.top()]) {
			var cur = stack.pop();
			if (stack.length === 0) break;
			var width = i - 1 - stack.top();
			var minHeight = Math.min(height[stack.top()], height[i]);
			ans += width * (minHeight - height[cur]);
		}
		stack.push(i);
	}
	return ans;
};

Array.prototype.top = function () {
	return this[this.length - 1]
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // 6
console.log(trap([4, 2, 0, 3, 2, 5])) // 9