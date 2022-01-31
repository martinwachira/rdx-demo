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

// Given a string s="abcabcbb", find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = (s) => {
  // create a variable to store the length of the longest substring
  let longest = 0;
  // create a variable to store the current substring
  let current = "";
  // loop through the string
  for (let i = 0; i < s.length; i++) {
    // if the current substring does not contain the current character
    if (current.indexOf(s[i]) === -1) {
      // add the current character to the current substring
      current += s[i];
    } else {
      // if the current substring does contain the current character
      // set the current substring to the current character
      current = s[i];
    }
    // if the length of the current substring is greater than the longest substring
    if (current.length > longest) {
      // set the longest substring to the current substring
      longest = current.length;
    }
  }
  // return the length of the longest substring
  return longest;
};

/**
    Implementation of Null Object Pattern
*/
class User {
  constructor(id, name, role) {
    this.id = id;
    this.name = name;
    this.role = role;
  }

  hasAccess() {
    return this.name === "Admin";
  }
}

class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
    this.role = null;
  }

  hasAccess() {
    return false;
  }
}

const users = [new User(1, "Admin", 1), new User(2, "Sara", 2)];

const getUser = (id) => {
  const user = users.find((user) => user.id === id);
  if (user == null) {
    return new NullUser();
  } else {
    return user;
  }
};

// print user
const printUser = (id) => {
  const user = getUser(id);
  console.log(`User: ${user.name}, ${user.role}`);
  if (user.role === 1) {
    console.log("Access Granted");
  } else if (user.role === 2) {
    console.log("Access partially granted");
  } else if (user.role === null) {
    console.log("Access Denied");
  }
};

printUser(1);
printUser(2);
printUser(99);
