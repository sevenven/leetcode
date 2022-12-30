// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
// 给定一个二叉树，找出其最小深度。
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
// 说明：叶子节点是指没有子节点的节点。

/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归遍历 时间复杂度O(logn)
var minDepth = function(root) {
	if (root === null) return 0;
	// 当 root 节点左右孩子有一个为空时，返回不为空的孩子节点的深度
	if (!root.left || !root.right) return Math.max(minDepth(root.left), minDepth(root.right)) + 1;
	return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

// 节点
function TreeNode (val) {
	this.val = val;
	this.left = null;
	this.right = null;
}
// 二叉搜索树
function BinarySearchTree () {
	this.root = null;
}
// 添加节点
BinarySearchTree.prototype.insert = function (val) {
	if(val === null || val === undefined) return;
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
console.log(minDepth(bst.root)); // 2