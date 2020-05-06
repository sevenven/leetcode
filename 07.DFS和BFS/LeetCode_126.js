// https://leetcode-cn.com/problems/word-ladder-ii/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */

// BFS + DFS
var findLadders = function(beginWord, endWord, wordList) {
	var queue = [beginWord],
		words = [],
		wordSet = new Set(wordList),
		level = 1,
		levelMap = {},
		wordMap = {},
		result = [];
	levelMap[beginWord] = level;
	for (var i = 0; i < 26; i++)
		words.push(String.fromCharCode(97 + i))
	while (queue.length > 0) {
		var len = queue.length;
		level++;
		for (var i = 0; i < len; i++) {
			var cur = queue.shift();
			for (word of nextWord(cur, words, wordSet)) {
				if (!wordMap[word]) 
					wordMap[word] = {}
				wordMap[word][cur] = true;
				if (levelMap[word] === undefined) {
					levelMap[word] = level;
					queue.push(word);
				}
			}
		}
	}
	dfs (result, [endWord], endWord, beginWord, wordMap, levelMap)
	return result;
};

function dfs (result, path, curWord, beginWord, wordMap, levelMap) {
	if (curWord === beginWord) 
		result.push(path)
	for (word in wordMap[curWord]) {
		if (levelMap[word] + 1 === levelMap[curWord]) 
			dfs(result, [word].concat(path), word, beginWord, wordMap, levelMap);
	}
}

function nextWord (cur, words, wordSet) {
	var result = [];
	for (var j = 0; j < cur.length; j++) {
		for (var k = 0; k < words.length; k++) {
			if (cur[j] === words[k]) continue;
			var curChange = cur.slice(0, j) + words[k] + cur.slice(j + 1);
			if (wordSet.has(curChange)) 
				result.push(curChange);                
		}
	}
	return result;
}

console.log(findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog', 'coi', 'hpt']));
// console.log(findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));
// console.log(findLadders('a', 'c', ['a', 'b', 'c']));