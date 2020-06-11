// https://leetcode-cn.com/problems/reverse-words-in-a-string/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.trim().split(" ").reverse().filter(s => !!s).join(" ");
};

console.log(reverseWords("  hello world!  "));
console.log(reverseWords("a good   example"));