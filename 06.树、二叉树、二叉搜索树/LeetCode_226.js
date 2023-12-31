// https://leetcode-cn.com/problems/invert-binary-tree/
// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 递归交换 
// 时间复杂度O(logn) 空间复杂度O(logn)
var invertTree = function (root) {
	if (!root) return null;
	var tmp = root.left;
	root.left = root.right;
	root.right = tmp;
	invertTree(root.left);
	invertTree(root.right);
	return root;
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 迭代交换 
// 时间复杂度O(logn) 空间复杂度O(logn)
var invertTree = function (root) {
	if (!root) return null;
	var queue = [root];
	while (queue.length) {
		var cur = queue.shift(),
			tmp = cur.left;
		cur.left = cur.right;
		cur.right = tmp;
		if (cur.left) queue.push(cur.left);
		if (cur.right) queue.push(cur.right);
	}
	return root;
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
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(4);
bst.insert(5);
bst.insert(8);
console.log(bst.root);
console.log(invertTree(bst.root));