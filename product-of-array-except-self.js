/* 
Product of Array Except Self
Given an integer array nums, return an array answer such that answer[i] 
is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4] // Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3] // Output: [0,0,9,0,0]
*/

// Solution

function productExceptSelf(nums) {
    const n = nums.length;
    const output = [];

    // Calculate the product of all elements to the left of each element
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
    output[i] = leftProduct;
    leftProduct *= nums[i];
    }

    // Calculate the product of all elements to the right of each element and multiply it with the left product
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
    output[i] *= rightProduct;
    rightProduct *= nums[i];
    }
    return output;
}

let nums = [-1,1,0,-3,3]
console.log(productExceptSelf(nums)); // Output: [ -0, 0, 9, -0, 0 ]