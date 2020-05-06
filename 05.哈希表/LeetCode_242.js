// https://leetcode-cn.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 暴力求解
// 时间复杂度O(nlogn) 空间复杂度O(n)
var isAnagram = function(s, t) {
	if (s.length !== t.length) return false;
	return s.split('').sort().join('') === t.split('').sort().join('');
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 哈希表(针对只有小写字母的字符串)
// 时间复杂度O(n) 空间复杂度O(1)
var isAnagram = function(s, t) {
	if (s.length !== t.length) return false;
	var count = new Array(26).fill(0);
	for (var i = 0; i < s.length; i++) {
		count[s[i].charCodeAt() - 97]++;
		count[t[i].charCodeAt() - 97]--;
	}
	for (c of count) {
		if (c !== 0) return false;
	}
	return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 哈希表(通用)
// 时间复杂度O(n) 空间复杂度O(n)
var isAnagram = function(s, t) {
	if (s.length !== t.length) return false;
	var count = {};
	for (c of s) {
		count[c] = count[c] === undefined ? 1 : ++count[c];
	}
	for (c of t) {
		count[c] = count[c] === undefined ? 1 : --count[c];
	}
	for (c in count) {
		if (count[c] !== 0) return false;
	}
	return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
console.log(isAnagram('', '')); // true