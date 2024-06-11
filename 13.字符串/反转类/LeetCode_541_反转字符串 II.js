// https://leetcode-cn.com/problems/reverse-string-ii/

// 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
// 如果剩余字符少于 k 个，则将剩余字符全部反转。
// 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
	let arr = s.split(''),
		L,
		R;
	for (let i = 0; i < arr.length; i += 2 * k) {
		L = i;
		R = (i + k <= arr.length ? i + k : arr.length) - 1;
		while (L < R) [arr[L++], arr[R--]] = [arr[R], arr[L]];
	}
	return arr.join('');
};

console.log(reverseStr('abcdefg', 2)); // bacdfeg
console.log(reverseStr('abcd', 2)); // bacd
