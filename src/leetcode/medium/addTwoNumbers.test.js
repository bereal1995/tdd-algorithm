// ex1
//Input: l1 = [2,4,3], l2 = [5,6,4]
//Output: [7,0,8]

// ex2
//Input: l1 = [0], l2 = [0]
//Output: [0]

// ex3
//Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//Output: [8,9,9,9,0,0,0,1]

/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// 시간 복잡도: O(max(m, n))
// 공간 복잡도: O(max(m, n))
function solution(l1, l2) {
  const dummy = new ListNode();
  let node = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = carry;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    carry = Math.floor(sum / 10);
    node.next = new ListNode(sum % 10);
    node = node.next;
  }

  return dummy.next;
}

describe('solution', () => {
  it('should return the sum of two linked lists', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    const expected = new ListNode(7, new ListNode(0, new ListNode(8)));
    expect(solution(l1, l2)).toEqual(expected);
  });

  it('should handle the case where one of the linked lists is empty', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = null;
    const expected = new ListNode(2, new ListNode(4, new ListNode(3)));
    expect(solution(l1, l2)).toEqual(expected);
  });

  it('should handle the case where both linked lists are empty', () => {
    const l1 = null;
    const l2 = null;
    const expected = null;
    expect(solution(l1, l2)).toEqual(expected);
  });
});
