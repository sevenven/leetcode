// 节点
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// 二叉搜索树
function BinarySearchTree() {
  this.root = null;
}

// 查找节点
BinarySearchTree.prototype.find = function (num) {
  return this._find(num)[0];
};

// 添加节点
BinarySearchTree.prototype.insert = function (num) {
  // 若树为空，则初始化根节点
  if (!this.root) {
    this.root = new TreeNode(num);
    return;
  }
  const [cur] = this._find(num, false);
  // 插入节点
  const node = new TreeNode(num);
  if (num < cur.val) cur.left = node;
  else if (num > cur.val) cur.right = node;
};

// 删除节点
BinarySearchTree.prototype.delete = function (num) {
  const [cur, pre] = this._find(num);
  // 若无待删除节点，则直接返回
  if (!cur) return;
  if (!cur.left || !cur.right) {
    // 子节点数量 = 0 or 1
    const child = cur.left ? cur.left : cur.right;
    if (cur === this.root) {
      this.root = child;
    } else {
      if (cur === pre.left) pre.left = child;
      else pre.right = child;
    }
  } else {
    // 子节点数量 = 2
    // 获取中序遍历中 cur 的下一个节点
    let next = cur.right;
    while (next.left) next = next.left;
    // 递归删除节点 next
    this.delete(next.val);
    // 用 next 覆盖 cur
    cur.val = next.val;
  }
};

// 中序遍历
BinarySearchTree.prototype.inorderTraversal = function (root) {
  if (!root) return [];
  let stack = [],
    result = [],
    cur = root;
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    result.push(cr.val);
    cur = cur.right;
  }
  return result;
};

// 此方法默认查找val为num的节点本身，findExact为true时查找的是可插入值为num节点的节点
BinarySearchTree.prototype._find = function (num, findExact = true) {
  let cur = this.root,
    pre;
  // 循环查找，越过叶节点后跳出
  while (cur) {
    if (num < cur.val) {
      // 目标节点在cur的左子树中
      if (!findExact && !cur.left) break;
      [pre, cur] = [cur, cur.left];
    } else if (num > cur.val) {
      // 目标节点在cur的右子树中
      if (!findExact && !cur.right) break;
      [pre, cur] = [cur, cur.right];
    } else break; // 找到目标节点，跳出循环
  }
  return [cur, pre];
};
