// https://leetcode.com/problems/next-greater-node-in-linked-list/submissions/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    const answer = [];
    
    const findNextGreater = (head) => {
        const val = head.val;
        let current = head;
        
        do {
            current = current.next;
            if (current && current.val > val) {
                return current.val;
            }
        } while (current)
            
        return 0;
    } 
    
    let i = 0;
    let current = head;
    while (current) {
        answer[i++] = findNextGreater(current);
        current = current.next;
    }
        
    return answer;
};
