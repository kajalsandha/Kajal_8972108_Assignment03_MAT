export default function calculateCanvasDiagonal(length: any, width: any): number {
  // Validate inputs
  if (
    isNaN(length) ||
    isNaN(width) ||
    length === null ||
    width === null ||
    length === '' ||  // Check for empty strings
    width === ''      // Check for empty strings
  ) {
    return NaN;
  }

  // Handle zero values
  if (length === 0 && width === 0) return 0;

  // Calculate the diagonal using absolute values
  return Math.sqrt(Math.pow(Math.abs(Number(length)), 2) + Math.pow(Math.abs(Number(width)), 2));
}


