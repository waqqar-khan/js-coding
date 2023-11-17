// Given an integer array nums, return true if any value appears 
// at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

var containsDuplicate = function(nums) {
    // nums = true if any value appears twice
    // nums = false if every element is distinct
    // so we need to compare first element with all other element in the array and so on for each element
    for (let i = 0; i < nums.length -1; i++){
        for( let j=i+1; j <nums.length; j++) {
            if(nums[i] === nums[j]){
                return true;
            }   
        }
    }
    return false;

};

console.log(containsDuplicate([1,2,3,1]));