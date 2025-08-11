export function generateRandomOrgName(length = 6): string {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return result.charAt(0).toUpperCase() + result.slice(1);
}
export function generateRandomPincode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
