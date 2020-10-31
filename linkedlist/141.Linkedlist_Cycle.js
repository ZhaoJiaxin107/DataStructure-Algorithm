/** Given head, the head of a linked list, determine if the linked list
 * has a cycle in it.
 * 
 * There is a cycle in a linked list if there is some node  in the list
 * that can be reached again by continuously following the next pointer.
 * 
 * Internally, pos is used to denote the index of the node that 
 * tail's next pointer is connected to. Note that pos is not passed
 * as a parameter.
 * 
 * Return true if there is a cycle in the linked list. Otherwise,
 * return false.
 */
/**
 * 解题步骤：用一快一慢两个指针遍历链表, 如果指针能够相逢, 就返回true
 * 遍历结束后，还没有相逢就返回false
 */
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
var hasCycle = function(head) {
    let p1 = head;
    let p2 = head;
    while(p1 && p2 && p2.next){
        p1 = p1.next;
        p2 = p2.next.next;
        if(p1 === p2)
            return true;
    }
    return false;
};

// 时间复杂度： 循环 O(n) n为链表的长度
// 空间复杂度： O(1),没有额外增长的数组，链表等
