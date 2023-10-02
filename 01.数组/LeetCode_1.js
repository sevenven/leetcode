// https://leetcode-cn.com/problems/two-sum/
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力破解 时间复杂度O(n^2) 空间复杂度O(1)
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 使用对象实现快速查找 时间复杂度O(n) 空间复杂度O(n)
var twoSum = function (nums, target) {
  const exits = {};
  for (let i = 0; i < nums.length; i++) exits[nums[i]] = i;
  for (let j = 0; j < nums.length; j++) {
    const another = target - nums[j];
    if (exits[another] !== undefined && exits[another] !== j)
      return [j, exits[another]];
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 使用对象实现快速查找 时间复杂度O(n) 空间复杂度O(n) --> 代码优化
var twoSum = function (nums, target) {
  const exits = {};
  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    if (exits[another] !== undefined) return [exits[another], i];
    exits[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 13)); // [0, 2]
