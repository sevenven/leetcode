// https://leetcode-cn.com/problems/jewels-and-stones/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// 方法一
// 时间复杂度O(n*m) 空间复杂度O(1)
var numJewelsInStones = function(J, S) {
  var count = 0;
  for (var s of S) {
    for (j of J) {
      if (s === j) {
        count++;
      }
    }
  }
  return count;
};

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// 方法二
// 时间复杂度O(n+m) 空间复杂度O(m)
var numJewelsInStones = function(J, S) {
  var count = 0;
    map = {};
  for (j of J) {
    map[j] = true;
  }
  for (s of S) {
    if (map[s]) {
      count++;
    }
  }
  return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbb')); // 3