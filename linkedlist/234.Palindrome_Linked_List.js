/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //Stack
    let stack = [], cur = head;
    while(cur!=null){
        stack.push(cur.val);
        cur = cur.next;
    }
    while(head != null){
        if(head.val!=stack[stack.length-1]) return false;
        head = head.next;
        stack.pop();
    }
    return true;

    // Array
    let arr = [], cur = head;
    while(cur!=null){
        arr.push(cur.val);
        cur = cur.next;
    }
    for(let i = 0, j = arr.length - 1; i < j; i++, j--){
        if(arr[i]!=arr[j]) return false;
    }
    return true;
};