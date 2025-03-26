export default function calculateCanvasSize(length: string, width: string): number {
  // Attempt to parse inputs
  const parsedLength = parseFloat(length);
  const parsedWidth = parseFloat(width);

  // Validate inputs
  if (isNaN(parsedLength) || isNaN(parsedWidth) || parsedLength < 0 || parsedWidth < 0) {
    throw new Error("Invalid inputs: Length and width must be non-negative numbers.");
  }

  // Calculate the canvas size (area)
  return parsedLength * parsedWidth;
}

