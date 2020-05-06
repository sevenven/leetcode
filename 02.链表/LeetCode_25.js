// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/

// var _head = new ListNode(null),
// 	prev = _head,
// 	end = _head;
// _head.next = head;
// while (end) {
// 	for (var i = 0; i < k && end; i++) end = end.next;
// 	if (!end) break;
// 	var start = prev.next,
// 		next = end.next;
// 	end.next = null;
// 	prev.next = reverseList(start);
// 	start.next = next;
// 	prev = start;
// 	end = start;
// }
// return _head.next;
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 非递归解法 时间复杂度O(n) 空间复杂度O(1)
var reverseKGroup = function (head, k) {
	var _head = new ListNode(null),
		prev = _head,
		end = _head;
	prev.next = head;
	while (end) {
		for (var i = 0; i < k && end; i++) end = end.next;
		if (!end) break;
		var start = prev.next, 
			next = end.next;
		end.next = null;
		prev.next = reverseList(start);
		start.next = next;
		prev = start;
		end = start;
	}
	return _head.next;
};

function reverseList(head) {
	var prev = null,
		cur = head;
	while (cur) {
		var next = cur.next;
		cur.next = prev;
		prev = cur;
		cur = next;
	}
	return prev;
}

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

var linkList = new LinkList();
linkList.append(1);
linkList.append(2);
linkList.append(3);
linkList.append(4);
linkList.append(5);
linkList.append(6);
linkList.append(7);

var result = reverseKGroup(linkList.head, 3);
console.log(result);
console.log(result.next.next.next);
console.log(result.next.next.next.next.next.next);