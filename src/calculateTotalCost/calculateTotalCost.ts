export default function calculateTotalCost(paintCost: number, laborCost: number): number {
  // Ensure input values are valid numbers
  if (isNaN(paintCost) || isNaN(laborCost)) {
    throw new Error('Invalid input: Both paintCost and laborCost should be numbers.');
  }
  return paintCost + laborCost;
}
