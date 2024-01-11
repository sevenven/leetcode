// https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
// 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

/**
 * @param {Node} root
 * @return {number[][]}
 */
// 递归
// 时间复杂度O(n) 空间复杂度O(n)
var levelOrder = function (root, level = 0, result = []) {
  if (!root) return result;
  if (!result[level]) result[level] = [];
  result[level].push(root.val);
  for (let child of root.children) levelOrder(child, level + 1, result);
  return result;
};

/**
 * @param {Node} root
 * @return {number[][]}
 */
// 使用队列
// 时间复杂度O(n) 空间复杂度O(n)
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [{ node: root, level: 0 }],
    result = [],
    cur;
  while (queue.length) {
    cur = queue.shift();
    if (!result[cur.level]) result[cur.level] = [];
    result[cur.level].push(cur.node.val);
    for (let child of cur.node.children)
      queue.push({ node: child, level: cur.level + 1 });
  }
  return result;
};
