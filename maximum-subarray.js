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

// Option 2, with error handling in case the array is provided empty

function maxSubarraySum(nums) {

    // if (nums.length === 0) {
    //     throw new Error ("Array should not be empty!")
    // }
    
    // Check if the array is empty

    if (nums.length === 0) return 0 // Return a default value for an empty array

    let currentSum = 0 // Initialize the current sum

  // Use the reduce() method to find the maximum subarray sum
    return nums.reduce((maxSum, num) => {
         // Compare num with the current sum plus num
        // Update currentSum if num is greater, otherwise continue extending the subarray
      currentSum = (num > currentSum + num) ? num : currentSum + num

      // Compare currentSum with maxSum and update maxSum if currentSum is greater
      if (currentSum > maxSum) {  
        maxSum = currentSum
      }
      return maxSum;  // Return the updated maxSum for the next iteration
    }, nums[0])   // Initial value for maxSum is the first element of the array
  }

console.log(maxSubarraySum([5,4,-1,7,8])); //Output: 23
console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4])); //Output: 6
