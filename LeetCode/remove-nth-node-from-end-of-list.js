// https://leetcode.com/problems/remove-nth-node-from-end-of-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sz = 1;
    let h = head;

    while (h.next) {
        h = h.next;
        sz++;  
    }
    const m = sz - n;
    
    if (!m) return head.next;

    for (let i = 0, h = head; i < sz; i++, h = h.next) {
        if (i + 1 === m) {
            h.next = h.next && h.next.next;
            return head;
        }
    }
    
    return null;
};
