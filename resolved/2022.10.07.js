/* Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0] */

const numbers = [1, 2, 3];
const target = 4;

// const numbers = [
//   -524, 380, 132, 374, 993, -972, -129, 6, 77, -174, 932, -718, 113, -433, 101,
//   766, -62, -239, -946, -550, 99, -564, 345, -449, -633, -854, 73, -283, 249,
//   -826, 293, -128, 196, -281, 216, 440, -934, 52, -845, 206, 167, 372, -531,
//   296,
// ];
// const target = -282;

function twoum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      console.log(`i: ${numbers[i]}, j: ${numbers[j]}, sum: ${sum}`);
      if (sum === target) return [i, j];
    }
  }
}
console.log(twoSum(numbers, target));
