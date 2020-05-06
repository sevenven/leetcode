// https://leetcode-cn.com/problems/rotate-array/
// LeetCode速度：1.环形替换法 2.反转法 3.暴力解法
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 暴力解法
// 时间复杂度O(k*n) 空间复杂度O(1) 
var rotate = function (nums, k) {
  var k = k % nums.length;
  for (var i = 0; i < k; i++) {
    var tmp = nums[nums.length-1];
    for (var j = nums.length - 2; j >= 0; j--) {
      nums[j+1] = nums[j];
    }
    nums[0] = tmp;
  }
};

//   var k = k % nums.length,
//     count = 0;
//   for (var i = 0; count < nums.length; i++) {
//     var curIndex = i,
//       cur = nums[i];
//     do {
//       var moveIndex = (curIndex + k) % nums.length,
//         tmp = nums[moveIndex];
//       nums[moveIndex] = cur;
//       cur = tmp;
//       curIndex = moveIndex;
//       count++;
//     } while (curIndex !== i)
//   }
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 环状替换解法
// 时间复杂度O(n) 空间复杂度O(1) 
var rotate = function (nums, k) {
  var k = k % nums.length,
    count = 0;
  for (var i = 0; count < nums.length; i++) {
    var curIndex = i,
      cur = nums[i]
    do {
      var moveIndex = (curIndex + k) % nums.length,
        tmp = nums[moveIndex];
      nums[moveIndex] = cur;
      cur = tmp;
      curIndex = moveIndex;
      count++;
    } while (i !== curIndex)
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 反转法
// 时间复杂度O(n) 空间复杂度O(1) 
var rotate = function (nums, k) {
  var k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

function reverse(nums, start, end) {
  while (start < end) {
    var tmp = nums[start];
    nums[start] = nums[end];
    nums[end] = tmp;
    start++;
    end--;
  }
}

var arr = [1, 2, 3, 4, 5, 6];
rotate(arr, 2);
console.log(arr); // [ 5, 6, 1, 2, 3, 4 ]