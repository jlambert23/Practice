// https://leetcode.com/problems/swap-nodes-in-pairs/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  return swap(head, swapPairs(head.next.next));
};

var swap = function (head, next) {
  const newHead = head.next;
  newHead.next = head;
  head.next = next;
  return newHead;
};

/**
 *
 * @param {Array} arr
 * @return {ListNode}
 */
var makeLinkedList = function (arr) {
  return arr.reduceRight((head, value) => ({ value, next: head }), null);
};
