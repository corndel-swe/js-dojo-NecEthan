/**
 * Flattens a nested array into a single array.
 *
 * @param {number[][]} arr - The input nested array of numbers.
 * @returns {number[]} - The flattened array.
 *
 * @example
 * // returns [1, 2, 3, 4, 5, 6]
 * flattenNestedArray([[1, 2, 3], [4, 5], [6]]);
 */
export function flattenNestedArray(arr) {
  // TODO: Initialize a new array to hold the flattened elements.
  // TODO: Use a for loop to iterate over the outer array.
  // TODO: Use another for loop to iterate over each inner array.
  // TODO: Add each element to the new array.
  // TODO: Return the new array.

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    for ( let j = 0; j < arr[i].length; j++) {
      newArr.push(arr[i][j])
    }
  }

  return newArr;
}
