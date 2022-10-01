/* Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left. */

// function removeSmallest(numbers) {
//   const smallest = Math.min(...numbers);
//   const indexOfSmallest = numbers.indexOf(smallest);

//   const newArr = numbers.filter((element, index) => index !== indexOfSmallest);

//   return newArr;
// }

function removeSmallest(numbers) {
  return numbers.filter(
    (element, index) => index !== numbers.indexOf(Math.min(...numbers))
  );
}

// const numbers = [1, 2, 3, 4, 5];
const numbers = [5, 3, 2, 1, 4];
console.log(removeSmallest(numbers));
