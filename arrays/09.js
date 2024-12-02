/**
 * Return the smallest age from an array of two ages.
 * The input array will always have exactly two numbers.
 * @param {number[]} ages - The array of two ages.
 * @returns {number} The smallest age.
 * @example
 * findYoungestAge([29, 31]); // returns 29
 */
export function findYoungestAge(ages) {
  const age1 = ages[0];
  const age2 = ages[1];

  if (age1 < age2) {
    return age1;
  } else {
    return age2;
  }
}

