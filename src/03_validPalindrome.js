// A phrase is a palindrome if, after converting all uppercase letters into
// lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

var isPalindrome = function(s) {
    //after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, reverse it and check if it reads the same forward and backward

    let newS = s.toLowerCase();
     //newS = newS.replace(/\W/g,"") - this won't remove underscore
    newS = newS.replace(/[^0-9a-z]/gi, '');
   let  finalReversedS = newS.split("").reverse().join("");

    return finalReversedS === newS;

};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
