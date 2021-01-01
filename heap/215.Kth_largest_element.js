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
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if (this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] < this.heap[index]) {
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }
    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    pop() {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}
/* 
215. Kth Largest Element in an Array
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note:
You may assume k is always valid, 1 ≤ k ≤ array's length. */

// 第k个最大元素 ——> 考虑使用最小堆

// 1.构建一个最小堆, 并依次把数组的值插入到堆中
// 2.当堆的容量超过k, 就删除堆顶
// 3.插入结束后, 堆顶就是第k个最大元素


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    // 1.构建一个最小堆
    const h = new MinHeap();
    // 2.依次把数组的值插入堆中
    nums.forEach(n => {
        h.insert(n);
        // 3.当堆的容量超过k时, 就删除堆顶
        if (h.size() > k) {
            h.pop();
        }
    })
    // 3.堆顶即为第k个最大元素
    return h.peek();
};

// insert和pop的时间复杂度为logk, k为堆的大小
// 时间复杂度: O(n * logK)
// 空间复杂度: O(k), k为堆的大小