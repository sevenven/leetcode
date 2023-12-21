// https://leetcode-cn.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
// 时间复杂度O(n*m) 空间复杂度O(1)
var longestCommonPrefix = function(strs) {
  if (!strs || !strs.length) return "";
  for (var i = 0; i < strs[0].length; i++) {
    for (var j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== strs[0][i]) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""