// https://leetcode-cn.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 按排序数组分类 
// 时间复杂度O(nklogk) 空间复杂度O(n)
var groupAnagrams = function(strs) {
	var charObj = {},
		charArr = [];
	for (str of strs) {
		var key = str.split('').sort().join('');
		if (!charObj[key]) 
			charObj[key] = [];
		charObj[key].push(str);
	}
	for (key in charObj) {
		charArr.push(charObj[key]);
	}
	return charArr;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 按计数分类
//  时间复杂度O(nk) 空间复杂度O(n)
var groupAnagrams = function(strs) {
	var charObj = {},
		charArr = [];
	for (str of strs) {
		var count = new Array(26).fill(0);
		for (s of str) {
			count[s.charCodeAt()-97]++;
		}
		var key = count.join('');
		if (!charObj[key]) {
			charObj[key] = [];
		}
		charObj[key].push(str);
	}
	for (key in charObj) {
		charArr.push(charObj[key]);
	}
	return charArr;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
