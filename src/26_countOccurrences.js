// Input:  ["apple", "litchi","mango", "mango","apple","guava","apple"]
// Output: ["apple_3","litchi_1","mango_2","guava_1"]

function countFruits(fruits) {
  // This code defines a function countFruits that takes an array of fruits
  // as input and returns the desired output array. The fruitCount object
  // is used to keep track of the occurrences of each fruit, and then Object.
  // keys and map are used to create the final output array.
  const fruitCount = {};

  // Count occurrences of each fruit
  fruits.forEach((fruit) => {
    fruitCount[fruit] = (fruitCount[fruit] || 0) + 1;
  });

  // Create the output array
  const output = Object.keys(fruitCount).map(
    (fruit) => `${fruit}_${fruitCount[fruit]}`
  );

  return output;
}

// Example usage
const input = ["apple", "litchi", "mango", "mango", "apple", "guava", "apple"];
const output = countFruits(input);

console.log(output);

// 2nd Approach
// <--
// reduce Method: The reduce method is used to iterate over the array of fruits (fruits).
// It accumulates the counts of each fruit in the fruitCount object.
// The count parameter in the callback function is the accumulator, which keeps track of the counts.
// For each fruit in the array, it checks if the fruit is already a key in count.
// If yes, it increments the count by 1; if not, it initializes the count to 1.
// The updated count object is returned and used for the next iteration.
// Object.keys and map: After counting the occurrences, Object.keys(fruitCount)
// is used to get an array of unique fruit names.
// Then, the map method is applied to create a new array (output)
// by combining each fruit name with its count in the format ${fruit}_${fruitCount[fruit]}.
// Return: The final array (output) is returned, representing the
// desired output of unique fruits along with their counts.
// Example Usage: The function is then called with an example input array,
// and the result is printed to the console.
// -->

// function countFruits(fruits) {
//- Step 1: Use the reduce method to count occurrences of each fruit
//     const fruitCount = fruits.reduce((count, fruit) => {

//- If the fruit is already a key in the count object, increment its value by 1
//- If not, initialize it with a count of 1
//       count[fruit] = (count[fruit] || 0) + 1;
//- Return the updated count object for the next iteration
//       return count;
//     }, {});

//- Step 2: Use Object.keys and map to create the output array
//     const output = Object.keys(fruitCount).map((fruit) => `${fruit}_${fruitCount[fruit]}`);

//- Step 3: Return the final output array
//     return output;
//   }

//- Example usage
//   const input = ["apple", "litchi", "mango", "mango", "apple", "guava", "apple"];
//   const output = countFruits(input);

//   console.log(output);
