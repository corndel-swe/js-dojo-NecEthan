/**
 * Return a new array containing temperatures for the weekdays only (first 5 days).
 * @param {number[]} temps - The array of temperatures.
 * @returns {number[]} An array of temperatures for the weekdays.
 * @example
 * extractWeekdays([15, 16, 18, 20, 21, 19, 17]); // returns [15, 16, 18, 20, 21]
 */
export function extractWeekdays(temps) {
  let first5El = temps.slice(0,5)
  let list = [];
  list.push(first5El)
  return first5El
}
