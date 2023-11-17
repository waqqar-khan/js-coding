// const input = ["apple", "litchi", "mango", "mango", "apple", "guava", "apple"];
// const output = ["litchi_1", "guava_1", "apple_3", "mango_2"];

function countFruitsAsc(fruits) {
  // the output array is created with objects that have both the fruit and its count.
  // The array is then sorted based on the count in ascending order using the sort function.
  // Finally, the output array is mapped to the desired format.
  const fruitCount = {};

  // Count occurrences of each fruit
  fruits.forEach((fruit) => {
    fruitCount[fruit] = (fruitCount[fruit] || 0) + 1;
  });

  // Create the output array
  const output = Object.keys(fruitCount)
    .map((fruit) => ({ fruit, count: fruitCount[fruit] }))
    .sort((a, b) => a.count - b.count)
    // .sort((a, b) => b.count - a.count) <-- Reverse the order for descending -->
    .map((entry) => `${entry.fruit}_${entry.count}`);

  return output;
}

// Example usage
const input = ["apple", "litchi", "mango", "mango", "apple", "guava", "apple"];
const output = countFruitsAsc(input);

console.log(output);

// 2nd Approach

//   function countFruits(fruits) {
//     const fruitCount = fruits.reduce((count, fruit) => {
//       count[fruit] = (count[fruit] || 0) + 1;
//       return count;
//     }, {});

//     const output = Object.keys(fruitCount).map((fruit) => `${fruit}_${fruitCount[fruit]}`);

//- Sort the output array in ascending order based on fruit names
//     const sortedOutput = output.sort((a, b) => a.localeCompare(b));
//- const sortedOutput = output.sort((a, b) => b.localeCompare(a)); <-- Reverse the order for descending -->

//     return sortedOutput;
//   }

// -Example usage
//   const input = ["apple", "litchi", "mango", "mango", "apple", "guava", "apple"];
//   const output = countFruits(input);

//   console.log(output);
