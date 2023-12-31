// https://leetcode-cn.com/problems/valid-anagram/
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 暴力求解
// 时间复杂度O(nlogn) 空间复杂度O(n)
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  return s.split("").sort().join("") === t.split("").sort().join("");
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 哈希表(针对只有小写字母的字符串)
// 时间复杂度O(n) 空间复杂度O(1)
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const count = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    count[s[i].charCodeAt() - 97]++;
    count[t[i].charCodeAt() - 97]--;
  }
  for (let c of count) {
    if (count[c] !== 0) return false;
  }
  return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 哈希表(通用)
// 时间复杂度O(n) 空间复杂度O(n)
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const count = {};
  for (let c of s) count[c] = count[c] ? ++count[c] : 1;
  for (let c of t) count[c] = count[c] ? --count[c] : 1;
  for (let c in count) {
    if (count[c] !== 0) return false;
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("", "")); // true
