// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer. 
//  The digits are ordered from most significant to least significant in left-to-right order. 
//  The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

var plusOne = function(digits) {
    // Input: digits = [1,2,3]
    // Output: [1,2,4]

    // Incremented the last digit directly by 1; Used a loop to propagate any carry from right to left; Added a check for potential carry from the leftmost digit and added a new digit if needed; This should correctly handle the carry and increment the array representing the number by 1
    

    // Increment the last digit by 1
    digits[digits.length - 1]++;

    // Handle potential carry from the rightmost digit
    for (let i = digits.length - 1; i > 0; i--) {
        if (digits[i] === 10) {
            digits[i] = 0;
            digits[i - 1]++;
        }
    }

    // Handle carry from the leftmost digit
    if (digits[0] === 10) {
        digits[0] = 0;
        digits.unshift(1); // Add 1 at the beginning
    }

    return digits;
};

console.log(plusOne([1,2,3]));