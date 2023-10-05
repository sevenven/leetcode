// https://leetcode.cn/problems/sort-list/
// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

// function ListNode(val, next) {
//   this.val = val;
//   this.next = next || null;
// }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head;
  const [left, right] = split(head);
  return merge(new ListNode(null), sortList(left), sortList(right));
};

function split(node) {
  let slow = (fast = node);
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const right = slow.next;
  slow.next = null;
  return [node, right];
}

function merge(root, left, right) {
  let cur = root;
  while (left && right) {
    if (left.val <= right.val) {
      cur.next = left;
      left = left.next;
    } else {
      cur.next = right;
      right = right.next;
    }
    cur = cur.next;
  }
  cur.next = left || right;
  return root.next;
}
