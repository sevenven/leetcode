// https://leetcode-cn.com/problems/subsets/
// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯1
var subsets = function (nums, level = 0, arr = [], result = []) {
  if (level === nums.length) {
    result.push(arr);
    return;
  }
  subsets(nums, level + 1, arr, result);
  subsets(nums, level + 1, arr.concat(nums[level]), result);
  return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯2
var subsets = function (nums, arr = [], result = []) {
  result.push(arr);
  for (let i = 0; i < nums.length; i++)
    subsets(nums.slice(i + 1), arr.concat(nums[i]), result);
  return result;
};

console.log(subsets([1, 2, 3])); // [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
