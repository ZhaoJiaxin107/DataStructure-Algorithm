/* 
1.找到数组中的最小值, 选中并将其放置在第一位
2.接着找到第二小的值, 选中它并将它放置在第二位
3.以此类推, 执行 n-1 轮
*/

Array.prototype.selectionSort = function(){
    for(let i = 0; i < this.length - 1; i++){
        let indexMin = i;
        for(let j = i; j < this.length; j++){
            if(this[j] < this[indexMin]){
                indexMin = j;
            }
        }
        if(indexMin !== i){
            const temp = this[i];
            this[i] = this[indexMin];
            this[indexMin] = temp;
        }  
    }
}

const arr = [5, 4, 3, 2, 1];
arr.selectionSort();
// 时间复杂度: O(n^2) 性能不太好

