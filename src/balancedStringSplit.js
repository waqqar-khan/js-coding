// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

 

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", 
// each substring contains same number of 'L' and 'R'.

var balancedStringSplit = function(s) {
    // Input: s = "RLRRLLRLRL"
    // Output: 4

    // iniatialize a L counter, R counter and counter with 0; iterate through whole s array; if index of s has L than increase L counter value else increase R counter value; if L counter and R counter value are same increase counter value; return counter

    let counterL = 0;
    let counterR = 0;
    let counter = 0;

    for(let i=0; i< s.length; i++){
        if(s[i] === "L"){
            counterL++;
        } else{
            counterR++;
        }

        if(counterL === counterR){
            counter++;
        }
    }

    return counter;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
