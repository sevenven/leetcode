// https://leetcode-cn.com/problems/invert-binary-tree/
// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 递归交换
// 时间复杂度O(logn) 空间复杂度O(logn)
var invertTree = function (root) {
  if (!root) return null;
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 迭代交换
// 时间复杂度O(logn) 空间复杂度O(logn)
var invertTree = function (root) {
  if (!root) return null;
  let queue = [root],
    cur;
  while (queue.length) {
    cur = queue.shift();
    [cur.left, cur.right] = [cur.right, cur.left];
    cur.left && queue.push(cur.left);
    cur.right && queue.push(cur.right);
  }
  return root;
};
