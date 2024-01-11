// https://leetcode-cn.com/problems/validate-binary-search-tree/
// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

// 有效 二叉搜索树定义如下：
// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 递归
var isValidBST = function (root) {
  return isValid(root, null, null);
  function isValid(root, pre, next) {
    if (!root) return true;
    if (pre && pre.val >= root.val) return false;
    if (next && next.val <= root.val) return false;
    // 由上向下递归，将当前节点值作为，左节点的最大限制值，右节点的最小限制值
    return (
      isValidBST(root.left, pre, root) && isValidBST(root.right, root, next)
    );
  }
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 中序遍历
var isValidBST = function (root) {
  var cur = root,
    stack = [],
    pre = null;
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    if (pre && pre.val >= cur.val) return false;
    pre = cur;
    cur = cur.right;
  }
  return true;
};

// 节点
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
// 二叉搜索树
function BinarySearchTree() {
  this.root = null;
}
// 添加节点
BinarySearchTree.prototype.insert = function (val) {
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
};

var bst = new BinarySearchTree();
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(4);
bst.insert(5);
bst.insert(8);
console.log(isValidBST(bst.root));
