/*Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL*/
/**
 *  解题步骤
 *  1.双指针一前一后遍历链表
 *  2.反转双指针*/ 
/**
 * Definition for singly-linked list
 * function ListNode(val){
 *     this.val = val;
 *     this.next = null;
 * }
 */
var reverseList = function(head){
    let p1 = head;
    let p2 = null;
    while(p1){
        const tmp = p1.next;
        p1.next = p2;
        p2 = p1;
        p1 = tmp;
    }
    return p2;
}

