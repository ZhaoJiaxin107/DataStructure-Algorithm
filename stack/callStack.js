//前端与栈：JS中的函数调用堆栈
const func1 = () =>{
    func2();
}
const func2 = () =>{
    func3();
}
const func3 = () =>{};

//前端与栈：JS中的函数调用堆栈
const func1 = () =>{
    func2();
}
const func2 = () =>{
    func3();
}
const func3 = () =>{};


func1();