// https://leetcode-cn.com/problems/design-circular-deque/

/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function (k) {
	this.element = [];
	this.head = 0;
	this.tail = 0;
	this.length = 0;
	this.size = k;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
	if (this.isFull()) return false;
	this.head = (this.head - 1 + this.size) % this.size;
	this.element[this.head] = value;
	this.length++;
	return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
	if (this.isFull()) return false;
	this.element[this.tail] = value;
	this.tail = (this.tail + 1) % this.size;
	this.length++;
	return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
	if (this.isEmpty()) return false;
	this.head = (this.head + 1) % this.size;
	this.length--;
	return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
	if (this.isEmpty()) return false;
	this.tail = (this.tail - 1 + this.size) / this.size;
	this.length--;
	return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
	if (this.isEmpty()) return -1;
	return this.element[this.head];
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
	if (this.isEmpty()) return -1;
	return this.element[(this.tail - 1 + this.size) % this.size];
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
	return this.length === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
	return this.length === this.size;
};

var cirDeque = new MyCircularDeque(5);
console.log(cirDeque.isEmpty());
cirDeque.insertFront(1);
cirDeque.insertFront(2);
cirDeque.insertFront(3);
cirDeque.insertLast(4);
cirDeque.insertLast(5);
cirDeque.insertLast(6);
console.log(cirDeque.getRear());
console.log(cirDeque.isFull());

