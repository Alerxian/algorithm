var merge = function (intervals) {
  let res = [];
  res.push(intervals[0]);
  let j = 0;
  for (let i = 1; i < intervals.length; ++i) {
    if (intervals[i][0] > res[j][1] || intervals[i][1] < res[j][0]) {
      res.push(intervals[i]);
      j++;
    } else {
      if (intervals[i][1] < res[j][1]) continue;
      res[j] = [res[j][0], intervals[i][1]];
    }
  }
  return res;
};

var intervals = [
  [4, 5],
  [1, 4],
  [0, 1],
];
// 快排
var quickSort = function (intervals) {
  const partition = function (intervals, lo, hi) {
    let pivot = intervals[lo]; // 选取一个基准点
    let i = lo,
      j = hi + 1;
    while (true) {
      while (++i && intervals[i] && intervals[i][0] < pivot[0]);
      while (--j && intervals[j] && intervals[j][0] > pivot[0]);
      if (i >= j) break;
      // 交换元素
      [intervals[i], intervals[j]] = [intervals[j], intervals[i]];
    }
    // 交换pivot
    [intervals[j], intervals[lo]] = [pivot, intervals[j]];
    return j;
  };

  const sort = function (intervals, lo, hi) {
    if (lo >= hi) return intervals;
    var j = partition(intervals, lo, hi);
    sort(intervals, lo, j - 1);
    sort(intervals, j + 1, hi);
  };

  sort(intervals, 0, intervals.length - 1);
};
quickSort(intervals);
console.log(intervals);
// console.log(merge(intervals));
