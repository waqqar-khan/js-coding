// A decimal number is called deci-binary if each of 
// its digits is either 0 or 1 without any leading zeros. 
// For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

// Given a string n that represents a positive decimal integer,
//  return the minimum number of positive deci-binary numbers needed so that they sum up to n.

 

// Example 1:

// Input: n = "32"
// Output: 3
// Explanation: 10 + 11 + 11 = 32
// Example 2:

// Input: n = "82734"
// Output: 8
// Example 3:

// Input: n = "27346209830709182346"
// Output: 9

var minPartitions = function(n) {
    let minimumDeciBinary = 0;

    /*
    brute force method, looping over each element in the array twice
    for(let i=0; i< n.length; i++){
        let j = i+1;
        while(n[i] > n[j]){
            j++;
        }
        if(minimumDeciBinary < n[i]){
            minimumDeciBinary = n[i]
        }
    }

    */

    //optimized approach
    /*
     1. initialize a minimumCounter value with 0
     2. loop through till the end of string
     3. initialize another pointer j with a value ahead of i
     4. run a while loop by taking care of MinimumCounter and if i value is greater than j value
     5. update minimumCounter value with i value
     6. increment j value
     7. out of while loop inside for loop, a if condition to check if minimumCounter is less than ith value
     8. same as step 5
     9. return minimumCounter
    */
    for(let i=0; i< n.length; i++){
        let j = i+1;
        while(minimumDeciBinary < n[i] && n[i] > n[j]){
             minimumDeciBinary = n[i]
            j++;
        }
        if(minimumDeciBinary < n[i]) {
            minimumDeciBinary = n[i]
        }
    }

    return minimumDeciBinary;

};

console.log(minPartitions("32"));
