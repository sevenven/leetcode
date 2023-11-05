// https://leetcode.cn/problems/first-missing-positive
// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 哈希表---解法简单易想，空间复杂度不符合题目要求-but能通过leetcode测试用例呢hhh~
// 时间复杂度O(n) 空间复杂度O(n)
var firstMissingPositive = function (nums) {
  var exits = {};
  for (let i = 0; i < nums.length; i++) {
    exits[nums[i]] = true;
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!exits[i]) return i;
  }
  return nums.length + 1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// 将num放到对应的数组索引中
// 时间复杂度O(n) 空间复杂度O(1)
var firstMissingPositive = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let correctIndex = nums[i] - 1;
    if (
      nums[i] > 0 &&
      nums[i] <= nums.length &&
      nums[i] !== nums[correctIndex] // 当前循环的数字在(0, nums.length]区间内且当前循环数字不在correctIndex上
    ) {
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]; // 交换一下位置
    } else {
      i++;
    }
  }
  for (i = 0; i < nums.length; i++) {
    // 第一个nums[i] !== i + 1的数即为答案
    if (nums[i] !== i + 1) return i + 1;
  }
  return nums.length + 1;
};

console.log(firstMissingPositive([1, 2, 0])); // 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1
console.log(firstMissingPositive([1, 2, 3, 4])); // 5
