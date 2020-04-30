// 背包问题
/**
 * 背包承受重量最大不超过9,物品个数为5,且物品不可分割
 * {2,2,4,6,3} 找出物品总重量的最大值；
 *
 */
var weight = [2, 2, 4, 6, 3];
var values = [3, 4, 8, 9, 6]; // 物品的价值
var maxW = 9; // 最大重量
var n = 5; // 物品个数
// for (let i = 0; i < n; i++) {
//   weight.push(Math.floor(Math.random() * maxW));
// }
// let counted = new Set(); // 备忘录,存储计算过的f
// let res = 0;
// let val = 0;
// // 回溯
// const f = function f(i, cw, value) {
//   // 物品装满了或物品都访问了
//   if (cw === maxW || i === n) {
//     res = Math.max(res, cw);
//     val = Math.max(val, value);
//     return;
//   }
//   if (counted.has(`${i}-${cw}`)) return; // 已计算过
//   counted.add(`${i}-${cw}`); // 加入备忘录
//   f(i + 1, cw, value); // 选择不装i
//   if (cw + weight[i] <= maxW) {
//     f(i + 1, cw + weight[i], value + values[i]); // 选择装i
//   }
// };
// f(0, 0, 0);
// console.log(res);
// console.log(val);
// 动态规划
var f = function (weight, n, maxW) {
  // 状态 dp[i][w] i: 第几个物品 w: 第i个物品重量 值为物品价值
  var dp = new Array(n).fill(0).map(function () {
    return new Array(maxW).fill(-1);
  });
  dp[0][0] = 0;
  if (weight[0] <= maxW) dp[0][weight[0]] = values[0];

  for (var i = 1; i < n; ++i) {
    for (var w = 0; w <= maxW; ++w) {
      //选择不装入第i个
      if (dp[i - 1][w] >= 0) dp[i][w] = dp[i - 1][w];
    }

    for (var w = 0; w <= maxW - weight[i]; ++w) {
      // 选择装入第i个物品
      if (dp[i - 1][w] >= 0) {
        dp[i][w + weight[i]] = Math.max(dp[i - 1][w], values[i] + dp[i - 1][w]);
      }
    }
  }
  console.log(dp);

  for (var w = maxW; w >= 0; --w) {
    // 从最后一行开始遍历
    if (dp[n - 1][w] >= 0) return dp[n - 1][w];
  }
  return -1;
};
var res = f(weight, n, maxW);
console.log(res);
// // 动态规划
// const f = function (weight, n, maxW) {
//   let states = new Array(n).fill(0).map(() => new Array(maxW).fill(false)); // 状态
//   states[0][0] = true;
//   if (weight[0] <= maxW) states[0][weight[0]] = true;
//   for (let i = 1; i < n; ++i) {
//     for (let w = 0; w < maxW; ++w) {
//       // 选择不装入第i个物品
//       if (states[i - 1][w]) states[i][w] = true;
//     }
//     for (let w = 0; w < maxW - weight[i]; ++w) {
//       // 选择装入第i个物品
//       if (states[i - 1][w]) states[i][w + weight[i]] = true;
//     }
//   }
//   for (let w = maxW; w >= 0; --w) {
//     // 从最后一行开始遍历
//     if (states[n - 1][w]) return w;
//   }
//   return 0;
// };
// let res = f(weight, n, maxW);
// console.log(res);
// const f1 = function (weight, n, maxW) {
//   let states = new Array(maxW).fill(0); // 状态
//   states[0] = 1; // 第一行数据特殊处理
//   if (weight[0] <= maxW) states[weight[0]] = 1;
//   for (let i = 1; i < n; ++i) {
//     for (let w = maxW - weight[i]; w >= 0; --w) {
//       if (states[w] === 1) {
//         states[w + weight[i]] = 1;
//       }
//     }
//   }
//   for (let i = maxW; i >= 0; --i) {
//     if (states[i] === 1) return i;
//   }
//   return 0;
// };
// console.log(f1(weight, n, maxW));
