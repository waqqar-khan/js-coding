// Given two strings s and t, return true if t is an anagram of s,
// and false otherwise.

// An Anagram is a word or phrase formed by rearranging 
// the letters of a different word or phrase, 
// typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

var isAnagram = function(s, t) {
    // Input: s = "anagram", t = "nagaram"
    // Output: true

    // 2 string, find if same characters in the word
    // first if both length are not same return false; we need to sort this string so first do split to convert it into array than do sort to rearange string in alphabetically order and now we use join to convert it back to string and comapre it with equality operator, if not equal return false; at end return true

    if(s.length !== t.length) {
        return false;
    } 

    let sCopy = s.split("").sort().join("");
    let tCopy = t.split("").sort().join("")
   if(sCopy !== tCopy){
       return false;
   }

     

    return true;


};

console.log(isAnagram(s = "anagram", t = "nagaram"))