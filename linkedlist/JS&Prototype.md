### 原型链简介
1.原型链的本质是链表<br>

2.原型链上的节点是各种原型对象，比如Function.prototype、Object.prototype

3.原型链通过_proto_属性连接各种原型对象

obj -> Object.prototype -> null<br>
func -> Function.prototype -> Object.prototype -> null<br>
arr -> Array.prototype -> Function.prototype -> null<br>

#### 原型链知识点
1.如果A沿着原型链能找到B.prototype, 那么A instance of B 为true
2.如果在A对象上没有找到x属性,那么会沿着原型链找X属性

 
