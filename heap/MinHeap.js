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

    peek(){
        return this.heap[0];
    }

    size(){
        return this.heap.length;
    }
}

const h = new MinHeap();
h.insert(3);
console.log(h);
h.insert(2);
console.log(h);
h.insert(1);
console.log(h);
h.pop();
console.log(h);