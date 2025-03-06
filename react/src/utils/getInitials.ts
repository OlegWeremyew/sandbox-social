/**
 * Generates initials from the given first and last name.
 *
 * @author "Oleg Veremeyv"
 * 
 * @param {string} name - The user's first name.
 * @param {string} surname - The user's last name.
 * @returns {string} The initials in the format "F.L." (First Last).
 *
 * @example
 * getInitials("John", "Doe"); // "J.D."
 */
export const getInitials = (name: string, surname: string): string => {
  if (!name || !surname) return ''; // Ensure valid input
  return `${name[0].toUpperCase()}.${surname[0].toUpperCase()}.`;
};
