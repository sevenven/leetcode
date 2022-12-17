// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归遍历
// 时间复杂度O(n) 空间复杂度O(logn)
var inorderTraversal = function (root) {
	var result = [];
	traversal(root);
	return result;
	function traversal(root) {
		if (!root) return;
		traversal(root.left);
		result.push(root.val);
		traversal(root.right);
	}
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 基于栈遍历
// 时间复杂度O(n) 空间复杂度O(n)
var inorderTraversal = function (root) {
	var cur = root,
		stack = [],
		result = [];
	while (cur || stack.length) {
		while (cur) {
			stack.push(cur);
			cur = cur.left;
		}
		cur = stack.pop();
		result.push(cur.val);
		cur = cur.right;
	}
	return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 莫里斯遍历
// 时间复杂度O(n) 空间复杂度O(1)
var inorderTraversal = function (root) {
	var cur = root,
		predecessor = null,
		result = [];
	while (cur) {
		if (cur.left) {
			// predecessor 节点就是当前 root 节点向左走一步，然后一直向右走至无法走为止
			predecessor = cur.left;
			while (predecessor.right && predecessor.right !== root)
				predecessor = predecessor.right;

			if (!predecessor.right) { // 让 predecessor 的右指针指向 root，继续遍历左子树
				predecessor.right = cur;
				cur = cur.left;
			} else { // 说明左子树已经访问完了，我们需要断开链接
				result.push(cur.val);
				predecessor.right = null;
				cur = cur.right;
			}
		} else { // 如果没有左孩子，则直接访问右孩子
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
	var cur = this._getTreeNode(val);
	if (val < cur.val)
		cur.left = node;
	else
		cur.right = node;
}

// 在树中遍历查找可以添加val的节点
SearchTree.prototype._getTreeNode = function (val) {
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

var searchTree = new SearchTree();
searchTree.insert(2);
searchTree.insert(1);
searchTree.insert(3);

console.log(searchTree.root)
console.log(inorderTraversal(searchTree.root)); // [ 1, 2, 3 ]