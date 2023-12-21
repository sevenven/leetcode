// https://leetcode-cn.com/problems/implement-queue-using-stacks/
// 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：

// 实现 MyQueue 类：

// void push(int x) 将元素 x 推到队列的末尾
// int pop() 从队列的开头移除并返回元素
// int peek() 返回队列开头的元素
// boolean empty() 如果队列为空，返回 true ；否则，返回 false
// 说明：

// 你 只能 使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
// 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stack = [];
  this.temp = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} element
 * @return {void}
 */
MyQueue.prototype.push = function (element) {
  this.stack.push(element);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.stack.length) {
    this.temp.push(this.stack.pop());
  }
  let element = this.stack.pop();
  while (this.temp.length) {
    this.stack.push(this.temp.pop());
  }
  return element;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.stack.length) {
    this.temp.push(this.stack.pop());
  }
  let element = this.stack.pop();
  this.temp.push(element);
  while (this.temp.length) {
    this.stack.push(this.temp.pop());
  }
  return element;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stack.length;
};

var obj = new MyQueue();
console.log(obj.push(1), obj.stack); // undefined [ 1 ]
console.log(obj.push(2), obj.stack); // undefined [ 1, 2 ]
console.log(obj.peek(), obj.stack); // 1 [ 1, 2 ]
console.log(obj.pop(), obj.stack); // 1 [ 2 ]
console.log(obj.empty(), obj.stack); // false [ 2 ]
