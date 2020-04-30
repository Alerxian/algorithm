// 杨辉三角
/**
 * “杨辉三角”不知道你听说过吗？我们现在对它进行一些改造。每个位置的数字可以随意填写，经过某个数字只能到达下面一层相邻的两个数字。
 * 假设你站在第一层，往下移动，我们把移动到最底层所经过的所有数字之和，定义为路径的长度。请你编程求出从最高层移动到最底层的最短路径长度
 */

const pascalTriangle = function (matrix) {
  let len = matrix.length;
  let dp = new Array(len).fill(0).map(() => new Array(len).fill(0));
  dp[0][0] = matrix[0][0];
  // (i, j) => (i -1, j) & (i - 1, j - 1) 推导状态

  for (let i = 1; i < len; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      if (j === 0) {
        dp[i][j] = matrix[i][j] + dp[i - 1][j];
      } else if (j === matrix[i].length - 1) {
        dp[i][j] = matrix[i][j] + dp[i - 1][j - 1];
      } else {
        dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j - 1]);
      }
    }
  }

  return Math.min.apply(null, dp[len - 1]);
};

const matrix = [[5], [7, 8], [2, 3, 4], [4, 9, 6, 1], [2, 7, 9, 4, 5]];
console.log(pascalTriangle(matrix));
