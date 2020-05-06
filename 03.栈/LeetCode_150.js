// https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
// 第一遍完成
// 第二遍完成

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
	var operator = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
		'*': (a, b) => a * b,
		'/': (a, b) => Math.trunc(a / b)},
	stack = [];
	for (token of tokens) {
		if (!operator[token]) {
			stack.push(token);
		} else {
			var exp2 = stack.pop() * 1,
				exp1 = stack.pop() * 1;
			stack.push(operator[token](exp1, exp2));
		}
	}
	return stack.pop();
};

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // 22