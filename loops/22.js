/**
 * Finds the maximum element in a nested array.
 *
 * @param {number[][]} arr - The input nested array of numbers.
 * @returns {number} - The maximum element in the nested array.
 *
 * @example
 * // returns 9
 * findMaxNestedArray([[1, 9, 3], [4, 5], [6, 8]]);
 */
export function findMaxNestedArray(arr) {
  // TODO: Initialize a variable to hold the maximum value, starting with the first element of the first inner array.
  // TODO: Use a for loop to iterate over the outer array.
  // TODO: Use another for loop to iterate over each inner array.
  // TODO: For each element, check if it is greater than the current maximum value.
  // TODO: If it is, update the maximum value.
  // TODO: Return the maximum value.

  let maxVal = arr[0][0]

  for (let i=0; i < arr.length; i++) {
    for (let j=0; j < arr[i].length; j++) {
      console.log(arr[i][j])
      if (arr[i][j] > maxVal) {
        maxVal = arr[i][j]
      }
    }
  }

  return maxVal;
}
