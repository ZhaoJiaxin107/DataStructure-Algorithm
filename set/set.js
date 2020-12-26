// Set 操作
// 使用Set对象：new | add | delete | has | size

let mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5);

mySet.add("Some text");

let o = { a: 1, b: 2 };
mySet.add(o);

mySet.add({ a: 1, b: 2 });

//const has = mySet.has(1);
const has = mySet.has(3);


mySet.delete(2);

console.log("mySet:", mySet);


//for(let item of mySet) console.log(item);

// for(let [key, value] of mySet.entries())
//     console.log(value);


// Transition between Set and Array
//const myArr = [...mySet];

const myArr = Array.from(mySet);

const mySet2 = new Set([1, 2, 4, 5]);
console.log("mySet2:", mySet2);

//Intersection
const intersection = new Set([...mySet].filter(x => mySet2.has(x)));
console.log("intersection", intersection);

// Difference
const difference = new Set([...mySet].filter(x => !mySet2.has(x)));
console.log("difference", difference);





