// https://leetcode-cn.com/problems/move-zeroes
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 暴力破解 自己移动元素
// 时间复杂度O(n^2) 空间复杂度O(1)
var moveZeroes = function (nums) {
  var len = nums.length;
  for (var i = 0; i < len - 1; i++) {
    if (nums[i] === 0) {
      for (var j = i + 1; j < len; j++) {
        nums[j - 1] = nums[j];
      }
      nums[len - 1] = 0;
      i--;
      len--;
    }
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 快慢指针法 时间复杂度O(n) 空间复杂度O(1)
var moveZeroes = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (k !== i) [nums[k], nums[i]] = [nums[i], 0];
      k++;
    }
  }
};

const nums = [1, 2, 0, 4, 0, 12];
moveZeroes(nums);
console.log(nums); // [1, 2, 4, 12, 0, 0]
