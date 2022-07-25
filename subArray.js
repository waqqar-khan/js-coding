// Problem Statement
// Given an array and subarray size, divide the array into many subarrays where each subarray is of length size
// --- Examples
// subArray([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// subArray([1,2,3,4,5,6,7],2) --> [[ 1, 2], [3, 4], [5,6], [7]]
// subArray([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// subArray([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// subArray([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function subArray(array, size){
    let subArr = [];
    let index = 0;

    while(index < array.length){
        subArr.push(array.slice(index, index + size));
        index += size;
    }
    return subArr;
}

console.log(subArray([1,2,3,4,5,6,7],2));


// 2nd alternative solution
// function subArray(array, size){
//     let subArr = [];
//     for(let ele of array){
//         let last = subArr[subArr.length - 1];
//         if(!last || last.length === size){
//             subArr.push([ele]);
//         }else{
//             last.push(ele);
//         }
//     }
//     return subArr;
// }

// console.log(subArray([1,2,3,4,5,6,7],2));