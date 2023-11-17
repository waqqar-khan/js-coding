// flatten this array
// const arr2 = [1, [0, [1, [4], [2, [3, [4, 5]], [4]]]]];
// output = [1, 0, 1, 4, 2, 3, 4, 5, 4]
const arr2 = [1, [0, [1, [4], [2, [3, [4, 5]], [4]]]]];

// The function uses recursion to handle nested arrays.
// It goes through each element of the input array,
// and if an element is itself an array, it flattens that array recursively.
// If the element is not an array, it is added to the result directly.
// The final result is a flattened array containing all the elements.

// The function takes an array arr as an argument.
function flattenArray(arr) {
  // The result array will store the flattened elements.
  let result = [];

  // This loop iterates through each element of the input array.
  for (let i = 0; i < arr.length; i++) {
    // Checks if the current element is an array.
    if (Array.isArray(arr[i])) {
      // If the current element is an array,
      // it recursively calls the flattenArray function
      // on that array and concatenates the result to the result array.
      result = result.concat(flattenArray(arr[i]));
    } else {
      // If the current element is not an array, it is pushed directly into the result array.
      result.push(arr[i]);
    }
  }

  // Once all elements are processed, the function returns the flattened result array.
  return result;
}

const flattenedArray = flattenArray(arr2);
console.log(flattenedArray);

// 2nd Approach
// function flattenArray(arr) {
//     return arr.reduce((flat, element) => {
//         if (Array.isArray(element)) {
//             return flat.concat(flattenArray(element));
//         } else {
//             return flat.concat(element);
//         }
//     }, []);
// }

// const flattenedArray = flattenArray(arr2);
// console.log(flattenedArray);

// 3rd Approach
// console.log(arr2.flat(Infinity))
