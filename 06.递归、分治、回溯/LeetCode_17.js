// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
// 给出数字到字母的映射如下（与电话按键相同）(看下面的map定义)。注意 1 不对应任何字母。

/**
 * @param {string} digits
 * @return {string[]}
 */
// 回溯解法
var letterCombinations = function (digits) {
	var map = {
		'2': 'abc', 
		'3': 'def', 
		'4': 'ghi', 
		'5': 'jkl', 
		'6': 'mno', 
		'7': 'pqrs', 
		'8': 'tuv', 
		'9': 'wxyz', 
	};
	var result = [];
	combine('', digits, digits.length);
	return result;
	function combine (str, digits, len) {
		if (len > 0 && str.length === len) {
			result.push(str);
			return;
		}
		var cur = digits.length > 0 ? map[digits.slice(0, 1)] : '';
		for (c of cur) {
			combine(str + c, digits.slice(1), len);
		}
	}
};

console.log(letterCombinations("23")); // ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']

