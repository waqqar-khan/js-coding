// PROBLEM STATEMENT
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('awesome') === 'emosewa'

function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("apple"));

// 2nd alternative solution
// function reverse(str){
//     return str.split('').reduce((rev, char) => char + rev,'');
// }

// console.log(reverse('hello'));

// 3rd alternative solution
// function reverse(str){
//     let rev = '';
//     for(let char of str){
//         rev = char + rev;
//     }
//     return rev;
// }

// console.log(reverse('awesome'));
