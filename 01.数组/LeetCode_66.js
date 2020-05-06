// https://leetcode-cn.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	for (var i = digits.length - 1; i >= 0; i--) {
		if (digits[i] + 1 !== 10) {
			digits[i] += 1;
			break;
		} else {
			digits[i] = 0;
			if (i === 0) {
				digits.unshift(1);
			}
		}
	}
	return digits;
};

console.log(plusOne([1, 2, 3]))
console.log(plusOne([9, 9, 9]))
console.log(plusOne([9]))