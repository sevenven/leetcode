// https://leetcode-cn.com/problems/merge-sorted-array/
// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

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

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 双指针法
// 时间复杂度O(m+n) 空间复杂度O(1)
var merge = function (nums1, m, nums2, n) {
	var pos = m + n - 1;
	m--;
	n--;
	while (n >= 0) {
		nums1[pos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
	}
};


var nums1 = [1, 2, 3, 0, 0, 0];
var nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1)
