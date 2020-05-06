// https://leetcode-cn.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
// 回溯解法
var generateParenthesis = function (n) {
	var result = [];
	generate(0, 0, '', n);
	return result;
	function generate (left, right, s, n) {
		if (left === n && right === n) {
			result.push(s);
			return;
		}
		if (left < n) generate(left + 1, right, s + '(', n);
		if (right < left) generate(left, right + 1, s + ')', n);
	}
};

var result = generateParenthesis(3);
console.log(result);