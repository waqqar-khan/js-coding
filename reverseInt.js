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
//     const revNum = num.toString().split('').reverse().join('');

//     return parseInt(revNum) * Math.sign(num);
// }

// console.log(reversedInt(-73));