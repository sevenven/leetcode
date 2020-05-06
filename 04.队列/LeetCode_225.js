// https://leetcode-cn.com/problems/implement-stack-using-queues/

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
	this.queue = [];
	this.tmp = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(element) {
	this.queue.push(element);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
	while (this.queue.length > 1) {
		this.tmp.push(this.queue.shift());
	}
	var element = this.queue.shift();
	this.queue = this.tmp;
	this.tmp = [];
	return element;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
	while (this.queue.length > 1) {
		this.tmp.push(this.queue.shift());
	}
	var element = this.queue.shift();
	this.tmp.push(element);
	this.queue = this.tmp;
	this.tmp = []
	return element;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
	return !this.queue.length;
};


var obj = new MyStack();
console.log(obj.push(1), obj.queue); // undefined [ 1 ]
console.log(obj.push(2), obj.queue); // undefined [ 1, 2 ]
console.log(obj.top(), obj.queue); // 2 [ 1, 2 ]
console.log(obj.pop(), obj.queue); // 2 [ 1 ]
console.log(obj.empty(), obj.queue); // false [ 1 ]
 
 