// https://leetcode.cn/problems/merge-k-sorted-lists/
// 给你一个链表数组，每个链表都已经按升序排列。
// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

// function ListNode(val, next) {
//   this.val = val;
//   this.next = next || null;
// }

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 暴力求解
// 时间复杂度O(nlogn) 空间复杂度O(n): 暂存空间O(n)-输出空间O(n)
var mergeKLists = function (lists) {
	let head = (cur = new ListNode()),
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
// 时间复杂度O(m * n) 空间复杂度O(1): 暂存数据O(1)
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
	let _head = (cur = new ListNode());
	while (list1 && list2) {
		if (list1.val <= list2.val) {
			[cur.next, list1] = [list1, list1.next];
		} else {
			[cur.next, list2] = [list2, list2.next];
		}
		cur = cur.next;
	}
	cur.next = list1 || list2;
	return _head.next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 分治合并链表
// 时间复杂度O(nlogn) 空间复杂度O(logn): 栈帧空间O(logn) 暂存数据O(1)
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists, L = 0, R = lists.length - 1) {
	if (L >= R) return lists[L] || null;
	const mid = (L + R) >> 1;
	return mergeTwoList(mergeKLists(lists, L, mid), mergeKLists(lists, mid + 1, R));
};

function mergeTwoList(list1, list2) {
	let _head = (cur = new ListNode());
	while (list1 && list2) {
		if (list1.val <= list2.val) {
			[cur.next, list1] = [list1, list1.next];
		} else {
			[cur.next, list2] = [list2, list2.next];
		}
		cur = cur.next;
	}
	cur.next = list1 || list2;
	return _head.next;
}
