/*  
    Merge two sorted linked lists and return it as a new sorted list. 
    The new list should be made by splicing together the nodes of the 
    first two lists.
*/

/* 
1.新建一个新链表, 作为返回结果
2.用指针遍历两个有序链表, 并比较两个链表的当前节点，
较小者先接入新链表，并将指针后移一步
3.链表遍历结束，返回新链表
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    const res = new ListNode(0);
    let p = res;
    let p1 = l1;
    let p2 = l2;

    while (p1 && p2) {
        if (p1.val < p2.val) {
            p.next = p1;
            p1 = p1.next;
        } else {
            p.next = p2;
            p2 = p2.next;
        }
        p = p.next;
    }
    if (p1) {
        p.next = p1;
    }
    if (p2) {
        p.next = p2;
    }
    return res.next;

};

// Time Complexity O(m + n) m：链表1的长度 n:链表2的长度

// Space Complexity O(1) 新建的都是指针，不是数组或者矩阵