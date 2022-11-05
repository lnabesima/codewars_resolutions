/*
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]

*/

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

/* --------- */
/* 
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
Examples:

n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1) returns 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.

Note that 121 has twice the digit 1.
*/

const n = 25;
const d = 1;

function nbDig(n, d) {
  let arr = [];
  let match = new RegExp(d, 'g');
  let count = 0;
  for (let k = 0; k <= n; k++) {
    arr.push(k ** 2);
  }
  arr.forEach(
    num => {
      console.log(`for ${num}, ${((num.toString().match(match) || []).length)} match `)
      return (count = count + (num.toString().match(match) || []).length)}
  );

  return count;
}

console.log(nbDig(n, d));
