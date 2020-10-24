/**
 * 933.最近的请求次数
 * 
 * 写一个RecentCounter类来计算特定时间范围内最近的请求
 * 
 * RecentCounter()初始化计数器,请求数为0.
 * int ping(int t)在时间t添加一个新请求, 其中t表示以毫秒为单位的某个时间,
 * 并返回过去3000毫秒内所发生的的所有请求次数。确切地说,返回在[t-3000,t]内
 * 发生的请求数。
 * 
 * 解题思路:越早发出的请求越早不在最近3000ms内的请求里。
 * 满足先进先出,考虑用队列
 * 
 * 有新请求就入队,3000ms前发出的请求出队。
 * 队列的长度就是最近的请求次数
 */

var RecentCounter = function() {
    this.q = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.q.push(t);
    while(this.q[0] < t -3000){
        this.q.shift();
    }
    return this.q.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
时间复杂度: O(n),需要被踢出队的请求次数
空间复杂度: O(n),n为最近的请求次数