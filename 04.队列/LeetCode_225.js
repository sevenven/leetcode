// https://leetcode-cn.com/problems/implement-stack-using-queues/
// 请你仅使用两个队列实现一个先入后出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。

// 实现 MyStack 类：
// void push(int x) 将元素 x 压入栈顶。
// int pop() 移除并返回栈顶元素。
// int top() 返回栈顶元素。
// boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。

// 注意：
// 你只能使用队列的基本操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。
// 你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。

/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue = [];
  this.temp = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (element) {
  this.queue.push(element);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.queue.length > 1) {
    this.temp.push(this.queue.shift());
  }
  const element = this.queue.shift();
  this.queue = this.temp;
  this.temp = [];
  return element;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.queue.length > 1) {
    this.temp.push(this.queue.shift());
  }
  const element = this.queue.shift();
  this.temp.push(element);
  this.queue = this.temp;
  this.temp = [];
  return element;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.queue.length;
};

const obj = new MyStack();
console.log(obj.push(1), obj.queue); // undefined [ 1 ]
console.log(obj.push(2), obj.queue); // undefined [ 1, 2 ]
console.log(obj.top(), obj.queue); // 2 [ 1, 2 ]
console.log(obj.pop(), obj.queue); // 2 [ 1 ]
console.log(obj.empty(), obj.queue); // false [ 1 ]
