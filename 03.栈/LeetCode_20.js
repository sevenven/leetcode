// https://leetcode-cn.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
// 暴力求解：不断replace匹配的括号 --> ""
// 使用了正则表达式 会很慢
var isValid = function (s) {
	while (s.match(/\(\)\[\]\{\}/)) {
		s = s.replace(/\(\)\[\]\{\}/, '');
	}
	return s === '';
};

/**
 * @param {string} s
 * @return {boolean}
 */
// 左括号入栈 时间复杂度O(n) 空间复杂度O(n)
var isValid = function (s) {
	var map = {'(': ')', '[': ']', '{': '}'},
		stack = [];
	for (si of s) {
		if (map[si]) {
			stack.push(si);
		} else if (stack.length === 0 || si !== map[stack.pop()]) {
			return false;
		}
	}
	return stack.length === 0;
};

/**
 * @param {string} s
 * @return {boolean}
 */
// 右括号入栈 时间复杂度O(n) 空间复杂度O(n)
var isValid = function (s) {
	var map = {'(' : ')', '[': ']', '{': '}'},
		stack = [];
	for (si of s) {
		if (map[si]) {
			stack.push(map[si]);
		} else if (stack.length === 0 || si !== stack.pop()) {
			return false;
		}
	}
	return stack.length === 0;
};

console.log(isValid("()[]{}")); // true
console.log(isValid("([)]")); // false
console.log(isValid("")); //true