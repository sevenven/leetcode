// https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/
// 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// BFS解法
// 时间复杂度O(n) 空间复杂度O(logn)
var largestValues = function (root) {
	if (!root) return [];
	var queue = [root],
		level = 0,
		maxArr = [];
	while (queue.length) {
		var len = queue.length;
		for (var i = 0; i < len; i++) {
			var cur = queue.shift();
			maxArr[level] = maxArr[level] === undefined ? cur.val : Math.max(maxArr[level], cur.val);
			if (cur.left) {
				queue.push(cur.left);
			}
			if (cur.right) {
				queue.push(cur.right);
			}
		}
		level++;
	}
	return maxArr;
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// DFS解法
// 时间复杂度O(n) 空间复杂度O(logn) 
var largestValues = function (root) {
	var maxArr = [];
	largest(root, 0);
	return maxArr;
	function largest (root, level) {
		if (!root) return;
		maxArr[level]  = maxArr[level] === undefined ? root.val : Math.max(maxArr[level], root.val);
		largest(root.left, level + 1);
		largest(root.right, level + 1);
	}
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
bst.insert(9);
bst.insert(3);
bst.insert(2);
bst.insert(7);
bst.insert(20);
bst.insert(15);
bst.insert(22);

console.log(largestValues(bst.root)); // [9, 20, 22]