/**
 * Determines the letter grade based on a numeric score.
 * @param {number} score - The numeric score.
 * @returns {string} The letter grade.
 *
 * Example: determineGrade(85) should return 'B'.
 */
export function determineGrade(score) {
  if (score >= 90 && score < 101) {
    return 'A'
  } if (score >= 80 && score < 90) {
    return 'B'
  } if (score >= 70 && score < 80) {
    return 'C'
  } if (score >= 60 && score < 70) {
    return 'D'
  } else {
    return 'F'
  }

}
