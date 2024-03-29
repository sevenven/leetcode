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
var postorderTraversal = function (root) {};
