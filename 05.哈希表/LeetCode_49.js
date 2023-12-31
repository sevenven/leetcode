// https://leetcode-cn.com/problems/group-anagrams/
// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
// 字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 按排序数组分类
// 时间复杂度O(nklogk) 空间复杂度O(n)
var groupAnagrams = function (strs) {
  const charObj = {},
    charArr = [];
  for (let str of strs) {
    const key = str.split("").sort().join("");
    if (!charObj[key]) charObj[key] = [];
    charObj[key].push(str);
  }
  for (let key in charObj) {
    charArr.push(charObj[key]);
  }
  return charArr;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 按计数分类
// 时间复杂度O(nk) 空间复杂度O(n)
// 无法通过["bdddddddddd","bbbbbbbbbbc"]测试用例
var groupAnagrams = function (strs) {
  const charObj = {},
    charArr = [];
  for (let str of strs) {
    const count = new Array(26).fill(0);
    for (let s of str) {
      count[s.charCodeAt() - 97]++;
    }
    const key = count.join("");
    if (!charObj[key]) charObj[key] = [];
    charObj[key].push(str);
  }
  for (let key in charObj) {
    charArr.push(charObj[key]);
  }
  return charArr;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
