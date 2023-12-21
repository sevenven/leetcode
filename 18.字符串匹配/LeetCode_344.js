// https://leetcode-cn.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 时间复杂度O(n) 空间复杂度O(1)
var reverseString = function(s) {
  for (var i = 0, j = s.length - 1; i < j; i++, j--) {
    var tmp = s[i];
    s[i] = s[j];
    s[j] = tmp;
  }
};

var s = ["h","e","l","l","o"];
reverseString(s)
console.log(s)