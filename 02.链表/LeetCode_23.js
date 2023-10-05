// https://leetcode.cn/problems/merge-k-sorted-lists/
// 给你一个链表数组，每个链表都已经按升序排列。
// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

// function ListNode(val, next) {
//   this.val = val;
//   this.next = next || null;
// }

// 按理说几种方法时间复杂度是递减的 实际上LeetCode上跑出来的时间大差不差

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 暴力求解
var mergeKLists = function (lists) {
  let cur = (head = new ListNode()),
    vals = [];
  // 时间复杂度O(n) 空间复杂度O(n)
  for (list of lists) {
    while (list) {
      vals.push(list.val);
      list = list.next;
    }
  }
  // 时间复杂度O(nlogn)
  vals.sort((a, b) => a - b);
  // 时间复杂度O(n) 空间复杂度O(n)
  for (val of vals) {
    cur.next = new ListNode(val);
    cur = cur.next;
  }
  return head.next;
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 逐一两两合并链表
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  while (lists.length >= 2) {
    const newList = mergeTwoList(lists.shift(), lists.shift());
    lists.push(newList);
  }
  return lists[0] || null;
};

function mergeTwoList(list1, list2) {
  if (!list1 || !list2) return list1 || list2;
  if (list1.val <= list2.val) {
    list1.next = mergeTwoList(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoList(list1, list2.next);
    return list2;
  }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 分治合并链表
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists, L = 0, R = lists.length) {
  if (L === R) return lists[L] || null;
  const mid = (L + R) >>> 1;
  return mergeTwoList(
    mergeKLists(lists, L, mid),
    mergeKLists(lists, mid + 1, R)
  );
};

function mergeTwoList(list1, list2) {
  if (!list1 || !list2) return list1 || list2;
  if (list1.val <= list2.val) {
    list1.next = mergeTwoList(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoList(list1, list2.next);
    return list2;
  }
}
