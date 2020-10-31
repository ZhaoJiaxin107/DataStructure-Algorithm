// 1.简述instanceof的原理, 并用代码实现
// 知识点：如果A沿着原型链能找到B.prototype, 
// 那么A instanceof B为 true
// 解法：遍历A的原型链，如果找到B.prototype,返回 true
// 否则返回false

const instanceOf = (A,B) => {
    let p = A;
    while(p){
        if(p === B.prototype){
            return true;
        }
        p = p.__proto__;
    }
    return false;
};

// 面试题2
var foo = {},
    F = function(){};
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a);
console.log(foo.b);

console.log(F.a);
console.log(F.b);

// 如果在A对象上没有找到 X属性, 那么会沿着原型链找到X属性
// 明确foo和F变量的原型链，沿着原型链找a属性和b属性


