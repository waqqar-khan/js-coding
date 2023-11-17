// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

var numIdenticalPairs = function(nums) {
    //Input: nums = [1,2,3,1,1,3]
    //Output: 4

    // declare a count variable, initialize two loops, iterate second loop according to first loop, compare nums[i] == nums[j], if true increase count 

    let count = 0;

    for(let i = 0; i < nums.length -1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                count++;
            }
        }
    }

    return count;

};

console.log(numIdenticalPairs([1,2,3,1,1,3]));
