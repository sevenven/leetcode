// https://leetcode-cn.com/problems/implement-queue-using-stacks/

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
	this.stack = [];
	this.tmp = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} element
 * @return {void}
 */
MyQueue.prototype.push = function(element) {
	this.stack.push(element);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
	while (this.stack.length > 1) {
		this.tmp.push(this.stack.pop());
	}
	var element = this.stack.pop();
	while (this.tmp.length !== 0) {
		this.stack.push(this.tmp.pop());
	}
	return element;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
	while (this.stack.length > 1) {
		this.tmp.push(this.stack.pop());
	}
	var element = this.stack.pop();
	this.tmp.push(element);
	while (this.tmp.length !== 0) {
		this.stack.push(this.tmp.pop());
	}
	return element;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
	return !this.stack.length;
};

var obj = new MyQueue();
console.log(obj.push(1), obj.stack); // undefined [ 1 ]
console.log(obj.push(2), obj.stack); // undefined [ 1, 2 ]
console.log(obj.peek(), obj.stack); // 1 [ 1, 2 ]
console.log(obj.pop(), obj.stack); // 1 [ 2 ]
console.log(obj.empty(), obj.stack); // false [ 2 ]