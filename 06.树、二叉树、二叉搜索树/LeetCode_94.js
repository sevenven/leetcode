// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归遍历
// 时间复杂度O(n) 空间复杂度O(logn)
var inorderTraversal = function (root, result = []) {
  if (!root) return result;
  inorderTraversal(root.left, result);
  result.push(result.val);
  inorderTraversal(root.right, result);
  return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 基于栈遍历
// 时间复杂度O(n) 空间复杂度O(n)
var inorderTraversal = function (root) {
  let cur = root,
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
  let cur = root,
    pre,
    result = [];
  while (cur) {
    if (cur.left) {
      // pre->中序遍历当中cur的上一个节点
      pre = cur.left;
      while (pre.right && pre.right !== cur) pre = pre.right;
      if (!pre.right) {
        // 让 pre 的右指针指向 cur，继续遍历左子树
        [pre.right, cur] = [cur, cur.left];
      } else {
        // 说明当前节点的左子树已经访问完了，当前节点进入result
        result.push(cur.val);
        [pre.right, cur] = [null, cur.right];
      }
    } else {
      // 如果没有左孩子 就可以加入到result中
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
  if (val < cur.val) cur.left = node;
  else cur.right = node;
};

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
};

var searchTree = new SearchTree();
searchTree.insert(2);
searchTree.insert(1);
searchTree.insert(3);

console.log(searchTree.root);
console.log(inorderTraversal(searchTree.root)); // [ 1, 2, 3 ]
