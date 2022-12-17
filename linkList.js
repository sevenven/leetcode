// 不带头结点的单链表
// 比较简易的实现 默认不往链表中添加值重复的元素 默认非环形链表

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
	var node = new ListNode(val);
	if (this.head == null) {
		this.head = node;
		return;
	}
	var cur = this.head;
	while (cur.next)
		cur = cur.next;
	cur.next = node;
}

// 在指定元素后插入一个元素
LinkList.prototype.insert = function (val, newVal) {
	var node = new ListNode(newVal),
		cur = this.findByValue(val);
	if (cur === null) {
		console.log('未找到指定插入位置');
		return;
	}
	var tmp = cur.next;
	node.next = tmp;
	cur.next = node;
}

// 根据value查找节点
LinkList.prototype.findByValue = function (val) {
	var cur = this.head;
	while (cur && cur.val != val)
		cur = cur.next;
	return cur;
}

// 根据index查找节点 下标从0开始
LinkList.prototype.findByIndex = function (index) {
	var cur = this.head,
		count = 0;
	while (cur) {
		if (count === index) return cur;
		cur = cur.next;
		count++;
	}
	return null;
}

// 查找前一个
LinkList.prototype.findPrev = function (val) {
	var cur = this.head;
	while (cur.next && cur.next.val != val)
		cur = cur.next;
	return cur.next ? cur : null;
}

// 查找中间节点
LinkList.prototype.findMiddle = function () {
	var slow = this.head,
		fast = this.head;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}

// 查找倒数第n个节点
LinkList.prototype.findIndexFromEnd = function (n) {
	var fast = this.head,
		slow = this.head;
	while (fast && --n > 0) {
		fast = fast.next;
	}
	if (n > 0) return null;
	while (fast) {
		fast = fast.next;
		slow = slow.next;
	}
	return slow;
}

// 删除指定值的节点
LinkList.prototype.remove = function (val) {
	var cur = this.head;
	if (cur.val === val) {
		this.head = this.head.next;
		return;
	}
	while (cur.next && cur.next.val !== val)
		cur = cur.next;
	if (cur.next)
		cur.next = cur.next.next;
}

// 删除指定index的节点
LinkList.prototype.removeIndex = function (index) {
	var cur = this.head,
		count = 1;
	if (index === 0) {
		this.head = this.head.next;
		return;
	}
	while (cur.next && count++ === index)
		cur = cur.next;
	if (cur.next)
		cur.next = cur.next.next;
}

// 删除倒数第n个节点
LinkList.prototype.removeIndexFromEnd = function (n) {
	var node = this.findIndexFromEnd(n);
	if (!node) {
		console.log('链表长度不足');
		return;
	}
	var prev = this.findPrev(node);
	if (!prev) {
		this.head = this.head.next;
	} else {
		prev.next = prev.next.next;
	}
}

// 打印整个链表
LinkList.prototype.print = function () {
	var cur = this.head;
	while (cur) {
		console.log(cur.val);
		cur = cur.next;
	}
}

// 反转链表
LinkList.prototype.reverseList = function () {
	var prev = null,
		cur = this.head;
	while (cur) {
		var next = cur.next;
		cur.next = prev;
		prev = cur;
		cur = next;
	}
	return prev;
}

// 检测链表是否是环形链表
LinkList.prototype.checkCircle = function (head) {
	var fast = head,
		slow = head;
	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;
		if (fast === slow) return true;
	}
	return false;
}

// 判断链表是否为空
LinkList.prototype.isEmpty = function () {
	return this.head === null;
}

// 清空链表
LinkList.prototype.clear = function () {
	this.head = null;
}

var list = new LinkList();
list.append('zanzan');
list.append('bobo');
list.append('wangji');
list.insert('bobo', 'xianxian');
console.log(list.head);
// console.log(list.head.next.next.next);
// console.log(list.findByValue('wangji').val, list.findByValue('yun'))
// console.log(list.findByIndex(1).val, list.findByValue(5))
// console.log(list.findPrev('bobo').val)
// console.log(list.findMiddle().val);
// console.log(list.remove('xianxian'), list.head)
// console.log(list.removeIndex(0), list.removeIndex(1), list.head);
// console.log(list.removeIndexFromEnd(1), list.head)
// console.log(list.print());
// console.log(list.reverseList());


