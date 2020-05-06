// https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
// 超出时间限制了

var serialize = function (root) {
	if (root === null) return 'null,'
	return root.val + ',' + serialize(root.left) + serialize(root.right);
};

var deserialize = function (data) {
	var arr = data.split(',');
	arr.pop();
	return redeserialize(arr)
	function redeserialize(arr) {
		if (arr.length === 0) return null;
		var root = new TreeNode(arr[0]);
		root.left = redeserialize(arr.slice(1));
		root.right = redeserialize(arr.slice(2));
		return root;
	}
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

// [1,3,null,null,4]
var searchTree = new SearchTree();
searchTree.insert(40);
searchTree.insert(25);
searchTree.insert(55);
searchTree.insert(45);
searchTree.insert(60);

console.log(searchTree.root);
// console.log(serialize(searchTree.root));
console.log(deserialize(serialize(searchTree.root)))