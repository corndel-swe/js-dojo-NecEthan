/**
 * Checks if the temperature is above freezing point.
 * @param {number} temperature - The current temperature.
 * @returns {boolean} True if the temperature is above 0 degrees, false otherwise.
 *
 * Example: isAboveFreezing(5) should return true.
 */
export function isAboveFreezing(temperature) {
  if (temperature > 0) {
    return true
  } else {
    return false
  }
  // TODO: return true if temperature is greater than 0
}
