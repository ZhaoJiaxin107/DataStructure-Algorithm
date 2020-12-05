// 思路: 比较所有相邻元素, 如果第一个比第二个大, 则交换它们
// 一轮下来, 可以保证最后一个数是最大的
// 执行n-1轮可以完成排序

Array.prototype.bubbleSort = function(){
    // console.log(this);
    for(let i = 0; i < this.length - 1; i++){
        for(let j = 0; j < this.length - 1 - i; j++){
            // console.log(this[j], this[j+1]);
            if(this[j] > this[j+1]){
                const temp = this[j];
                this[j] = this[j+1];
                this[j+1] = temp;
            }
        }
    }
    
}

const arr = [5, 4, 3, 2, 1];
arr.bubbleSort();
// 时间复杂度: 两个嵌套循环  O(n^2)
// 

