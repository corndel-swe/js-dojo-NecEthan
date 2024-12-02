/**
 * Finds the sum of all even numbers smaller than the given input.
 *
 * @param {number} input - The input number.
 * @returns {number} - The sum of all even numbers smaller than the input.
 *
 * @example
 * // returns 6
 * sumEvenNumbers(5);
 */
export function sumEvenNumbers(input) {
  let sum = 0;
  for (let i = 1; i < input; i++) {
    if (i % 2 === 0) {
      sum = sum + i
    }
  }
  return sum
}
