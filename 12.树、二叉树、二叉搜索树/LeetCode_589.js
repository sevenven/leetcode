// https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/

/**
 * @param {Node} root
 * @return {number[]}
 */
// 递归遍历
// 时间复杂度O(n) 空间复杂度O(logn)
var preorder = function(root) {
	var result = [];
	order(root);
	return result;
	function order(root) {
		if (root === null) return;
		result.push(root.val);
		for (child of root.children) 
			order(child);
	}
};

/**
 * @param {Node} root
 * @return {number[]}
 */
// 使用栈
// 时间复杂度O(n) 空间复杂度O(n)
var preorder = function(root) {
	if (root === null) return [];
	var stack = [root],
			result = [];
	while (stack.length > 0) {
		var cur = stack.pop();
		result.push(cur.val);
		for (var i = cur.children.length - 1; i >= 0; i--) 
			stack.push(cur.children[i]);
	}
	return result;
};