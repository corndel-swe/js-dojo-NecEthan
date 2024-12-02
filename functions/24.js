/**
 * Determines if a given day is a weekday or weekend.
 * @param {string} day - The day of the week.
 * @returns {string} 'Weekday' if the day is Monday to Friday, 'Weekend' if the day is Saturday or Sunday.
 *
 * Example: dayType('Saturday') should return 'Weekend'.
 */
export function dayType(day) {
  const dayLower = day.toLowerCase();

  if (dayLower === 'saturday' || dayLower === 'sunday') {
    return 'Weekend';
  } else if (
    dayLower === 'monday' ||
    dayLower === 'tuesday' ||
    dayLower === 'wednesday' ||
    dayLower === 'thursday' ||
    dayLower === 'friday'
  ) {
    return 'Weekday';
  } else {
    return 'Invalid day'; 
  }
}
