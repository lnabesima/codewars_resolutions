/* 
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

const arr = [6, 2, 1, 8, 10];

function sumArray(arr) {
  if (!arr || arr.length <= 2) {
    return 0;
  } else {
    arr.sort((a, b) => a - b).pop();
    arr.shift();
    const newArr = arr.reduce((acc, curr) => acc + curr, 0);
    return newArr;
  }
}

console.log(sumArray(arr));

/* ------------- */

/* Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line. */

// const numbers = [1, 5.2, 4, 0, -1];
const numbers = [];

// Sum Numbers
function sum(numbers) {
  'use strict';
  return numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
}

console.log(sum(numbers));
