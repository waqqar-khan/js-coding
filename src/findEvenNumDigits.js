// Given an array nums of integers, return how many of them contain an even number of digits.

 

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.

var findEvenNumbersDigit = function(nums) {
    //Input: nums = [12,345,2,6,7896]
    //Output: 2

    //iterate over the array and inside of that run a while loop till element
    // is equal to 0 than check if count is even than increase the result count
    
        let count = 0;
        let res = 0;
        
        for(let i = 0; i < nums.length ; i++)
        {
            while(nums[i] !== 0)
            {
           nums[i] =  Math.floor(nums[i] / 10);
               count++;
            }
            if(count % 2 === 0)
            res++;
            count = 0;
        }
        return res;
};

console.log(findEvenNumbersDigit([12,345,2,6,7896]));