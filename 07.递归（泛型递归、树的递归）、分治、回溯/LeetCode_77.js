// https://leetcode-cn.com/problems/combinations/
// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
// 你可以按 任何顺序 返回答案。

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// 回溯 + 剪枝解法
var combine = function (n, k) {
	var result = [];
	rcombine([], 1, n, k);
	return result;
	function rcombine(arr, begin, n, k) {
		if (arr.length === k) {
			result.push(arr);
			return;
		}
		for (var i = begin; i <= n - k + 1 + arr.length; i++) { // (n - k + 1 + arr.length)后面的数字是凑不够k个数量组合的，剪掉不用进入回溯了
			rcombine(arr.concat(i), i + 1, n, k);
		}
	}
};

console.log(combine(4, 1)); // [[1], [2], [3], [4]]
console.log(combine(4, 2)); // [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
console.log(combine(4, 3)); // [[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]
console.log(combine(4, 4)); // [[1, 2, 3, 4]]