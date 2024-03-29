// 有n件物品 重量为weight = [1, 3, 4] 价值为value = [15, 20, 30]
// 有一个背包 bagWeight为4
// 每件物品只能用一次，求解将哪些物品装入背包里物品价值总和最大

// 方式一 暴力递归
// 时间复杂度|空间复杂度

// 方式二 记忆化递归
// 时间复杂度|空间复杂度

// 方式三 dp
// 时间复杂度|空间复杂度
var bagWeightProblem = function (weight, value, bagWeight) {
  // 定义 dp 数组
  const dp = Array(weight.length)
    .fill()
    .map(() => Array(bagWeight + 1).fill(0));

  // 初始化
  for (let j = weight[0]; j <= bagWeight; j++) dp[0][j] = value[0];

  // 遍历物品
  for (let i = 1; i < weight.length; i++) {
    // 遍历背包容量
    for (let j = 0; j <= bagWeight; j++) {
      if (j < weight[i]) dp[i][j] = dp[i - 1][j];
      else
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
    }
  }

  return dp[weight.length - 1][bagWeight];
};

// 方式四 dp 滚动数组优化暂存数据空间复杂度
// 时间复杂度|空间复杂度
var bagWeightProblem = function (weight, value, bagWeight) {
  const dp = Array(bagWeight + 1).fill(0);
  for (let i = 0; i < weight.length; i++) {
    for (let j = bagWeight; j >= weight[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }
  return dp[bagWeight];
};

console.log(bagWeightProblem([1, 3, 4], [15, 20, 30], 4));
