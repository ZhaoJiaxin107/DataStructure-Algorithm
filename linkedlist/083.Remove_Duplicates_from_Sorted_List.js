/*Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3*/

/*Functions:
1.因为链表是有序的，所以重复元素一定相邻
2.遍历链表，如果发现当前元素和下个元素值相同，就删除下个元素值
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head){
    let p = head;
    while(p && p.next){
        if(p.val === p.next.val){
            p.next = p.next.next;
        }else{
            p = p.next;
        }
    }
    return head;
}