// https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
// 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

/**
 * @param {Node} root
 * @return {number[][]}
 */
// 递归
// 时间复杂度O(n) 空间复杂度O(n)
var levelOrder = function (root) {
	var result = [];
	order(0, root);
	return result;
	function order(level, root) {
		if (!root) return;
		if (result[level] === undefined) result[level] = [];
		result[level].push(root.val);
		for (child of root.children) {
			order(level + 1, child)
		}
	}
};

/**
 * @param {Node} root
 * @return {number[][]}
 */
// 使用队列
// 时间复杂度O(n) 空间复杂度O(n)
var levelOrder = function (root) {
	if (!root) return [];
	var queue = [{ level: 0, node: root }],
		result = [];
	while (queue.length) {
		var cur = queue.shift(),
			level = cur.level;
		if (!result[level])
			result[level] = [];
		result[level].push(cur.node.val);
		for (child of cur.node.children)
			queue.push({ level: level + 1, node: child });
	}
	return result;
};
