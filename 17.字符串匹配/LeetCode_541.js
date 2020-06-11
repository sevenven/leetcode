// https://leetcode-cn.com/problems/reverse-string-ii/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  var split = s.split('');
  for (var i = 0; i < s.length; i += 2*k) {
    var reverse = split.splice(i, k).reverse();
    split.splice(i, 0, ...reverse);
  }
  return split.join('');
};

console.log(reverseStr('abcdefg', 2));