// 二分法 在有序数组或集合中查找某一个数

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let binary = function(nums, target) {
    let low = 0, high = nums.length - 1, mid;
    while(low <= high) {
        mid = Math.floor(low + (high - low) / 2); // 防止整数溢出
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}

let nums = [1,2,3,6,8,19,46];
let target = 19;
let result = binary([1,3,5,6], 7);
console.log(result);