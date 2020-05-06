// https://leetcode-cn.com/problems/kth-largest-element-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 时间复杂度O(n) 空间复杂度(1)
var findKthLargest = function(nums, k) {
  return quickSelect(nums, 0, nums.length - 1);
  function quickSelect(nums, beigin, end) {
    if (beigin >= end) return nums[beigin];
    var pivot = partition(nums, beigin, end);
    if (pivot === k - 1) 
      return nums[pivot];
    else if (pivot > k - 1) 
      return quickSelect(nums, beigin, pivot - 1);
    else if (pivot < k - 1) 
      return quickSelect(nums, pivot + 1, end);
  }
  function partition(nums, beigin, end) {
    var pivot = end,
        count = beigin;
    for (var i = beigin; i < end; i++) {
      if (nums[i] > nums[pivot]) {
        var tmp = nums[count]; nums[count++] = nums[i]; nums[i] = tmp;
      }
    }
    var tmp = nums[count]; nums[count] = nums[pivot]; nums[pivot] = tmp;
    return count;
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 时间复杂度O(kn) 空间复杂度(1)
var findKthLargest = function(nums, k) { 
  for (var i = 0; i < k; i++) {
    var maxIndex = i;
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[maxIndex]) 
        maxIndex = j;
    }
    var tmp = nums[i]; nums[i] = nums[maxIndex]; nums[maxIndex] = tmp;
  }
  return nums[k-1];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4