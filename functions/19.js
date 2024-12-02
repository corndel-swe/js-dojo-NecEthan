/**
 * Calculates the total pay including overtime pay.
 * @param {number} hoursWorked - The total hours worked in a week.
 * @param {number} hourlyRate - The regular hourly rate.
 * @returns {number} The total pay including overtime.
 *
 * Example: totalPay(45, 20) should return 950.
 */
export function totalPay(hoursWorked, hourlyRate) {
  if (hoursWorked < 40) {
    return hoursWorked * hourlyRate
  } else {
    const regPay = 40 * hourlyRate
    const overtimepay = (hoursWorked - 40) * (hourlyRate * 1.5)
    return regPay + overtimepay
  }
}
