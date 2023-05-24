// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
// 给你一个升序排列的数组nums，请你原地删除重复出现的元素，使每个元素只出现一次，返回删除后数组的新长度。元素的相对顺序应该保持一致 。
// 由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有k个元素，那么nums的前k个元素应该保存最终结果。
// 将最终结果插入nums的前k个位置后返回k 。
// 不要使用额外的空间，你必须在原地修改输入数组并在使用O(1)额外空间的条件下完成。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 快慢指针法
// 时间复杂度O(n) 空间复杂度O(1)
var removeDuplicates = function (nums) {
  if (!nums || !nums.length) return;
  let pos = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[pos] !== nums[i]) {
      nums[++pos] = nums[i];
    }
  }
  return (nums.length = pos + 1);
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums), nums); // 5
