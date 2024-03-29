// https://leetcode.cn/problems/binary-tree-right-side-view/

// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

/**
 * @param {TreeNode} root
 * @return {number[]}x
 */
var rightSideView = function (root, level = 0, result = []) {
  if (!root) return result;
  if (result[level] === undefined) result.push(root.val);
  rightSideView(root.right, level + 1, result);
  rightSideView(root.left, level + 1, result);
  return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  let queue = [root],
    result = [],
    len,
    cur;
  while (queue.length) {
    len = queue.length;
    for (let i = 0; i < len; i++) {
      cur = queue.shift();
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
      if (i === len - 1) result.push(cur.val);
    }
  }
  return result;
};
