//解题思路:无法直接获取被删除节点的上个节点
//将被删除的节点转移到下个节点
// 1.将被删除节点的值改为下个节点的值
// 2.删除下个节点
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};   