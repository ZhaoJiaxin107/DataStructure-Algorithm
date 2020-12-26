## Data Structure and Algorithm
Process to learn data stucture and algorithm

### 时间复杂度
一个函数，O表示,比如O(1),O(n),O(logN)...
定性描述该算法的运行时间

### 空间复杂度
一个函数，O表示,比如O(1),O(n),O(n^2)...
算法在运行过程中临时占用存储空间大小的量度

一个变量：O(1)

数组：O(n)

矩阵：O(n^2)

### Stack
1.后进先出的数据结构

2.Javascript中没有栈,但可以用Array实现栈的所有功能

3.栈常用操作:push,pop,stack[stack.length-1]

### linkedList
1.多个元素组成的列表

2.元素存储不连续, 用next指针连在一起

#### 数组 vs 链表
数组: 增删非首位元素时往往需要移动元素

链表: 增删非首尾元素, 不需要移动元素, 只需要更改next的指向即可

### 集合 Set
一种无序且唯一的数据结构

ES6有集合, 叫做Set

集合的常用操作: 去重、判断某元素是否在集合中, 求交集

### 字典Map
与集合类似, 字典也是一种存储唯一值的数据结构,但是以键值对的形式来存储

ES6中有字典, 名为Map(映射)

字典的常用操作: 键值对的增删改查

### 树 Tree
一种分层数据的抽象模型

前端工程中常见的树包括DOM树、级联选择、树形控件...

JS中没有树,但是可以用Object和Array构建树

树的常用操作: 深度/广度优先遍历、先中后序遍历

深度优先遍历: 尽可能深地搜索树的分支

广度优先遍历: 先访问离根节点最近的节点

### 排序和搜索
排序: 把某个乱序的数组变成升序或者降序的数组

搜索: 找出数组中某个元素的下标

JS中的排序: 数组的sort方法

JS中的搜索: 数组的indexOf方法

常见的排序算法: 冒泡排序, 选择排序, 插入排序, 归并排序, 快速排序等

常见的搜索算法: 顺序搜索、二分搜索等


### 图
图是网络结构的抽象模型, 是一组由边连接的节点

图可是表示任何二元关系, 比如路、航班......a

JS中没有图,但是可以用Object和Array构建图

图的表示法: 邻接矩阵、邻接表、关联矩阵......

常用操作: 深度优先遍历，广度优先遍历



#### git操作
https://jingyan.baidu.com/article/0202781145eaab1bcc9ce5f0.html





