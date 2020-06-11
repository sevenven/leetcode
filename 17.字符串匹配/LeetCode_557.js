// https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
// 方法一
// 时间复杂度O(n) 空间复杂度O(1)
var reverseWords = function(s) {
  return s.split(' ').map(function (item) {
    return item.split('').reverse().join('');
  }).join(' ');
};

/**
 * @param {string} s
 * @return {string}
 */
// 方法二
// 时间复杂度O(n) 空间复杂度O(1)
var reverseWords = function(s) {
  var str2 = '',
    word = '';
  for (c of s) {
    if (c !== ' ') {
      word = c + word;
    } else {
      str2 += word + c;
      word = '';
    }
  }
  return str2 + word;
};

console.log(reverseWords('Let\'s take LeetCode contest'))