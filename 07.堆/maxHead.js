class MaxHead {
	constructor() {
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
		return !this.maxHead.length;
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
		return (i - 1) >>> 1;
		// return Math.floor((i - 1) / 2); // 向下整除
	}

	/* 从节点 i 开始，从底至顶堆化 */
	siftUp(i) {
		while (true) {
			// 获取节点 i 的父节点
			const p = this.parent(i);
			// 当“越过根节点”或“节点无须修复”时，结束堆化
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
			// 判断节点 i, l, r 中值最大的节点，记为 ma
			const l = this.left(i),
				r = this.right(i);
			let ma = i;
			if (l < this.size() && this.maxHead[l] > this.maxHead[ma]) ma = l;
			if (r < this.size() && this.maxHead[r] > this.maxHead[ma]) ma = r;
			// 若节点 i 最大或索引 l, r 越界，则无须继续堆化，跳出
			if (ma === i) break;
			// 交换两节点
			[this.maxHeap[i], this.maxHeap[ma]] = [this.maxHeap[ma], this.maxHeap[i]];
			// 循环向下堆化
			i = ma;
		}
	}
}
