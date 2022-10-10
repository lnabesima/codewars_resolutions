/* 
Sentence Smash

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
Example

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

const words = ['hello', 'world', 'this', 'is', 'great'];

function smash(words) {
  return words.join(' ');
}

// console.log(smash(words));

/* ----- */

/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

const num = 3212;

function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split('')
      .map(el => el ** 2)
      .join('')
  );
}

console.log(squareDigits(num));
