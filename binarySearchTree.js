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

// 查找节点
BinarySearchTree.prototype.find = function () {
}

// 删除节点
BinarySearchTree.prototype.delete = function () {
}

// 中序遍历
BinarySearchTree.prototype.inorderTraversal = function () {
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