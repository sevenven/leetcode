// https://leetcode-cn.com/problems/trapping-rain-water/
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力破解 时间复杂度O(n^2) 空间复杂度O(1)
var trap = function (height) {
  let ans = 0;
  for (let i = 1; i < height.length - 1; i++) {
    let maxLeft = (maxRight = height[i]);
    for (let j = 0; j < i; j++) {
      maxLeft = Math.max(maxLeft, height[j]);
    }
    for (let j = i + 1; j < height.length; j++) {
      maxRight = Math.max(maxRight, height[j]);
    }
    ans += Math.min(maxLeft, maxRight) - height[i];
  }
  return ans;
};

/**
 * @param {number[]} height
 * @return {number}
 */
// 遍历存储每个格子的左边最高墙和右边最高墙 时间复杂度O(n) 空间复杂度O(n)
var trap = function (height) {
  let maxLeft = [],
    maxRight = [],
    ans = 0;
  maxLeft[0] = height[0];
  for (let i = 1; i < height.length - 1; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
  }
  maxRight[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 1; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], height[i]);
  }
  for (let i = 1; i < height.length - 1; i++) {
    ans += Math.min(maxLeft[i], maxRight[i]) - height[i];
  }
  return ans;
};

/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针法 时间复杂度O(n) 空间复杂度O(1)
// 假设两柱子分别为 i，j。那么就有 iMaxLeft,iMaxRight,jMaxLeft,jMaxRight 这个变量。
// 如果 i <= j, 由于j在iMaxRight里，则 iMaxLeft <= iMaxRight 可知i点接水情况
// 否则 jMaxLeft >= jMaxRight 可知j点接水情况
// 而上面我们实际上只用到了 iMaxLeft，jMaxRight 两个变量，故我们维护这两个即可。
var trap = function (height) {
  let ans = 0,
    left = 0,
    right = height.length - 1,
    maxLeft = 0,
    maxRight = 0;
  while (left < right) {
    if (height[left] <= height[right]) {
      maxLeft = Math.max(maxLeft, height[left]);
      ans += maxLeft - height[left];
      left++;
    } else {
      maxRight = Math.max(maxRight, height[right]);
      ans += maxRight - height[right];
      right--;
    }
  }
  return ans;
};

/**
 * @param {number[]} height
 * @return {number}
 */
// 使用栈查找左右边界
var trap = function (height) {
  let stack = [],
    ans = 0;
  for (let i = 0; i < height.length; i++) {
    while (stack.length > 0 && height[i] > height[stack.top()]) {
      let cur = stack.pop();
      if (stack.length === 0) break;
      let width = i - stack.top() - 1;
      let minHeight = Math.min(height[stack.top()], height[i]);
      ans += width * (minHeight - height[cur]);
    }
    stack.push(i);
  }
  return ans;
};

Array.prototype.top = function () {
  return this[this.length - 1];
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
