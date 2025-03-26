export default function calculateCanvasSize(length: string, width: string): number {
  // Validate inputs
  if (!length || !width) return NaN;
  if (isNaN(Number(length)) || isNaN(Number(width))) return NaN;

  // Convert to numbers
  const len = Math.abs(Number(length));
  const wid = Math.abs(Number(width));

  return 2 * (len + wid);
}

