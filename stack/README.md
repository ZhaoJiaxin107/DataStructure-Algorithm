### In what situation should we use stack?

1.Last out first in

2.Convert decimal to binary, judge whether the brackets of the string are valid, function call stack

(1)十进制转二进制
* 后出来的余数需要排到前面
* 把余数依次入栈, 然后再出栈, 就可以实现余数倒序输出

(2)有效的括号
* 判断括号是否有效闭合的算法
* 越靠后的左括号, 对应的右括号就越靠前
* 左括号入栈, 右括号出栈, 最后栈空了就是合法的

(3)函数回调

function greeting(){

     //*****
     
     sayHi();
     
     //*****
     
}

function sayHi(){

     return "H1!";
     
}

greeting();

//最后调用的函数,最先执行完

//JS解释器使用栈来控制函数的调用顺序

### In what situation should we use queue?

1.需要先进先出的场景
2.食堂排队打饭, JS异步中的任务队列、计算最近请求次数
* 食堂只留一个窗口,学生排队打饭似春运
* 先进先出，保证有序

* JS是单线程,无法同时处理异步中的并发任务
* 使用任务队列先后处理异步任务

* 计算最近的请求次数
* 有新请求就入队, 3000ms前发出的请求出队。
* 队列的长度就是最近请求次数。

* Javascript中没有队列,但可以用Array实现队列的所有功能
* 队列常用操作: push, shift, queue[0]













	

