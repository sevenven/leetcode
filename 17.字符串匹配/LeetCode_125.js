// https://leetcode-cn.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
// 方法一
// 时间复杂度O(n) 空间复杂度O()
var isPalindrome = function (s) {
  var start = 0,
    end = s.length - 1;
  while (start < end) {
    if (!isLetterOrNumber(s[start].charCodeAt())) {
      start++;
    } else if (!isLetterOrNumber(s[end].charCodeAt())) {
      end--;
    } else {
      if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;
      start++;
      end--;
    }
  }
  return true;
};

function isLetterOrNumber(code) {
  return (
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122) ||
    (code >= 48 && code <= 57)
  );
}

/**
 * @param {string} s
 * @return {boolean}
 */
// 方法二
// 时间复杂度O(n) 空间复杂度O(n)
var isPalindrome = function (s) {
  var str = s.replace(/\W/g, "").toLowerCase(),
    mid = Math.floor(str.length / 2);
  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("")); // true
