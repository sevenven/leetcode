// https://leetcode.cn/problems/product-of-array-except-self/
// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
// 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 暴力解法
// 时间复杂度O(n^2) 空间复杂度O(1)
var productExceptSelf = function (nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue;
      answer[i] = answer[i] !== undefined ? answer[i] * nums[j] : nums[j];
    }
  }
  return answer;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 左侧乘积*右侧乘积
// 时间复杂度O(n) 空间复杂度O(n)
var productExceptSelf = function (nums) {
  let left = [],
    right = [],
    answer = [];
  left[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }
  right[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    answer[i] = left[i] * right[i];
  }
  return answer;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 左侧乘积*右侧乘积---代码优化
// 时间复杂度O(n^2) 空间复杂度O(1)
var productExceptSelf = function (nums) {
  let answer = [1],
    R = 1;
  for (let i = 1; i < nums.length; i++) {
    answer[i] = nums[i - 1] * answer[i - 1];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = answer[i] * R;
    R = R * nums[i];
  }
  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
