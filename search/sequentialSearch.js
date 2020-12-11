/* 
1.遍历数组
2.找到与目标值相等的元素, 就返回它的下标
3.遍历结束后, 如果没有搜索到目标值, 就返回-1
*/

Array.prototype.sequentialSearch = function(item){
    for(let i = 0; i < this.length; i++){
        if(this[i] === item){
            return i;
        }
    }
    return -1;
};

const res = [1, 2, 3, 4, 5].sequentialSearch(1);

// 时间复杂度: O(n)