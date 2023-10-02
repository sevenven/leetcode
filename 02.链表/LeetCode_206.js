// https://leetcode-cn.com/problems/reverse-linked-list/
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// LeetCode速度：1.指向前一个节点 2.递归 3.头插法

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 递归反转链表 时间复杂度O(n) 空间复杂度O(n)
var reverseList = function (head) {
  if (!head || !head.next) return head;
  var p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 将每个节点的next指向前一个节点 时间复杂度O(n) 空间复杂度O(1)
var reverseList = function (head) {
  var prev = null,
    cur = head;
  while (cur) {
    var next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 每次给头节点添加节点 时间复杂度O(n) 空间复杂度O(1)
var reverseList = function (head) {
  var _head = new ListNode(null),
    cur = head;
  while (cur) {
    var next = cur.next;
    cur.next = _head.next;
    _head.next = cur;
    cur = next;
  }
  return _head.next;
};

// 节点
function ListNode(val) {
  this.val = val;
  this.next = null;
}
// 链表
function LinkList() {
  this.head = null;
}
// 向链表节点末尾追加节点
LinkList.prototype.append = function (val) {
  var _new = new ListNode(val);
  if (!this.head) {
    this.head = _new;
    return;
  }
  var cur = this.head;
  while (cur.next) cur = cur.next;
  cur.next = _new;
};

var linkList = new LinkList();
linkList.append(1);
linkList.append(2);
linkList.append(3);
linkList.append(4);
linkList.append(5);

var p = reverseList(linkList.head);
console.log(p, p.next.next.next);
