/* 
分区: 从头数组中任意选择一个"基准", 所有比"基准小的元素放在基准
前面, 比基准大的元素放在基准后面

递归： 递归的对基准前后的子数组进行区分
*/

Array.prototype.quickSort = function(){
    const rec = (arr) =>{
        if(arr.length === 1) {return arr;}
        const left = [];
        const right = [];
        const mid = arr[0];
        for(let i = 1; i < arr.length; i++){
            if(arr[i] < mid){
                left.push(arr[i]);
            }else{
                right.push(arr[i]);
            }
        }
        return [...rec(left), mid, ...rec(right)];
    };
    const res = rec(this);
    res.forEach((n, i) => {this[i] = n});
};

const arr = [2, 4, 5, 3, 1];
arr.quickSort();
// 递归的时间复杂度 O(logN)
// 分区的时间复杂度 O(N)
// 时间复杂度: O(n * logN)
