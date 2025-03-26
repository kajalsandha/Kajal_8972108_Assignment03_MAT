import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  test('should calculate painting time correctly for positive values', () => {
    expect(estimatePaintingTime(100, 10)).toBe(10);
    expect(estimatePaintingTime(200, 20)).toBe(10);
    expect(estimatePaintingTime(150, 15)).toBe(10);
  });

  test('should return Infinity for painting speed of 0', () => {
    expect(estimatePaintingTime(100, 0)).toBe(Infinity);
  });

  test('should handle area of 0 correctly', () => {
    expect(estimatePaintingTime(0, 10)).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(estimatePaintingTime(-100, 10)).toBe(-10);
    expect(estimatePaintingTime(100, -10)).toBe(-10);
    expect(estimatePaintingTime(-100, -10)).toBe(10);
  });

  test('should throw an error for invalid inputs', () => {
    expect(() => estimatePaintingTime('invalid' as unknown as number, 10)).toThrow(
      'Invalid input: Both area and paintingSpeed must be numbers.'
    );
    expect(() => estimatePaintingTime(100, 'invalid' as unknown as number)).toThrow(
      'Invalid input: Both area and paintingSpeed must be numbers.'
    );
  });
});
