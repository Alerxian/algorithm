var numIslands = function (grid) {
  if (!grid.length) return 0;
  let m = grid.length,
    n = grid[0].length;
  let ans = 0;

  // let dp = new Array(m).fill(0).map(() => new Array(n).fill(-1));
  // // 找出所有的0
  // for(let i = 0; i < m; ++i) {
  //     for(let j = 0; j < n; ++j) {
  //         if (grid[i][j] === "0") dp[i][j] = 0;
  //     }
  // }
  // let dict = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  // for(let i = 0; i < m; ++i) {
  //     for(let j = 0; j < n; ++j) {
  //         if (grid[i][j] === "1") {
  //             for(let d = 0; d < 4; ++d) {
  //                 let [x, y] = dict[d];
  //                 x += i;
  //                 y += j;
  //                 if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] === "0") continue; // 到达边界
  //                 grid[x][y] = "0";

  //             }
  //         }
  //     }
  // }

  const findIsland = function (grid, i, j) {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === "0") return 0; // 到达边界
    grid[i][j] = "0";

    findIsland(grid, i + 1, j);
    findIsland(grid, i - 1, j);
    findIsland(grid, i, j - 1);
    findIsland(grid, i, j + 1);
  };

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === "1") {
        findIsland(grid, i, j);
        ans += 1;
      }
    }
  }

  return ans;
};

var grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "1", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "1", "0", "0", "1"],
];
console.log(numIslands(grid));
console.log(grid);
