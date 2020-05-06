// https://leetcode-cn.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
// 暴力递归法 时间复杂度O(2^n) 空间复杂度O(n)
var climbStairs = function (n) {
	if (n <= 2) return n;
	return climbStairs(n - 1) + climbStairs(n - 2);
};

/**
 * @param {number} n
 * @return {number}
 */
// 暴力递归法的时间复杂度太高了 可以进行优化 缓存已经计算过的结果
// 此时，时间复杂度O(n) 空间复杂度O(n)
var climbStairs = function (n) {
	return climbing(n, []);
	function climbing (n, caches) {
		if (n <= 2) return n;
		if (caches[n]) return caches[n];
		return caches[n] = climbing(n - 1, caches) + climbing(n - 2, caches);
	}
};

/**
 * @param {number} n
 * @return {number}
 */
// 动态递推
// 时间复杂度O(n) 空间复杂度O(1)
var climbStairs = function (n) {
	if (n <= 2) return n;
	var f1 = 1,
		f2 = 2;
	for (var i = 3; i <= n; i++) {
		var f3 = f1 + f2;
		f1 = f2;
		f2 = f3;
	}
	return f2;
};

var result = climbStairs(10)
console.log(result) // 89;
