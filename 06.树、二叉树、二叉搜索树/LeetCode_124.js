// https://leetcode.cn/problems/binary-tree-maximum-path-sum/

// 二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。
// 路径和 是路径中各节点值的总和。
// 给你一个二叉树的根节点 root ，返回其 最大路径和 。

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = -Infinity;
  findSums(root);
  return max;

  function findSums(root) {
    if (!root) return 0;
    let left = findSums(root.left),
      right = findSums(root.right),
      allSum = left + right + root.val,
      leftNodeSum = left + root.val,
      rightNodeSum = right + root.val;
    max = Math.max(max, root.val, allSum, leftNodeSum, rightNodeSum);
    return Math.max(leftNodeSum, rightNodeSum, root.val);
  }
};
