/*
23. Merge k Sorted Lists
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

*/
// 新链表的下一个节点一定是k个链表头中的最小节点
// 考虑使用最小堆

// 1.构建一个最小堆, 并依次把链表头插入堆中
// 2.弹出堆顶接到输出链表, 并将堆顶所在链表的新链表头插入堆中
// 3.等堆元素全部弹出, 合并工作就完成了

class MinHeap {
    constructor() {
        this.heap = [];
    }
    // 插入
    // 将值插入堆的底部, 即数组的尾部
    // 然后上移, 将这个值和它的父节点进行交换, 直到父节点小于等于这个插入的值
    // 大小为k的堆中插入元素的时间复杂度为O(logK)
    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    }
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
        // return (i - 1) >> 1; // 二进制操作, 往右移动一位, 等同于除以2
    }
    getLeftIndex(i) {
        return i * 2 + 1;
    }
    getRightIndex(i) {
        return i * 2 + 2;
    }
    shiftUp(index) {
        if (index == 0) { return; }
        // 获取父节点
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] && this.heap[parentIndex].val > this.heap[index].val) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if (this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[index].val) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] && this.heap[rightIndex].val < this.heap[index].val) {
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }
    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    pop() {
        if(this.size() === 1) return this.heap.shift();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
        return top;
    }

    peek(){
        return this.heap[0];
    }

    size(){
        return this.heap.length;
    }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const res = new ListNode(0);
    let p = res;
    const h = new MinHeap();
    lists.forEach( l => {
        if (l) h.insert(l);
    });
    while(h.size()){
        const n = h.pop();
        p.next = n;
        p = p.next;
        if(n.next) h.insert(n.next);
    }
    
    return res.next;
};

// 时间复杂度: O(n) * O(logK) logK:基于堆的高度进行的操作 n:遍历链表
// 空间复杂度: O(k) 堆的大小为k
