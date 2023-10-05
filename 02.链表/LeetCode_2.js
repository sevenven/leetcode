// https://leetcode.cn/problems/add-two-numbers
// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// function ListNode(val, next) {
//   this.val = val;
//   this.next = next || null;
// }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2, rest = 0) {
  if (!l1 && !l2 && !rest) return null;
  const newVal = (l1?.val || 0) + (l2?.val || 0) + rest;
  const nextNode = addTwoNumbers(l1?.next, l2?.next, Math.floor(newVal / 10));
  return new ListNode(newVal % 10, nextNode);
};
