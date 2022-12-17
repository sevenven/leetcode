// https://leetcode-cn.com/problems/valid-parentheses/
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

/**
 * @param {string} s
 * @return {boolean}
 */
// 暴力求解：不断replace匹配的括号 --> ""
// 使用了正则表达式 会很慢
var isValid = function (s) {
	while (s) {
		var tmp = s;
		s = s.replace(/\(\)/, '');
		s = s.replace(/\{\}/, '');
		s = s.replace(/\[\]/, '');
		if (s === tmp) return false;
	}
	return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
// 左括号入栈 时间复杂度O(n) 空间复杂度O(n)
var isValid = function (s) {
	var map = { '(': ')', '[': ']', '{': '}' },
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
	var stack = [];
	for (var si of s) {
		if (si === '(') {
			stack.push(')');
		} else if (si === '[') {
			stack.push(']');
		} else if (si === '{') {
			stack.push('}');
		} else if (stack.length === 0 || stack.pop() !== si) {
			return false;
		}
	}
	return stack.length === 0;
};

console.log(isValid("()[]{}")); // true
console.log(isValid("([)]")); // false
console.log(isValid("")); //true