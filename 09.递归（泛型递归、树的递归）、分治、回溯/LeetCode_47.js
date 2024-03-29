// https://leetcode-cn.com/problems/permutations-ii/
// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯+剪枝解法
var permuteUnique = function (nums, len = nums.length, arr = [], result = []) {
  if (arr.length === len) result.push(arr);
  const used = {};
  for (let i = 0; i < nums.length; i++) {
    if (!used[nums[i]]) {
      used[nums[i]] = true;
      permuteUnique(
        nums.slice(0, i).concat(nums.slice(i + 1)),
        len,
        arr.concat(nums[i]),
        result
      );
    }
  }
  return result;
};

console.log(permuteUnique([3, 3, 0, 3])); // [[3, 3, 0, 3], [3, 3, 3, 0], [3, 0, 3, 3], [0, 3, 3, 3]]
