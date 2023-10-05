// 带头结点的单链表
// 比较简易的实现 默认不往链表中添加值重复的元素 默认非环形链表

// 结点
function ListNode(val, next) {
  this.val = val;
  this.next = next || null;
}

// 链表
function LinkList() {
  this.head = new listNode(null);
}

// 向链表节点末尾追加结点
LinkList.prototype.append = function (val) {
  var _new = new ListNode(val);
  var cur = this.head;
  while (cur.next) {
    cur = cur.next;
  }
  cur.next = _new;
};

// 在指定元素后插入一个元素
LinkList.prototype.insert = function (val, newVal) {};

// 根据value查找结点
LinkList.prototype.findByValue = function () {};

// 根据index查找节点 下标从0开始
LinkList.prototype.findByIndex = function () {};

// 查找前一个结点
LinkList.prototype.findPrev = function () {};

// 查找中间结点
LinkList.prototype.findMiddleNode = function () {};

// 删除指定值的结点
LinkList.prototype.remove = function (val) {};

// 删除指定index的结点
LinkList.prototype.removeIndex = function (index) {};

// 删除倒数第n个结点
LinkList.prototype.removeIndexFromEnd = function (index) {};

// 打印整个链表
LinkList.prototype.print = function () {};

// 反转链表
LinkList.prototype.reverseList = function (head) {};

// 检测链表是否是环形链表
LinkList.prototype.checkCircle = function (head) {};

// 判断链表是否为空
LinkList.prototype.isEmpty = function () {};

// 清空链表
LinkList.prototype.clear = function () {};
