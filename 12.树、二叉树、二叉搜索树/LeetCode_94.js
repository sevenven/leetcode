// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/

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
	function traversal (root) {
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
// 莫里斯遍历
// 时间复杂度O(n) 空间复杂度O(1)
var inorderTraversal = function (root) {
	var cur = root,
		result = [];
	while (cur) {
		if (cur.left) {
			var pre = cur.left;
			while (pre.right) {
				pre = pre.right;
			}
			var tmp = cur;
			pre.right = cur;
			cur = cur.left;
			tmp.left = null;
		} else {
			result.push(cur.val);
			cur = cur.right;
		}
	}
	return result;
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

// 节点
function TreeNode (val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

// 二叉搜索树
function SearchTree () {
	this.root = null;
}

// 添加节点
SearchTree.prototype.insert = function (val) {
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