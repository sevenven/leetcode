// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
	if (preorder.length === 0) return null;
	var root = new TreeNode(preorder[0]),
			mid = inorder.indexOf(preorder[0]);
	root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
	root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
	return root;
}

// 节点
function TreeNode (val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

var result = buildTree([3,9,20,15,7], [9,3,15,20,7]);
console.log(result)