/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()" // Output: true

Example 2:
Input: s = "()[]{}" // Output: true

Example 3:
Input: s = "(]" // Output: false
*/

function isValid(s) {
  const hashmap = { //Define a hashmap to store opening and closing brackets as keys & value
    '(': ')',
    '{': '}',
    '[': ']'
  }
  const stack = [] // Create an empty stack to store CLOSING brackets encountered

  for(let key of s) { // Iterate over each character in the input string
    if(hashmap[key]) { // If the character is an OPENING bracket
      stack.push(hashmap[key]) // Push the corresponding CLOSING bracket onto the stack
    } else if (stack.length > 0 && stack[stack.length - 1] === key) { // If the character is a CLOSING bracket
      stack.pop() // REMOVE the matching closing bracket from the stack which is the last item in the stack
    } else {
      return false // If the character is not a valid opening or closing bracket, return false
    }
  }
  return stack.length===0 // Return true if the stack is empty (all brackets matched), false otherwise
}



console.log(isValid("()[]{}"))
console.log(isValid("(]"))