// Given a string, return true if the string is a palindrome or false if it is not.  Palindromes are strings that form the same word if it is reversed. *Do* include spaces and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcd") === false

function palindrome(str) {
  let duplicateStr = str.split("").reverse().join("");
  return duplicateStr === str;
}

console.log(palindrome("abba"));


// 2nd alternative solution
// function palindrome(str){
//     return str.split('').every((char,i)=>{
//         return char === str[str.length-i -1];
//     });
// }

// console.log(palindrome("abcd"));
