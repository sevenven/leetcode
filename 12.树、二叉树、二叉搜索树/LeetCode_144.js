// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归遍历
// 时间复杂度O(n) 空间复杂度O(logn)
var preorderTraversal = function (root) {
	var result = [];
	traversal(root);
	return result;
	function traversal(root) {
		if (!root) return;
		result.push(root.val);
		traversal(root.left);
		traversal(root.right);
	}
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 使用栈
// 时间复杂度O(n) 空间复杂度O(n)
var preorderTraversal = function (root) {
	if (!root) return;
	var stack = [root],
		result = [];
	while (stack.length) {
		var cur = stack.pop();
		result.push(cur.val);
		if (cur.right) stack.push(cur.right);
		if (cur.left) stack.push(cur.left);
	}
	return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 莫里斯遍历
// 时间复杂度O(n) 空间复杂度O(1)
var preorderTraversal = function (root) {
	var cur = root,
		predecessor = null,
		result = [];
	while (cur) {
		if (cur.left) {
			predecessor = cur.left;
			while (predecessor.right && predecessor.right !== cur)
				predecessor = predecessor.right;
			if (!predecessor.right) {
				result.push(cur.val);
				predecessor.right = cur;
				cur = cur.left;
			} else {
				predecessor.right = null;
				cur = cur.right;
			}
		} else {
			result.push(cur.val);
			cur = cur.right;
		}
	}
	return result;
};

// 节点
function TreeNode(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

// 二叉搜索树
function SearchTree() {
	this.root = null;
}

// 添加节点
SearchTree.prototype.insert = function (val) {
	if (val === null || val === undefined) return;
	var node = new TreeNode(val);
	if (!this.root) {
		this.root = node;
		return;
	}
	var curNode = this._getTreeNode(val);
	if (val < curNode.val)
		curNode.left = node;
	else
		curNode.right = node;
}

// 在树中遍历查找可以添加val的节点
SearchTree.prototype._getTreeNode = function (val) {
	var curNode = this.root;
	while (true) {
		if (val < curNode.val) {
			if (!curNode.left) break;
			curNode = curNode.left;
		}
		if (val >= curNode.val) {
			if (!curNode.right) break;
			curNode = curNode.right;
		}
	}
	return curNode;
}

var searchTree = new SearchTree();
searchTree.insert(2);
searchTree.insert(1);
searchTree.insert(3);

console.log(preorderTraversal(searchTree.root)); // [ 2, 1, 3 ]