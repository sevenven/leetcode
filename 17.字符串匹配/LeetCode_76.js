// https://leetcode-cn.com/problems/minimum-window-substring/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  var left = 0,
    right = 0,
    needs = {},
    window = {},
    match = 0,
    start = 0,
    minLen = Infinity;
  for (c of t) 
    needs[c] = needs[c] ? ++needs[c] : 1;
  while (right < s.length) {
    var c1 = s[right];
    if (needs[c1]) {
      window[c1] = window[c1] ? ++window[c1] : 1;
      if (window[c1] === needs[c1]) 
        match++;
    }
    right++;
    while (match === Object.keys(needs).length) {
      if (right - left < minLen) {
        start = left;
        minLen = right - left;
      }
      var c2 = s[left];
      if (needs[c2]) {
        window[c2]--;
        if (window[c2] < needs[c2]) 
          match--;
      }
      left++;
    }
  }
  return minLen === Infinity ? "" : s.substring(start, start + minLen);
};

console.log(minWindow('ADOBECODEBANC', 'ABC')); // BANC
console.log(minWindow('A', 'AA')); // ""