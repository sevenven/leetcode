// https://leetcode-cn.com/problems/reverse-only-letters/

/**
 * @param {string} S
 * @return {string}
 */
// 时间复杂度O(n) 空间复杂度O(n)
var reverseOnlyLetters = function(S) {
  var split = S.split(''),
    l = 0,
    r = split.length - 1;
  while (l < r) {
    if (!isLetter(split[l].charCodeAt())) {
     l++;
    } else if (!isLetter(split[r].charCodeAt())) {
      r--;
    } else {
      var tmp = split[l];
      split[l++] = split[r];
      split[r--] = tmp;
    }
  }
  return split.join('');
};

function isLetter (code) {
  return (code >= 97 && code <= 122) || (code >= 65 && code <= 90)
}

console.log(reverseOnlyLetters('a-bC-dEf-ghIj'));
console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'));