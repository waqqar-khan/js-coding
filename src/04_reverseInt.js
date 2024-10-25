// Problem Statement
// Given an integer, return an integer that is the reverse ordering of numbers.
// --- Examples
//   reverseInt(32) === 23
//   reverseInt(781) === 178
//   reverseInt(200) === 2
//   reverseInt(-73) === -37
//   reverseInt(-540) === -45


function reversedInt(num){
    const revNum = num.toString().split('').reverse().join('');

    if(num < 0){
        return parseInt(revNum) * -1;
    }
    return parseInt(revNum);
}

console.log(reversedInt(-540));


// 2nd alternative solution
// function reversedInt(num){
  // Store the sign of the number
    //const sign = Math.sign(num);
    
    // Convert to string, remove the sign if negative, reverse, and convert back to integer
   //const revNum = Math.abs(num).toString().split('').reverse().join('');
    
    // Parse the reversed string and restore the sign
    //return parseInt(revNum) * sign;
// }

// console.log(reversedInt(-73));
