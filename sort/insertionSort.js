/* 

1.从第二个数开始往前比
2.比前一个数大就往后排
3.以此类推一直进行到最后一个数
4.动画演示: visualgo.netm

*/

Array.prototype.insertionSort = function(){
    for(let i = 1; i < this.length; i++){
        const temp = this[i];
        let j = i;
        while(j > 0){
            // 如果前面的数大于temp
            if(this [j-1] > temp){
                // j位置的数为j-1位置的数
                this[j] = this[j-1];
            }else{
                break;
            }
            j -= 1;
        }
        // j为要插入的位置
        this[j] = temp;
    }
    console.log(this);
}

const arr = [2, 4, 5, 3, 1];
arr.insertionSort();


// 时间复杂度(Time Complexity): O(n^2)
