export default function calculatePaintCost(paintRequired: number, costPerLiter: number): number {
  // Validate inputs
  if (paintRequired < 0 || costPerLiter < 0) {
    throw new Error("Values for paintRequired and costPerLiter must be non-negative.");
  }

  // Calculate paint cost
  return paintRequired * costPerLiter;
}

