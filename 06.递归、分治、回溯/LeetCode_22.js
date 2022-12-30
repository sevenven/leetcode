// https://leetcode-cn.com/problems/generate-parentheses/
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

/**
 * @param {number} n
 * @return {string[]}
 */
// 回溯解法
var generateParenthesis = function (n) {
	var result = [];
	generate(0, 0, '', n);
	return result;
	function generate (left, right, str, n) {
		if (left === n && right === n) {
			result.push(str);
			return;
		}
		if (left < n) generate(left + 1, right, str + '(', n);
		if (right < left) generate(left, right + 1, str + ')', n);
	}
};

var result = generateParenthesis(3);
console.log(result);