/* 
242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram" // Output: true

Example 2:
Input: s = "rat", t = "car" //Output: false
*/

// Solution

function isAnagram(s, t) {
    if(s.length !== t.length) return false;
    let s_sort = s.split('').sort().join('')
    let t_sort = t.split('').sort().join('')
    return s_sort === t_sort
}

// Using ternary operator expression

function isAnagram(s, t) {
    return s.length !== t.length ? false : s.split('').sort().join('') === t.split('').sort().join('')
}

console.log(isAnagram('anagram', 'nagaram')); //Output: true

