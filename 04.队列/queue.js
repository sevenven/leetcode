function Queue() {
	this.elements = [];
}

Queue.prototype.enqueue = function (element) {
	this.elements.push(element)
}

Queue.prototype.dequeue = function () {
	return this.elements.shift()
}

Queue.prototype.head = function () {
	return this.elements[0];
}

Queue.prototype.tail = function () {
	return this.elements[this.elements.length - 1];
}

Queue.prototype.size = function () {
	return this.elements.length;
}

Queue.prototype.clear = function () {
	this.elements.length = 0;
}

Queue.prototype.isEmpty = function () {
	return this.elements.length === 0;
}
