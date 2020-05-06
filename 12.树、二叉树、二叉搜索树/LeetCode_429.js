// https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/

/**
 * @param {Node} root
 * @return {number[][]}
 */
// 使用队列
// 时间复杂度O(n) 空间复杂度O(n)
var levelOrder = function(root) {
	if (root === null) return [];
	var queue = [{level: 0, node: root}],
			result =[];
	while (queue.length > 0) {
		var cur = queue.shift(),
				level = cur.level;
		if (!result[level]) 
			result[level] = [];
		result[level].push(cur.node.val);
		for (child of cur.node.children) 
			queue.push({level: level + 1, node: child});
	}
	return result;
};
