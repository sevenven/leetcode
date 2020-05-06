// https://leetcode-cn.com/problems/to-lower-case/

/**
 * @param {string} str
 * @return {string}
 */
// 时间复杂度O(n) 空间复杂度O(1)
var toLowerCase = function(str) {
  var res = '';
  for (var s of str) {
    var code = s.charCodeAt();
    if (code >= 65 && code <= 90) 
      res += String.fromCharCode(code + 32);
    else 
      res += s;
  }
  return res;
};

console.log(toLowerCase('Hello')); // hello
console.log(toLowerCase('LOVELY')); // lovely