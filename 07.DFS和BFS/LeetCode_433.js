// https://leetcode-cn.com/problems/minimum-genetic-mutation/

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
// 无向无权图单向BFS解法 在进入下一层的时候加1
// 时间复杂度O(mnk) 空间复杂度(1)
var minMutation = function (start, end, bank) {
	var queue = [start],
		level = 0,
		genes = ['A', 'C', 'G', 'T'],
		bankSet = {};
	while (bank.length) {
		bankSet[bank.shift()] = true;
	}
	while (queue.length) {
		var len = queue.length;
		for (var i = 0; i < len; i++) {
			var cur = queue.shift();
			if (cur === end) return level;
			for (var j = 0; j < cur.length; j++) {
				for (var k = 0; k < genes.length; k++) {
					if (cur[j] !== genes[k]) {
						var curChange = cur.slice(0, j) + genes[k] + cur.slice(j + 1);
						if (bankSet[curChange]) {
							queue.push(curChange);
							delete bankSet[curChange];
						}
					}
				}
			}
		}
		level++;
	}
	return -1;
};
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
// DFS解法
// var minMutation = function (start, end, bank) {
// };

console.log(minMutation("AACCGGTT", "AACCGGTA", ["AACCGGTA"])) // 1
console.log(minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"])) // 2
