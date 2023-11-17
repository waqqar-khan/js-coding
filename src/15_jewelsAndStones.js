// You're given strings jewels representing the types of stones that are jewels,
// and stones representing the stones you have. Each character in 
// stones is a type of stone you have. You want to know 
// how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

var numJewelsInStones = function(jewels, stones) {
    // Input: jewels = "aA", stones = "aAAbbbb"
    // Output: 3

    // initialize counter with 0, run two loops - one for jewels and another for stones,
    // outer loop will be for jewels and inner will be for stones, 
    // if outer loop value matches to the inner loop value will increase count
    // and the inner loop continues till the end of length of stones, return count

    let counter = 0;

    for(let i=0; i < jewels.length; i++){
        for(let j=0; j < stones.length; j++) {
            if(jewels[i] == stones[j]){
                counter++
            }
        }
    }

    return counter;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
