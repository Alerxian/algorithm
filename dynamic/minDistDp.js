// 最短距离
/**
 * 假设我们有一个 n 乘以 n 的矩阵 w[n][n]。矩阵存储的都是正整数。棋子起始位置在左上角，终止位置在右下角。我们将棋子从左上角移动到右下角。
 * 每次只能向右或者向下移动一位。从左上角到右下角，会有很多不同的路径可以走。我们把每条路径经过的数字加起来看作路径的长度。那从左上角移动到右下角的最短路径长度是多少呢？
 */

const dist = [
  [1, 3, 5, 9, 9],
  [2, 1, 3, 4, 1],
  [5, 2, 6, 7, 3],
  [6, 8, 4, 3, 8],
  [4, 8, 2, 6, 2],
];

// 状态转移表法
const minDistDp = function (dist) {
  let n = dist.length;
  let states = new Array(n).fill(0).map(() => new Array(n).fill(0));

  // 填表 i
  let sum = 0;
  for (let i = 0; i < n; ++i) {
    sum += dist[i][0];
    states[i][0] = sum;
  }
  // 填表 j
  sum = 0;
  for (let j = 0; j < n; ++j) {
    sum += dist[0][j];
    states[0][j] = sum;
  }

  // 递推
  for (let i = 1; i < n; ++i) {
    for (let j = 1; j < n; ++j) {
      states[i][j] = Math.min(states[i - 1][j], states[i][j - 1]) + dist[i][j];
    }
  }
  console.log(states);
  return states[n - 1][n - 1];
};

let minDist = minDistDp(dist);
console.log(minDist);
