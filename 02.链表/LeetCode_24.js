// https://leetcode-cn.com/problems/swap-nodes-in-pairs/
// LeetCode速度：1.递归写法 2.非递归写法

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 递归解法 时间复杂度O(n) 空间复杂度O(n)
var swapPairs = function (head) {
	if (!head || !head.next) return head;
	var next = head.next;
	head.next = swapPairs(next.next);
	next.next = head;
	return next;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 非递归解法 时间复杂度O(n) 空间复杂度O(1)
var swapPairs = function (head) {
	var _head = new ListNode(null),
		prev = _head;
	prev.next = head;
	while (prev.next && prev.next.next) {
		var first = prev.next,
			second = prev.next.next;
		prev.next = second;
		first.next = second.next;
		second.next = first;
		prev = first;
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
	this.head = null
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

var linkList = new LinkList()
linkList.append(1)
linkList.append(2)
linkList.append(3)
linkList.append(4)
linkList.append(5)

var root = swapPairs(linkList.head)
console.log(root)
console.log(root.next.next.next)
