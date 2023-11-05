// https://leetcode-cn.com/problems/3sum/
// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0
// 请你返回所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 暴力破解 时间复杂度O(n^3) 空间复杂度O(1)
var threeSum = function (nums) {
  const result = [];
  // 排序----改变了入参-实际写业务代码的时候一定要慎重
  nums.sort((a, b) => a - b);
  // 三重for循环
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0)
          result.push([nums[i], nums[j], nums[k]]);
        while (nums[k + 1] === nums[k]) k++;
      }
    }
  }
  return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 排序加hash表 时间复杂度O(n^2) 空间复杂度O(n)
// a + b + c = 0 -> a + b = -c
var threeSum = function (nums) {
  const result = [];
  // 排序----改变了入参-实际写业务代码的时候一定要慎重
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const exits = {};
    for (let j = i + 1; j < nums.length; j++) {
      const another = -nums[i] - nums[j];
      if (exits[another] !== undefined) {
        result.push([nums[i], another, nums[j]]);
        while (nums[j + 1] === nums[j]) j++;
      }
      exits[nums[j]] = j;
    }
  }
  return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 排序加双指针 时间复杂度O(n^2) 空间复杂度O(1)----看着时间复杂度一样-->其实这个跑的比hash表那个快
var threeSum = function (nums) {
  const result = [];
  // 排序----改变了入参-实际写业务代码的时候一定要慎重
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let L = i + 1,
      R = nums.length - 1;
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        result.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L + 1] === nums[L]) L++;
        while (L < R && nums[R - 1] === nums[R]) R--;
        L++;
        R--;
      } else if (sum < 0) {
        L++;
      } else if (sum > 0) {
        R--;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
