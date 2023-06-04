/*
Maximum Subarray
Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4] // Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:
Input: nums = [1] // Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:
Input: nums = [5,4,-1,7,8] // Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
*/

// Solution

function maxSubArraySum(nums) {
    
    let currentSum = 0

    return nums.reduce((maxSum, num) => {
        currentSum = Math.max(num, currentSum + num)
        return Math.max(maxSum, currentSum)
    }, nums[0])
}

// Option 2 using Math.max

  function maxSubarraySum(nums) {
    let sum = 0 // Initialize the current subarray sum
    let max = 0 // Initialize the maximum subarray sum
  
    nums.reduce((_, num) => {
      sum = Math.max(num, sum + num)
      max = Math.max(max, sum)
    }, 0)        // Initial value for maxSum in reduce is 0
  
    return max  // Return the updated max for the next iteration
  }
  
console.log(maxSubarraySum([5,4,-1,7,8])); //Output: 23
console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4])); //Output: 6
