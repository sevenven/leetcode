// https://leetcode-cn.com/problems/word-ladder/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// 无向无权图单向BFS解法 在进入下一层的时候加1
// 时间复杂度O(mnk) 空间复杂度(1)
var ladderLength = function(beginWord, endWord, wordList) {
	var queue = [beginWord],
		words = [],
		wordSet = {},
		level = 1;
	while (wordList.length) 
		wordSet[wordList.shift()] = true;
	for (var i = 0; i < 26; i++) 
		words.push(String.fromCharCode(i + 97));
	while (queue.length > 0) {
		var len = queue.length;
		for (var i = 0; i < len; i++) {
			var cur = queue.shift();
			if (cur === endWord) return level;
			for (var j = 0; j < cur.length; j++) {
				for (var k = 0; k < words.length; k++) {
					if (cur[j] !== words[k]) {
						var curChange = cur.slice(0, j) + words[k] + cur.slice(j + 1);
						if (wordSet[curChange]) {
							queue.push(curChange);
							delete wordSet[curChange];
						}
					}
				}
			}
		}
		level++;
	}
	return 0;
};

console.log(ladderLength('hit', 'cog', ['cog'])); // 0
console.log(ladderLength('hit', 'hit', ['hit'])); // 1
console.log(ladderLength('a', 'c', ['a','b','c'])); // 2
console.log(ladderLength('hit', 'cog', ['hot','dot','dog','lot','log','cog'])); // 5