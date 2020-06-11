// https://leetcode-cn.com/problems/first-unique-character-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */
// 时间复杂度O(n) 空间复杂度O(n)
var firstUniqChar = function(s) {
  var map = {};
  for (c of s) {
    map[c] = map[c] ? ++map[c] : 1;
  }
  for (var i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar('z')); // 0
console.log(firstUniqChar('cc')); // -1
console.log(firstUniqChar('cca')); // 2
console.log(firstUniqChar('leetcode')); // 0
console.log(firstUniqChar('loveleetcode')); // 2