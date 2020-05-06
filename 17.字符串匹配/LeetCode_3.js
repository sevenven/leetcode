// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var left = 0,
    right = 0,
    window = {},
    res = 0;
  while (right < s.length) {
    var c1 = s[right];
    window[c1] = window[c1] ? ++window[c1] : 1;
    right++;
    while (window[c1] > 1) {
      var c2 = s[left];
      window[c2]--;
      left++;
    }
    res = Math.max(res, right - left);
  }
  return res;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3