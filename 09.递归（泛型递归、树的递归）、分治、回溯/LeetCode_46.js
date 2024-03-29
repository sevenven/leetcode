// https://leetcode-cn.com/problems/permutations/
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯解法
var permute = function (nums, len = nums.length, arr = [], result = []) {
  if (arr.length === len) result.push(arr);
  for (let i = 0; i < nums.length; i++) {
    permute(
      nums.slice(0, i).concat(nums.slice(i + 1)),
      len,
      arr.concat(nums[i]),
      result
    );
  }
  return result;
};

console.log(permute([1, 2, 3])); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
