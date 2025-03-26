import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  // Test for positive values
  test('should calculate paint cost correctly for positive values', () => {
    expect(calculatePaintCost(10, 5)).toBe(50);
    expect(calculatePaintCost(20, 7.5)).toBeCloseTo(150); // Handles floating-point precision
    expect(calculatePaintCost(15, 10)).toBe(150);
  });

  // Test for zero values
  test('should return 0 when paint required is 0', () => {
    expect(calculatePaintCost(0, 5)).toBe(0);
  });

  test('should return 0 when cost per liter is 0', () => {
    expect(calculatePaintCost(10, 0)).toBe(0);
  });

  // Test for negative values (expecting errors)
  test('should throw an error for negative values', () => {
    expect(() => calculatePaintCost(-10, 5)).toThrow(
      "Values for paintRequired and costPerLiter must be non-negative."
    );
    expect(() => calculatePaintCost(10, -5)).toThrow(
      "Values for paintRequired and costPerLiter must be non-negative."
    );
    expect(() => calculatePaintCost(-10, -5)).toThrow(
      "Values for paintRequired and costPerLiter must be non-negative."
    );
  });

  // Edge cases
  test('should handle edge cases correctly', () => {
    expect(calculatePaintCost(0, 0)).toBe(0); // Both values are zero
    expect(calculatePaintCost(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER); // Large numbers
    expect(() => calculatePaintCost(Number.MIN_SAFE_INTEGER, -1)).toThrow(
      "Values for paintRequired and costPerLiter must be non-negative."
    );
  });
});

