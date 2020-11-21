/*Given a string s containing just the characters 
'(', ')', '{', '}', '[' and ']',
 determine if the input string is valid.

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

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

var isvalid  = function(s){
    if(s.length%2 ==1) return false;
    const stack = [];
    const map = new Map();
    map.set('(',')');
    map.set('[',']');
    map.set('{','}');
    for(let i = 0;i<s.length;i++){
        const c = s[i];
        if(map.has(c)){
            stack.push(c);
        }else{
            const t = stack[stack.length-1];
            if (
                map.get(t) === c
            ){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    return stack.length === 0;
}


// 时间复杂度: O(n)
// 空间复杂度: O(n)