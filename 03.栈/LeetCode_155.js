// https://leetcode-cn.com/problems/min-stack/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
	this.element = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
	this.element.push({
		value: x,
		min: this.element.length === 0 ? x : Math.min(x, this.getMin())
	})
};

/**
 * @return {number}
 */
MinStack.prototype.pop = function () {
	return this.element.length === 0 ? undefined : this.element.pop().value;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.element.length === 0 ? undefined : this.element[this.element.length-1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.element.length === 0 ? undefined : this.element[this.element.length-1].min;
};

var minStack = new MinStack();
minStack.push(3);
minStack.push(5);
minStack.push(1);
minStack.push(7);
minStack.push(4);
console.log(minStack.pop()); // 4
console.log(minStack.top()); // 7
console.log(minStack.getMin()); // 1
