// https://leetcode-cn.com/problems/string-to-integer-atoi/

/**
 * @param {string} str
 * @return {number}
 */
// 方法一
var myAtoi = function(str) {
  return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648);
};

/**
 * @param {string} str
 * @return {number}
 */
// 方法二
var myAtoi = function(str) {
  var sign = 1,
    num = 0,
    i = 0;
  str = str.trimStart();
  if (str[i] === '-' || str[i] === '+') {
    sign = str[i++] === '-' ? -1 : 1;
  }
  while (str[i] && str[i].charCodeAt() >= 48 && str[i].charCodeAt() <= 57) {
    num = num * 10 + str[i++].charCodeAt() - 48;
  }
  num *= sign;
  return Math.max(Math.min(num, 2147483647), -2147483648);
};

console.log(myAtoi('+1')); // 1
console.log(myAtoi('   -42')); // -42
console.log(myAtoi('4193 with words')); // 4193
console.log(myAtoi('words and 987')); // 0
console.log(myAtoi('-91283472332')); // -2147483648