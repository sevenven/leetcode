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
  let result = [],
    exits = {};
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let arrStr = [nums[i], nums[j], nums[k]].sort().join("_");
          if (!exits[arrStr]) {
            result.push([nums[i], nums[j], nums[k]]);
            exits[arrStr] = true;
          }
        }
      }
    }
  }
  return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 排序加双指针 时间复杂度O(n^2) 空间复杂度O(1)
// 也可以先排序去重之后再做
var threeSum = function (nums) {
  let result = [];
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
        while (L < R && nums[L] === nums[L + 1]) L++;
        while (L < R && nums[R] === nums[R - 1]) R--;
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
