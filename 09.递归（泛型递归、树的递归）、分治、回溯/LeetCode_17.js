// https://leetcode-cn.com/problems/letter-combine-of-a-phone-number/
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
// 给出数字到字母的映射如下（与电话按键相同）(看下面的map定义)。注意 1 不对应任何字母。

/**
 * @param {string} digits
 * @return {string[]}
 */
// 回溯解法
var lettercombine = function (digits) {
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  return combine(digits, map, (str = ""), (result = []));
};

function combine(digits, map, str, result) {
  if (!digits && str) result.push(str);
  const _str = digits ? map[digits.slice(0, 1)] : "";
  for (let s of _str) combine(digits.slice(1), map, str + s, result);
  return result;
}

console.log(lettercombine("23")); // ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
