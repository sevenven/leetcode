// https://leetcode-cn.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 合并后排序
var merge = function (nums1, m, nums2, n) {
	nums1.splice(m, n, ...nums2);
	return nums1.sort(function (a, b) { return a - b; });
};

var nums1 = [1, 2, 3, 0, 0, 0];
var nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1)
