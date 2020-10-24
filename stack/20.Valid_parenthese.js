/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true*/

//·对于没有闭合的左括号而言,越靠后的左括号,对应的右括号越靠前
//.满足后进先出,考虑用栈

//解题步骤
//1.扫描字符串,遇左括号入栈，遇到和栈顶括号类型匹配的右括号就出栈,类型不匹配
//直接判定为不合法
//最后栈空了就合法,否则就不合法

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 === 1){ return false;}
    const stack = [];
    for(let i = 0; i<s.length; i++){
        const c = s[i];
        if(c === "(" || c === "{" || c==="["){
            stack.push(c);
        }else{
            const t = stack[stack.length - 1];
            if(
                (t === '(' && c === ")") ||
                (t === "{" && c === "}") ||
                (t === "[" && c === "]")
            ){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    return stack.length === 0;
};


//时间复杂度:O(n),空间复杂度:O(n)



