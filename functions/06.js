/**
 * Checks if a person is old enough to vote.
 * @param {number} age - The age of the person.
 * @returns {boolean} True if the person is 18 or older, false otherwise.
 *
 * Example: canVote(20) should return true.
 */
export function canVote(age) {
  if (age >= 18) {
    return true
  } else {
    return false
  }
  // TODO: return true if age is greater than or equal to 18
}
