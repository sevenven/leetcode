// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	if (root === null || root === p || root === q) return root;
	var left = lowestCommonAncestor(root.left, p, q);
	var right = lowestCommonAncestor(root.right, p, q);
	return left ? (right ? root : left) : right;
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
bst.insert(45);
bst.insert(40);
bst.insert(50);
bst.insert(35);
bst.insert(42);
bst.insert(48);

console.log(lowestCommonAncestor(bst.root, bst.root.left.left, bst.root.left.right)) // 40