// https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  var left = 0,
    right = 0,
    match = 0,
    needs = {},
    window = {},
    res = [];
  for (c of p) {
    needs[c] = needs[c] ? ++needs[c] : 1;
  }
  while (right < s.length) {
    var c1 = s[right];
    if (needs[c1]) {
      window[c1] = window[c1] ? ++window[c1] : 1;
      if (window[c1] === needs[c1]) {
        match++;
      }
    }
    right++;
    while (match === Object.keys(needs).length) {
      if (right - left === p.length) {
        res.push(left);
      }
      var c2 = s[left];
      if (needs[c2]) {
        window[c2]--;
        if (window[c2] < needs[c2]) {
          match--;
        }
      }
      left++;
    }
  }
  return res;
};

console.log(findAnagrams('cbaebabacd', 'abc')); // [0, 6]
console.log(findAnagrams('abab', 'ab')); // [0, 1, 2]