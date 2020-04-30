/** 在一个非负整数 a 中，我们希望从中移除 k 个数字，让剩下的数字值最小，如何选择移除哪 k 个数字呢？ */

// 贪心算法: 每次移除高位大于地位的高位
const removeNumber = function (num, k) {
  let upStack = new Stack(); // 单调递增栈
  let strNum = String(num);
  upStack.push(strNum[0]); // 推入第一位
  let n;
  for (let i = 1; i < strNum.length; ++i) {
    n = strNum[i];
    if (n >= upStack.getTop()) {
      upStack.push(n);
    } else {
      // 高位移除,直到保证单调递增; 已经移除了k位，不需要再移除了
      while (n < upStack.getTop() && k > 0) {
        upStack.pop();
        k--;
      }
      upStack.push(n);
    }
  }

  while (k > 0) {
    // k不为0，即个位数字为递增，从个位开始移除相应的个数
    upStack.pop();
    k--;
  }

  return Number(upStack.data.join(""));
};

var num = 4556847594546,
  k = 5;
console.log(removeNumber(num, k) === 44594546);

// 模拟栈
function Stack() {
  this.data = [];
  this.length = 0;
  // 获取栈顶元素
  this.getTop = function () {
    return this.data[this.length - 1];
  };

  this.push = function (data) {
    this.data[this.length++] = data;
  };

  this.pop = function () {
    this.length--;
    return this.data.pop();
  };
}

var trap = function (height) {
  if (!height.length) return 0;
  let upStack = [0]; // 单调递增栈
  let j = 0; // 栈顶指针
  let ans = 0;
  for (let i = 1; i < height.length; ++i) {
    while (height[i] > height[j] && j >= 0) {
      // 当前元素大于栈顶元素， 栈顶元素弹出
      let top = upStack[j];
      upStack.pop();
      if (upStack.length === 0) break;
      j--;
      let distance = i - upStack[j] - 1;
      let bound_height = Math.min(height[i], height[upStack[j]]) - height[top];
      ans += distance * bound_height;
    }

    upStack.push(i);
    j++;
  }
  return ans;
};

var height = [4, 2, 0, 3, 2, 5];
console.log(trap(height));
