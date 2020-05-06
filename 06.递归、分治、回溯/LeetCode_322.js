// https://leetcode-cn.com/problems/coin-change/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	return change(coins, amount, []);
	function change(coins, amount, caches) {
		if (amount === 0) return 0;
		if (caches[amount]) return caches[amount];
		var count = Number.MAX_SAFE_INTEGER;
		for (coin of coins) {
			if (coin > amount) continue;
			var sub = change(coins, amount - coin, caches);
			if (sub === -1) continue;
			count = Math.min(count, sub + 1);
		}
		return caches[amount] = count === Number.MAX_SAFE_INTEGER ? -1 : count;
	}
};
console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2, 2, 5], 11)); // 4
console.log(coinChange([2, 5, 10, 1], 27)); // 4
console.log(coinChange([186, 419, 83, 408], 6249)); // 20