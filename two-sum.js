/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// Solution: Using a hash map

function twoSum(nums, target) {
    const numMap = {}; // Step 1: Initialize an empty object to store numbers and their indices.
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i]; // Step 2: Calculate the complement of the current number.
  
      if (numMap.hasOwnProperty(complement)) { // Step 3: Check if the complement exists in the numMap object.
        return [numMap[complement], i]; // Step 4: If complement exists, return the indices of the numbers.
      }
  
      numMap[nums[i]] = i; // Step 5: Store the current number and its index in the numMap object.
    }
  
    return []; // Step 6: If no pair is found, return an empty array.
  }
  
  // Example usage:
//   const nums = [2, 7, 11, 15];
//   const target = 9;
//   const result = twoSum(nums, target);
//   console.log(result); // Output: [0, 1]

console.log(twoSum([2, 7, 11, 15], 9))
  