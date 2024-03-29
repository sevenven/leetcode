// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
// 给定一个二叉树，找出其最小深度。
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
// 说明：叶子节点是指没有子节点的节点。

/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归遍历 时间复杂度O(logn)
var minDepth = function (root) {
  if (!root) return 0;
  // 当 root 节点左右孩子有一个为空时，返回不为空的孩子节点的深度
  if (!root.left || !root.right)
    return 1 + Math.max(minDepth(root.left), minDepth(root.right));
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
