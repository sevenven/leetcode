// https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/

// 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
// 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return buildBST(nums, 0, nums.length - 1);
};

function buildBST(nums, begin, end) {
  if (begin > end) return null;
  const mid = (begin + end) >>> 1,
    root = new TreeNode(nums[mid]);
  root.left = buildBST(nums, begin, mid - 1);
  root.right = buildBST(nums, mid + 1, end);
  return root;
}
