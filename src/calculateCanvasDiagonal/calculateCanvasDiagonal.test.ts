import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('calculates the diagonal correctly for valid positive numbers', () => {
    expect(calculateCanvasDiagonal(3, 4)).toBeCloseTo(5);
    expect(calculateCanvasDiagonal(6, 8)).toBeCloseTo(10);
    expect(calculateCanvasDiagonal(5, 12)).toBeCloseTo(13);
  });

  test('returns 0 when both length and width are zero', () => {
    expect(calculateCanvasDiagonal(0, 0)).toBe(0);
  });

  test('handles negative values by converting them to absolute values', () => {
    expect(calculateCanvasDiagonal(-3, 4)).toBeCloseTo(5);
    expect(calculateCanvasDiagonal(3, -4)).toBeCloseTo(5);
    expect(calculateCanvasDiagonal(-3, -4)).toBeCloseTo(5);
  });

  test('returns NaN for non-numeric inputs', () => {
    expect(calculateCanvasDiagonal('a', 4)).toBeNaN();
    expect(calculateCanvasDiagonal(3, 'b')).toBeNaN();
    expect(calculateCanvasDiagonal('a', 'b')).toBeNaN();
  });

  test('returns NaN for null or undefined inputs', () => {
    expect(calculateCanvasDiagonal(null, 4)).toBeNaN();
    expect(calculateCanvasDiagonal(3, undefined)).toBeNaN();
    expect(calculateCanvasDiagonal(null, undefined)).toBeNaN();
  });

  test('returns NaN for empty strings', () => {
    expect(calculateCanvasDiagonal('', 4)).toBeNaN();
    expect(calculateCanvasDiagonal(3, '')).toBeNaN();
    expect(calculateCanvasDiagonal('', '')).toBeNaN();
  });
});

