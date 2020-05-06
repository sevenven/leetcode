// https://leetcode-cn.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
// 方法一
var lengthOfLastWord = function(s) {
  var arr = s.split(' ');
  return arr.length ? arr[arr.length-1].length : 0;
};

/**
 * @param {string} s
 * @return {number}
 */
// 方法二
var lengthOfLastWord = function(s) {
  var len = s.length,
    count = 0;
  for (var i = len - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (count === 0) 
        continue;
      break;
    }
    count++;
  }
  return count;
};

console.log(lengthOfLastWord('')); // 0
console.log(lengthOfLastWord('Hello World')); // 5