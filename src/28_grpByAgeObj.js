// Input:
// const arr = [
//     {
//         name:'alice', age:21
//     },
//     {
//         name:'Max', age:20
//     },
//     {
//         name:'Jane', age:20
//     },
// ] 

//  output:
// [{
//     '20':[ {name:'Max', age:20},{name:'Jane', age:20}] ,
//     '21':[ {name:'alice', age:21}] 
    
// }] 

// Input array of objects
const arr = [
    {
        name: 'alice', age: 21
    },
    {
        name: 'Max', age: 20
    },
    {
        name: 'Jane', age: 20
    },
];

// Reduce the array to group objects by age
const groupedByAge = arr.reduce((acc, person) => {
    const { age } = person;

    // Check if the age key exists in the accumulator object
    if (acc[age]) {
        // If it exists, push the current person to the array
        acc[age].push(person);
    } else {
        // If it doesn't exist, create a new array with the current person
        acc[age] = [person];
    }

    // Return the accumulator for the next iteration
    return acc;
}, {});

// Transform the groupedByAge object into an array of objects
const output = Object.entries(groupedByAge).map(([age, people]) => ({
    [age]: people.map(({ name, age }) => ({ name, age }))
}));

// Display the output with detailed information in the console
console.dir(output, { depth: null });


// A modern JavaScript environment that supports the shorthand notation for displaying objects in the console. 
// In the output, [Object] represents the actual object, but it's not expanded in the console log.
// console.log(output);

// The { depth: null } option tells console.dir to display 
// the complete nested structure without any depth limit.
// This should give you a more detailed and readable output in the console.
// <-- console.dir(output, { depth: null }); --> // code


// <-- 2nd Approach (for loop)

// const arr = [
//     {
//         name: 'alice', age: 21
//     },
//     {
//         name: 'Max', age: 20
//     },
//     {
//         name: 'Jane', age: 20
//     },
// ];

// - Initialize an empty object to store the grouped data
// const groupedByAge = {};

// - Iterate over the input array using a for loop
// for (let i = 0; i < arr.length; i++) {
//     const person = arr[i];
//     const { age } = person;

    // - If the age key already exists, push the current person to the array
    // if (groupedByAge[age]) {
    //     groupedByAge[age].push(person);
    // } else {
        // - If the age key doesn't exist, create a new array with the current person
//         groupedByAge[age] = [person];
//     }
// }

// - Transform the groupedByAge object into an array of objects
// const output = Object.entries(groupedByAge).map(([age, people]) => ({
//     [age]: people.map(({ name, age }) => ({ name, age }))
// }));

// - Display the output with detailed information in the console
// console.dir(output, { depth: null });

// -->

// <-- 3rd Approach (forEach loop)

// const arr = [
//     {
//         name: 'alice', age: 21
//     },
//     {
//         name: 'Max', age: 20
//     },
//     {
//         name: 'Jane', age: 20
//     },
// ];

// - Initialize an empty object to store the grouped data
// const groupedByAge = {};

// - Iterate over the input array and populate the groupedByAge object
// arr.forEach(person => {
//     const { age } = person;

    // - If the age key already exists, push the current person to the array
    // if (groupedByAge[age]) {
    //     groupedByAge[age].push(person);
    // } else {
        // - If the age key doesn't exist, create a new array with the current person
//         groupedByAge[age] = [person];
//     }
// });

// - Transform the groupedByAge object into an array of objects
// const output = Object.entries(groupedByAge).map(([age, people]) => ({
//     [age]: people.map(({ name, age }) => ({ name, age }))
// }));

// - Display the output with detailed information in the console
// console.dir(output, { depth: null });

// -->

 


