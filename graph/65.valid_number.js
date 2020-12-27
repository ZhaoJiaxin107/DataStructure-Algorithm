/* 

65. Valid Number
Validate if a given string can be interpreted as a decimal number.

Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
" -90e3   " => true
" 1e" => false
"e3" => false
" 6e-1" => true
" 99e2.5 " => false
"53.5e93" => true
" --6 " => false
"-+3" => false
"95a54e53" => false

Note: It is intended for the problem statement to be ambiguous. It would be best if you gathered all requirements up front before implementing one. However, here is a list of characters that can be in a valid decimal number:

Numbers 0-9
Exponent - "e"
Positive/negative sign - "+"/"-"
Decimal point - "."
Of course, the context of these characters also matters in the input.
*/

// 构建一个表示状态的图
// 遍历字符串, 并沿着图走, 如果到了某个节点无路可走就返回false
// 遍历结束, 如果走到3/5/6就返回true, 否则返回false

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    const graph = {
        0: { 'blank': 0, 'sign': 1, '.': 2, 'digit': 6 },
        1: { 'digit': 6, '.': 2 },
        2: { 'digit': 3 },
        3: { 'digit': 3, 'e': 4 },
        4: { 'digit': 5, 'sign': 7 },
        5: { 'digit': 5 },
        6: { 'digit': 6, '.': 3, 'e': 4 },
        7: { 'digit': 5 }
    };

    let state = 0;

    for (c of s.trim()) {
        if (c >= '0' && c <= '9') {
            c = 'digit';
        } else if (c === ' ') {
            c = 'blank';
        } else if (c === '+' || c === '-') {
            c = 'sign';
        }
        state = graph[state][c];
        if (state === undefined) {
            return false;
        }
    }
    if (state == 3 || state == 5 || state == 6) {
        return true;
    }
    return false;
};



// 时间复杂度: O(n),n为字符串的长度
// 空间复杂度: O(1)