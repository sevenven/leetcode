// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
// 回溯解法
var letterCombinations = function (digits) {
	var map = {
		"2": "abc",
		"3": "def",
		"4": "ghi",
		"5": "jkl",
		"6": "mno",
		"7": "pqrs",
		"8": "tuv",
		"9": "wxyz"
	},
	result = [];
	combinations('', digits, digits.length)
	return result;
	function combinations (str, digits, len) {
		if (str.length === len) 
			result.push(str);
		var cur = digits.length > 0 ? map[digits.slice(0, 1)] : [];
		for (c of cur) 
			combinations(str + c, digits.slice(1), len);
	}
};

console.log(letterCombinations("23"))

