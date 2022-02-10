/** You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output should be : [7,0,8]
// Explanation: 342 + 465 = 807.

//create a solution to solve this problem

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// create a function to solve this problem

var addTwoNumbers = function (l1, l2) {
  // create a variable to store the sum of the two numbers
  let sum = 0;
  let result = new ListNode(0);
  let curr = result;
  while (l1 || l2 || sum) {
    sum += (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    sum = Math.floor(sum / 10);
    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
  }
  // return the sum of the two numbers
  return result.next;
};

// linked list
let n1 = {
  data: 1,
};
let n2 = {
  data: 2,
};

n1.next = n2;

console.log("Thee output:", n1);
