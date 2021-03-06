// https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/

/**
 * @param {Node} root
 * @return {number[]}
 */
// 递归遍历
// 时间复杂度O(n) 空间复杂度O(logn)
var postorder = function (root) {
	var result = [];
	order(root);
	return result;
	function order (root) {
		if (!root) return;
		for (child of root.children) {
			order(child);
		}
		result.push(root.val);
	}
};

// 使用栈
var postorder = function (root) {
	if (root === null) return [];
	var stack = [root],
		result = [];
	while (stack.length > 0) {
		var cur = stack.pop();
		result.unshift(cur.val);
		for (child of cur.children) {
			stack.push(child)
		}
	}
	return result;
};