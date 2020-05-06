// https://leetcode-cn.com/problems/first-unique-character-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */
// 方法一
// 时间复杂度O(n^2) 空间复杂度O(1)
var firstUniqChar = function(s) {
  if (s.length === 1) return 0;
  for (var i = 0; i < s.length - 1; i++) {
    var flag = false;
    for (var j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) 
        flag = true;
    }
    if (!flag) return i;
  }
  return -1;
};

/**
 * @param {string} s
 * @return {number}
 */
// 方法二
// 时间复杂度O(n) 空间复杂度O(n)
var firstUniqChar = function(s) {
  var len = s.length,
      map = {};
  for (c of s) 
    map[c] = map[c] ? ++map[c] : 1;
  for (var i = 0; i < len; i++) {
    if (map[s[i]] === 1) return i;
  }
  return -1;
};

console.log(firstUniqChar('z')); // 0
console.log(firstUniqChar('cc')); // -1
console.log(firstUniqChar('leetcode')); // 0
console.log(firstUniqChar('loveleetcode')); // 2