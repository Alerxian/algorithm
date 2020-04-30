/**
 * 模拟实现链表 function实现
 */
function LinkedList() {
  this.head = null; // 头节点
  this.length = 0; // 链表长度
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/** 添加节点 @param {*} val 默认值为0 */
LinkedList.prototype.add = function (val = 0) {
  let tail = this.head;
  // 找到尾节点
  while (tail && tail.next !== null) {
    tail = tail.next;
  }
  if (this.head === null) {
    this.head = new ListNode(val);
  } else {
    tail.next = new ListNode(val);
  }
};

/** 删除节点 */
LinkedList.prototype.delete = function (val) {
  let head = this.head;
  let node = this.find(val);
  let prevNode = this.findPrev(val);
  if (node === null) return null; // 找不到节点
  if (prevNode === null) {
    this.head = node.next; // 头节点
    return null;
  }
  prevNode.next = node.next;
};

/** 找到当前节点 */
LinkedList.prototype.find = function (val) {
  let head = this.head;
  while (head) {
    if (head.val === val) return head;
    head = head.next;
  }
  return null;
};

/** 找到前一个节点 */
LinkedList.prototype.findPrev = function (val) {
  let head = this.head;
  let prev = null;
  while (head) {
    if (head.val === val) break;
    prev = head;
    head = head.next;
  }
  return prev;
};

/** 链表翻转 */
LinkedList.prototype.reverse = function () {
  let head = this.head,
    prev = null, // 保存head
    next = null; // 保存next
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  this.head = prev;
  return prev;
};

/**
 * 插入节点
 * @param {*} val
 * @param {*} prevNode || prevVal
 */
LinkedList.prototype.insert = function (val, prevVal) {
  let node = new ListNode(val);
  if (prevVal === undefined) {
    // 未传第二个参数，从头节点插入
    node.next = this.head;
    this.head = node;
    return node;
  }
  let prevNode = this.find(prevVal);
  if (prevNode === null) return null;
  node.next = prevNode.next;
  prevNode.next = node;
  return node;
};

/** 链表数组展示 */
LinkedList.prototype.display = function (list) {
  let head = list || this.head;
  const prefix = "- >";
  let ret = "";
  while (head) {
    ret += head.val + (head.next !== null ? prefix : "");
    head = head.next;
  }
  console.log(ret + prefix + "null");
};

// test

let list = new LinkedList();
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);
// list.add(6);
// list.delete(4);
// list.delete(1);
// list.add(7);
list.display();
console.log(list.find(4));
// list.insert(4, 3);
// list.insert(1);
// list.display();
// list.reverse();
// list.display();
