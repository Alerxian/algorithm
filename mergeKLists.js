const { LinkedList, ListNode } = require("./LinkedList/index");

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// var mergeKLists = function (lists) {
//     if (!lists.length) return null;
//     let len = lists.length;
//     let mergeList = [];
//     // 合并为一个数组
//     for (let i = 0; i < len; ++i) {
//         let list = lists[i];
//         while (list) {
//             mergeList.push(list.val);
//             list = list.next;
//         }
//     }

//     if (!mergeList.length) return null;

//     // 排序
//     mergeList.sort((a, b) => a - b);

//     let res = new ListNode(mergeList[0]);
//     let head = res, next;
//     for(let i = 1, len = mergeList.length; i < len; ++i) {
//         next = new ListNode(mergeList[i]);
//         head.next = next; // 1->null
//         head = head.next;
//     }

//     return res;
// };

// 分治

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) return null;
  // 两两合并
  const merge = function (lists, start, end) {
    if (start >= end) return lists[start];
    let mid = Math.floor(start + (end - start) / 2);
    let list1 = merge(lists, start, mid);
    let list2 = merge(lists, mid + 1, end);

    return mergeTwoList(list1, list2);
  };

  return merge(lists, 0, lists.length - 1);
};

var mergeTwoList = function (list1, list2) {
  let mergedList = new LinkedList();
  let head1 = list1.head.next;
  let head2 = list2.head.next;
  let tail = mergedList.head; // 尾节点
  /** 头节点 */
  const max_num = Number.MAX_SAFE_INTEGER;
  while (head1 || head2) {
    let node;
    let val1 = head1 ? head1.val : max_num;
    let val2 = head2 ? head2.val : max_num;
    if (val1 < val2) {
      node = head1;
      head1 = head1 ? head1.next : head1;
    } else {
      node = head2;
      head2 = head2 ? head2.next : head2;
    }
    tail.next = node;
    node.next = null;
    tail = tail.next;
  }
  return mergedList;
};

// test
// let list1 = new LinkedList([1, 2, 3, 6]);
// let list2 = new LinkedList([2, 4, 7, 9]);
let lists = [];
let n = 100;
for (let i = 0; i < n; ++i) {
  let list = [];
  for (let j = 0; j < 500; ++j) {
    list.push(Math.floor(Math.random() * 10000));
  }
  list = new LinkedList(list.sort((a, b) => a - b));
  // list.display();
  lists.push(list);
}
console.time("merge");
let mergedList = mergeKLists(lists);
console.timeEnd("merge");
// mergedList.display();
