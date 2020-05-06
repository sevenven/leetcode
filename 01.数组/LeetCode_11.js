// https://leetcode-cn.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力破解 时间复杂度O(n^2) 空间复杂度O(1)
var maxArea = function (height) {
	var maxarea = 0;
	for (var i = 0; i < height.length - 1; i++) {
		for (var j = 0; j < height.length; j++) {
			maxarea = Math.max(maxarea, (j - i) * Math.min(height[i], height[j]));
		}
	}
	return maxarea;
};

/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针法 时间复杂度O(n) 空间复杂度O(1)
var maxArea = function (height) {
	var L = 0,
		R = height.length - 1,
		maxarea = 0;
	while (L < R) {
		var minHeight = height[L] < height[R] ? height[L++] : height[R--];
		maxarea = Math.max(maxarea, (R - L + 1) * minHeight);
	}
	return maxarea;
}

var maxarea = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) // 49
console.log(maxarea)