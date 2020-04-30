/**
 * 给定一个非负整数数组，你最初位于数组的第一个位置。数组中的每个元素代表你在该位置可以跳跃的最大长度。判断你是否能够到达最后一个位置。
 */
// 回溯
// var canJump = function (nums) {
//   let res = false;
//   let len = nums.length - 1;
//   let visited = new Set(); // 备忘录
//   const backtrack = function (nums, start, end) {
//     if (end === len) {
//       res = true;
//       return;
//     }
//     // 已访问过
//     if (visited.has(`${start}-${end}`)) return;

//     let num = nums[start];
//     while (num > 0) {
//       visited.add(`${start}-${end}`);
//       backtrack(nums, start + num, end + num);
//       num--;
//     }
//   };

//   backtrack(nums, 0, 0);
//   return res;
// };
// var nums = [6, 0, 4, 0, 1, 5, 0, 7, 5];
// console.time("start");
// canJump(nums);
// console.timeEnd("start");

// 贪心
var canJump = function (nums) {
  if (!nums.length) return true;
  let len = nums.length;
  let can_reach = 0; // 最远可以到达的位置

  for (let i = 0; i < len; ++i) {
    if (i <= can_reach) {
      can_reach = Math.max(can_reach, i + nums[i]);
    }
    if (can_reach >= len - 1) return true;
  }

  return false;
};

var nums = [6, 0, 4, 0, 1, 5, 0, 7, 5];
console.log(canJump(nums));
