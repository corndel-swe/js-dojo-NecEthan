/**
 * Determines the season based on the month number.
 * @param {number} month - The month number (1 for January, 12 for December).
 * @returns {string} The season ('Winter', 'Spring', 'Summer', 'Autumn').
 *
 * Example: determineSeason(4) should return 'Spring'.
 */
export function determineSeason(month) {
  if (month === 12 || month === 1 || month === 2) {
    return 'Winter';
  } else if (month >= 3 && month <= 5) {
    return 'Spring';
  } else if (month >= 6 && month <= 8) {
    return 'Summer';
  } else if (month >= 9 && month <= 11) {
    return 'Autumn';
  } else {
    return 'Invalid month'; 
  }
}

