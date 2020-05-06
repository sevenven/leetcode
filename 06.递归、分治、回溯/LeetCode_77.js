// https://leetcode-cn.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// 回溯 + 剪枝解法
var combine = function (n, k) {
	var result = [];
	recombine(1, [], n, k);
	return result;
	function recombine (begin, arr, n, k) {
		if (arr.length === k) {
			result.push(arr);
			return;
		}
		for (var i = begin; i <= n - k + 1 + arr.length; i++) 
			recombine(i + 1, arr.concat([i]), n, k);
	}
};

console.log(combine(4, 1));
console.log(combine(4, 2));
console.log(combine(4, 3));
console.log(combine(4, 4));