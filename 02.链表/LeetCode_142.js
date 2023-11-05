// https://leetcode-cn.com/problems/linked-list-cycle-ii/
// 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

// function ListNode(val, next) {
//   this.val = val;
//   this.next = next || null;
// }

// LeetCode速度：1.Floyd算法 2.哈希表

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 哈希表(使用ES6 Set) 时间复杂度O(n) 空间复杂度O(n)
var detectCycle = function (head) {
  var exist = new Set(),
    cur = head;
  while (cur) {
    if (exist.has(cur)) return cur;
    exist.add(cur);
    cur = cur.next;
  }
  return null;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 快慢指针法 时间复杂度O(n) 空间复杂度O(1)
var detectCycle = function (head) {
  let ptr1 = getIntersection(head);
  if (!ptr1) return null;
  let ptr2 = head;
  while (ptr1 !== ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }
  return ptr1;
};

function getIntersection(head) {
  let slow = (fast = head);
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return fast;
  }
  return null;
}

// 节点
function ListNode(val, next) {
  this.val = val;
  this.next = next || null;
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

var cur = linkList.head;
while (cur.next) {
  cur = cur.next;
}
cur.next = linkList.head.next.next;

var result = detectCycle(linkList.head);
console.log(result);
