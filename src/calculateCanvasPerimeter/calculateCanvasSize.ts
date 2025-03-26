export default function calculateCanvasSize(length: string, width: string): number {
  const parsedLength = parseFloat(length);
  const parsedWidth = parseFloat(width);

  // Validate inputs for non-numeric values
  if (isNaN(parsedLength) || isNaN(parsedWidth)) return -1;

  // Convert negative values to absolute values
  const absLength = Math.abs(parsedLength);
  const absWidth = Math.abs(parsedWidth);

  // Calculate the canvas size
  return absLength * absWidth;
}

