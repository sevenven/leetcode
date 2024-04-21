/* 大顶堆 */
class MaxHead {
	constructor() {
		// 使用数组存储大顶堆
		this.maxHeap = [];
	}

	/* 元素入堆 */
	push(val) {
		// 添加节点
		this.maxHeap.push(val);
		// 从底至顶堆化
		this.siftUp(this.size() - 1);
	}

	/* 元素出堆 */
	pop() {
		// 判空处理
		if (this.isEmpty()) throw new Error('堆为空');
		// 交换根节点与最右叶节点（交换首元素与尾元素）
		[this.maxHeap[0], this.maxHeap[this.size() - 1]] = [this.maxHeap[this.size() - 1], this.maxHeap[0]];
		// 删除节点
		const val = this.maxHeap.pop();
		// 从顶至底堆化
		this.siftDown(0);
		// 返回堆顶元素
		return val;
	}

	/* 访问堆顶元素 */
	peek() {
		return this.maxHeap[0];
	}

	/* 获取堆的元素数量 */
	size() {
		return this.maxHeap.length;
	}

	/* 判断堆是否为空 */
	isEmpty() {
		return !this.maxHeap.length;
	}

	/* 从节点 i 开始，从底至顶堆化 */
	siftUp(i) {
		while (true) {
			// 获取节点 i 的父节点
			const p = MaxHead.parent(i);
			// 当[越过根节点]或[节点无须修复]时 结束堆化
			if (p < 0 || this.maxHeap[i] <= this.maxHeap[p]) break;
			// 交换两节点
			[this.maxHeap[i], this.maxHeap[p]] = [this.maxHeap[p], this.maxHeap[i]];
			// 循环向上堆化
			i = p;
		}
	}

	/* 从节点 i 开始，从顶至底堆化 */
	siftDown(i) {
		while (true) {
			// 判断节点 i, L, R 中值最大的节点，记为 max
			const L = MaxHead.left(i),
				R = MaxHead.right(i);
			let max = i;
			if (L < this.size() && this.maxHeap[L] > this.maxHeap[max]) max = L;
			if (R < this.size() && this.maxHeap[R] > this.maxHeap[max]) max = R;
			// 若节点 i 最大或索引 L, R 越界，则无须继续堆化，跳出
			if (max === i) break;
			// 交换两节点
			[this.maxHeap[i], this.maxHeap[max]] = [this.maxHeap[max], this.maxHeap[i]];
			// 循环向下堆化
			i = max;
		}
	}

	/* 获取左子节点的索引 */
	static left() {
		return 2 * i + 1;
	}

	/* 获取右子节点的索引 */
	static right() {
		return 2 * i + 2;
	}

	/* 获取父节点的索引 */
	static parent(i) {
		return (i - 1) >> 1; // 向下整除
	}
}

const maxHeap = new MaxHead();

maxHeap.push(14);
maxHeap.push(10);
maxHeap.push(16);
maxHeap.push(8);
maxHeap.push(7);
maxHeap.push(2);
maxHeap.push(4);
maxHeap.push(1);
maxHeap.push(9);
maxHeap.push(3);

console.log(maxHeap.maxHeap);
