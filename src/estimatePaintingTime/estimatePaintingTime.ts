export default function estimatePaintingTime(area: number, paintingSpeed: number): number {
  // Validate inputs
  if (isNaN(area) || isNaN(paintingSpeed)) {
    throw new Error('Invalid input: Both area and paintingSpeed must be numbers.');
  }
  if (paintingSpeed === 0) {
    return Infinity; // Cannot divide by zero; represents infinite time
  }

  return area / paintingSpeed;
}
