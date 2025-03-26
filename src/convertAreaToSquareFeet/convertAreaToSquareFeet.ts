export default function convertAreaToSquareFeet(area: number): number {
  // Ensure input is a valid number
  if (isNaN(area)) {
    throw new Error('Invalid input: area must be a number.');
  }

  // Conversion factor: 1 square meter = 10.7639 square feet
  const conversionFactor = 10.7639;

  return area * conversionFactor;
}
