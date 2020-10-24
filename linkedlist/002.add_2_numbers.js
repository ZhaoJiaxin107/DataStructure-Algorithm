/**
 * Add two numbers
 * You are given two non-empty linked lists representing two 
 * non-negative integers. The digits are stored in reverse order, 
 * and each of their nodes contains a single digit. Add the two 
 * numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero,
 except the number 0 itself.
 */
/**
 * 解题思路:
 * 1.小学数学题，模拟相加操作
 * 2.需要遍历链表
 * 3.新建一个空链表
 * 4.遍历被相加的两个链表, 模拟相加操作，将个位数追加到新链表上
 * 将十位数留到下一位去相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val){
 *    this.val = val;
 *    this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/
var addTwoNumbers = function(l1,l2){
    const l3 = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    let carry = 0;
    while(p1 || p2){
        const v1 = p1 ? p1.val:0;
        const v2 = p2 ? p2.val:0;
        const val = v1 + v2 + carry;
        carry = Math.floor(val / 10);
        p3.next = new ListNode(val % 10);
        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;
        p3 = p3.next;
    }
    if(carry){
        p3.next = new ListNode(carry);
    }
    return l3.next;
}