// https://leetcode.cn/problems/insert-delete-getrandom-o1/

// 实现RandomizedSet 类：

// RandomizedSet() 初始化 RandomizedSet 对象
// bool insert(int val) 当元素 val 不存在时，向集合中插入该项，并返回 true ；否则，返回 false 。
// bool remove(int val) 当元素 val 存在时，从集合中移除该项，并返回 true ；否则，返回 false 。
// int getRandom() 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。每个元素应该有 相同的概率 被返回。
// 你必须实现类的所有函数，并满足每个函数的 平均 时间复杂度为 O(1) 。

var RandomizedSet = function () {
  this.nums = [];
  this.exits = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.exits.has(val)) return false;
  this.nums.push(val);
  this.exits.set(val, this.nums.length - 1);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.exits.has(val)) return false;
  let index = this.exits.get(val);
  this.nums[index] = this.nums[this.nums.length - 1];
  this.exits.set(this.nums[index], index);
  this.nums.pop();
  this.exits.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.nums.length);
  return this.nums[randomIndex];
};

var obj = new RandomizedSet();
var param_1 = obj.insert(val);
var param_2 = obj.remove(val);
var param_3 = obj.getRandom();
