/**
 * Determines the price of a movie ticket based on age and membership status.
 * @param {number} age - The age of the person.
 * @param {boolean} isMember - True if the person is a member.
 * @returns {number} The price of the movie ticket.
 *
 * Example: ticketPrice(17, false) should return 8.
 */
export function ticketPrice(age, isMember) {
  if (age < 18) {
    if (isMember) {
      return 8 - 2
    } else {
      return 8
    }

  } if (age < 65) {
    if (isMember) {
      return 10 - 2
    } else {
      return 10
    }
  } else {
    if (isMember) {
      return 6 - 2
    } else {
      return 6
    }
  }
}
