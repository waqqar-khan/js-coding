//Problem Statement
// Given a string, return the character that is most commonly used in the string.
// --- Examples
// maxChar("Greatest of All Time!") === "e"
// maxChar("Human Being") === "n"

function maxChar(str){
let charMap = {};
let max = 0;
let charMax = '';

for(let char of str){
    if(charMap[char]){
        charMap[char]++;
    }else{
        charMap[char] = 1;
    }
}

for(let char in charMap){
    if(charMap[char] > max){
        max = charMap[char];
        charMax = char;
    }
}

return charMax;
}

console.log(maxChar("Greatest of All Time!"));