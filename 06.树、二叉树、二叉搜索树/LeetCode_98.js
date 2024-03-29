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
var isValidBST = function (root, pre = null, next = null) {
  if (!root) return true;
  if (pre && pre.val >= root.val) return false;
  if (next && root.val >= next.val) return false;
  return isValidBST(root.left, pre, root) && isValidBST(root.right, root, next);
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 中序遍历
var isValidBST = function (root) {
  let cur = root,
    stack = [],
    pre;
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    if (pre && pre.val >= cur.val) return false;
    [pre, cur] = [cur, cur.right];
  }
  return true;
};
