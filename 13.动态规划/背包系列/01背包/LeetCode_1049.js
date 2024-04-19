// https://leetcode.cn/problems/last-stone-weight-ii/description/

// 有一堆石头，用整数数组 stones 表示。其中 stones[i] 表示第 i 块石头的重量。
// 每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
// 如果 x == y，那么两块石头都会被完全粉碎；
// 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
// 最后，最多只会剩下一块 石头。返回此石头 最小的可能重量 。如果没有石头剩下，就返回 0。

/**
 * @param {number[]} stones
 * @return {number}
 */
/* 
	动规五部曲
		1.确定dp表及其下标的含义
		2.确定递推公式
		3.dp表初始化
		4.确定遍历顺序
		5.填充dp表
*/
const lastStoneWeightII = function (stones) {
	const sum = stones.reduce((pre, cur) => pre + cur),
		target = sum >>> 1,
		dp = Array(target + 1).fill(0);
	for (let i = 0; i < stones.length; i++) {
		for (let j = target; j >= stones[i]; j--) {
			dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
		}
	}
	return sum - dp[target] - dp[target];
};

console.log(lastStoneWeightII([2, 7, 4, 1, 8, 1]));
