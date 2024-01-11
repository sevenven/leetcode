// https://leetcode.cn/problems/binary-tree-postorder-traversal/
// 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归遍历
// 时间复杂度O(n) 空间复杂度O(logn)
var postorderTraversal = function (root, result = []) {
  if (!root) return result;
  postorderTraversal(root.left, result);
  postorderTraversal(root.right, result);
  result.push(root.val);
  return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 基于栈遍历
// 时间复杂度O(n) 空间复杂度O(n)
var postorderTraversal = function (root) {
  let cur = root,
    stack = [],
    result = [];
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    if (!cur.right || cur.right.val === result[result.length - 1]) {
      result.push(cur.val);
      cur = null;
    } else {
      stack.push(cur);
      cur = cur.right;
    }
  }
  return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 莫里斯遍历
// 时间复杂度O(n) 空间复杂度O(1)
// var postorderTraversal = function (root) {
// };

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
  if (val < curNode.val) curNode.left = node;
  else curNode.right = node;
};

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
};

var searchTree = new SearchTree();
searchTree.insert(2);
searchTree.insert(1);
searchTree.insert(3);

console.log(postorderTraversal(searchTree.root)); // [ 1, 3, 2 ]
