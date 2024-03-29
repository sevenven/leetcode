// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归遍历
// 时间复杂度O(n) 空间复杂度O(logn)
var preorderTraversal = function (root, result = []) {
  if (!root) return result;
  result.push(root.val);
  preorderTraversal(root.left, result);
  preorderTraversal(root.right, result);
  return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 使用栈
// 时间复杂度O(n) 空间复杂度O(n)
var preorderTraversal = function (root) {
  if (!root) return [];
  let stack = [root],
    result = [],
    cur;
  while (stack.length) {
    cur = stack.pop();
    result.push(cur.val);
    cur.right && stack.push(cur.right);
    cur.left && stack.push(cur.left);
  }
  return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 莫里斯遍历
// 时间复杂度O(n) 空间复杂度O(1)
var preorderTraversal = function (root) {
  let cur = root,
    pre,
    result = [];
  while (cur) {
    if (cur.left) {
      pre = cur.left;
      while (pre.right && pre.right !== cur) pre = pre.right;
      if (!pre.right) {
        result.push(cur.val);
        [pre.right, cur] = [cur, cur.left];
      } else {
        [pre.right, cur] = [null, cur.right];
      }
    } else {
      result.push(cur.val);
      cur = cur.right;
    }
  }
  return result;
};
