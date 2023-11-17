// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

var isPalindrome = function(x) {
    // integer = true if palindrome 121, 11
    // integer = false if not palindrome -121, 10
    // convert integer into string and than split each value than reverse it and join and add + symbol at begigning to make it number and compare it 
    
    return x === +x.toString().split("").reverse().join("")
};

console.log(isPalindrome(121));

// 2nd alternative solution
// function palindrome(str){
//     return str.split('').every((char,i)=>{
//         return char === str[str.length-i -1];
//     });
// }

// console.log(palindrome("abcd"));