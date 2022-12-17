// https://leetcode-cn.com/problems/merge-two-sorted-lists/
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// LeetCode速度：1.递归写法 2.非递归写法
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 递归写法
// 时间复杂度O(n + m) 空间复杂度O(n + m)
var mergeTwoLists = function (l1, l2) {
	if (!l1) return l2;
	if (!l2) return l1;
	if (l1.val <= l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	} else {
		l2.next = mergeTwoLists(l1, l2.next);
		return l2;
	}
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 非递归写法
// 时间复杂度O(n + m) 空间复杂度O(1)
var mergeTwoLists = function (l1, l2) {
	var _head = new ListNode(null),
		cur = _head;
	while (l1 && l2) {
		if (l1.val <= l2.val) {
			cur.next = l1;
			l1 = l1.next;
		} else {
			cur.next = l2;
			l2 = l2.next;
		}
		cur = cur.next;
	}
	cur.next = l1 ? l1 : l2;
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
	while (cur.next)
		cur = cur.next;
	cur.next = _new;
}

var linkList1 = new LinkList();
linkList1.append(1);
linkList1.append(2);
linkList1.append(4);

var linkList2 = new LinkList();
linkList2.append(1);
linkList2.append(3);
linkList2.append(4);

var head = mergeTwoLists(linkList1.head, linkList2.head)
console.log(head)
console.log(head.next.next.next)