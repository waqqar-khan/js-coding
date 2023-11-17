// Given an integer array nums, move all 0's to the end of it while 
// maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

var moveZeroes = function(nums) {
    // Input: nums = [0,1,0,3,12]
    // Output: [1,3,12,0,0]

    // initialize a counter with 0; iterate a loop by check nums length; check index value and 0 with equality if yes then remove the zero at index i using splice and increase the counter value; decrement i with one; iterate a new loop with counter and push 0 at every iteration

   let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] === 0) {
            nums.splice(i, 1);
            count++;
            i--;
            }
        }

        for(let j=1; j<= count; j++) {
            nums.push(0)
        }

    
};

// Now, the moveZeroes function modifies the nums array in-place, 
// and when you log nums, you should see the desired output.
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
 