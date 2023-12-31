// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// BFS解法
// 时间复杂度O(N) 空间复杂度O(n)
var levelOrder = function (root) {
	if (!root) return [];
	var queue = [root],
		level = 0,
		result = [];
	while (queue.length) {
		var len = queue.length;
		result[level] = [];
		for (var i = 0; i < len; i++) {
			var cur = queue.shift();
			result[level].push(cur.val);
			if (cur.left) {
				queue.push(cur.left);
			}
			if (cur.right) {
				queue.push(cur.right);
			}
		}
		level++;
	}
	return result;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// DFS解法(LeetCode上更快)
// 时间复杂度O(n) 空间复杂度O(n)
var levelOrder = function (root) {
	var result = [];
	order(root, 0);
	return result;
	function order (root, level) {
		if (!root) return;
		if (!result[level]) result[level] = [];
		result[level].push(root.val);
		order(root.left, level + 1);
		order(root.right, level + 1);
	}
};

// 节点
function TreeNode(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

// 二叉搜索树
function BinarySearchTree() {
	this.root = null;
}
// 添加节点
BinarySearchTree.prototype.insert = function (val) {
	if (val === null || val === undefined) return;
	var node = new TreeNode(val);
	if (!this.root) {
		this.root = node;
		return;
	}
	var cur = this._getTreeNode(val);
	if (val < cur.val)
		cur.left = node;
	else
		cur.right = node;
}
// 在树中遍历查找可以添加val的节点
BinarySearchTree.prototype._getTreeNode = function (val, find = false) {
	var cur = this.root;
	while (true) {
		if (val < cur.val) {
			if (!cur.left) break;
			cur = cur.left;
		}
		if (val >= cur.val) {
			if (!cur.right) break;
			cur = cur.right;
		}
	}
	return cur;
}

var bst = new BinarySearchTree();
bst.insert(9);
bst.insert(3);
bst.insert(2);
bst.insert(7);
bst.insert(20);
bst.insert(15);
bst.insert(22);

console.log(levelOrder(bst.root)) // [[9], [3, 20], [2, 7, 15, 22]]