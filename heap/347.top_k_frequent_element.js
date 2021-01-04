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
347. Top K Frequent Elements
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // 1.统计每个数字出现的次数
    const map = new Map();
    // 2.对nums中的每个数字进行循环遍历
    nums.forEach(n => {
        map.set(n, map.has(n) ? map.get(n) + 1 : 1);
    });
    // console.log(map);
    // 3.将map转换成数组后进行排序
    const list = Array.from(map).sort((a, b) => b[1] - a[1]);
    // console.log(list)
    return list.slice(0, k).map(n => n[0]);
};

// 时间复杂度:O(n), 原生排序时间复杂度: O(n)*O(logN)
// 所以时间复杂度: O(n) * O(logN)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // 1.统计每个数字出现的次数
    const map = new Map();
    // 2.对nums中的每个数字进行循环遍历
    nums.forEach(n =>{
        map.set(n, map.has(n) ? map.get(n)+1 : 1);
    });
    // 3.初始化一个堆
    const h = new MinHeap();
    map.forEach((value, key) =>{
        h.insert({ value, key });
        if(h.size() > k){
            h.pop();
        }
    });
    return h.heap.map( a => a.key);
};
// insert()和pop()时间复杂度 logK
// map时间复杂度 O(n * logK) 所以最后时间复杂度为O(n * logK)
// 空间复杂度: Map O(n)  heap k O(k) 所以空间复杂度仍然为O(n)


