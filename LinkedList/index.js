/**
 * 模拟实现单链表 class实现
 */
class LinkedList {
  constructor(data) {
    this.head = null; // 头节点
    this.init(data);
  }

  /** 初始化链表 */
  init(data) {
    // 引入哨兵节点
    this.head = new ListNode("head");
    if (Array.isArray(data)) {
      for (let v of data) {
        this.add(v);
      }
    } else if (data) {
      this.add(data);
    }
  }

  /** 尾部添加节点 */
  add(val) {
    let tail = this.head;
    // 找到尾节点
    while (tail && tail.next) {
      tail = tail.next;
    }
    tail.next = new ListNode(val);
  }

  /** 找到节点 */
  find(val) {
    let head = this.head;
    while (head) {
      if (head.val === val) return head;
      head = head.next;
    }
    return null;
  }

  /** 找到前一个节点 */
  findPrev(node) {
    let head = this.head;
    let prev = null;
    while (head) {
      if (head.val === node) break;
      prev = head;
      head = head.next;
    }
    return prev;
  }

  /** 插入节点 */
  insert(val, prevVal) {
    let node = new ListNode(val);
    if (prevVal === undefined) {
      // 未传第二个参数，从头节点插入
      let next = this.head.next;
      this.head.next = node;
      node.next = next;
      return node;
    }
    let prevNode = this.find(prevVal);
    if (prevNode === null) return null;
    node.next = prevNode.next;
    prevNode.next = node;
    return node;
  }

  /** 删除节点 */
  delete(val) {
    let node = this.find(val);
    let prevNode = this.findPrev(val);
    if (node === null) return null; // 找不到节点
    if (prevNode === null) {
      this.head = node.next; // 头节点
      return null;
    }
    prevNode.next = node.next;
  }

  /** 翻转链表 */
  reverse() {
    let head = this.head,
      prev = null, // 保存head
      next = null; // 保存next
    const _head = head;
    head = head.next;
    _head.next = null;
    while (head) {
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    _head.next = prev;
    this.head = _head;
    return _head;
  }

  /** 展示当前链表 */
  display(list) {
    let head = list || this.head;
    const prefix = "- >";
    let ret = "";
    while (head) {
      ret += head.val + (head.next !== null ? prefix : "");
      head = head.next;
    }
    console.log(ret + prefix + "null");
  }
}

// /** 循环链表 */
// class CycleLinkedList extends LinkedList {
//   constructor(data) {
//     super(data); // 继承单链表
//   }

//   init(data) {
//     this.head = new ListNode("head");

//   }
// }

/** 创建链表节点 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// test

// let list = new LinkedList([2, 3, 4, 5, 6]);
// list.display();
// list.insert(1);
// list.display();
// list.reverse();
// list.display();

module.exports = {
  LinkedList,
  ListNode,
};
