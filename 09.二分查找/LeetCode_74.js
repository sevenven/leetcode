// https://leetcode-cn.com/problems/search-a-2d-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	if (!matrix || !matrix.length) return false;
	var n = matrix.length,
		m = matrix[0].length,
		left = 0,
		right = m * n - 1;
	while (left <= right) {
		var mid = (left + right) >>> 1,
			midValue = matrix[Math.floor(mid / m)][mid % m];
		if (target === midValue) return true;
		if (target > midValue)
			left = mid + 1;
		else
			right = mid - 1;
	}
	return false;
};

var matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]];
console.log(searchMatrix(matrix, 3)); // true
console.log(searchMatrix(matrix, 13)); // false;