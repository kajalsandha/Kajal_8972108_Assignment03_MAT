import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  // Test for positive string inputs
  test("returns correct result for positive string inputs", () => {
    const result = calculateCanvasSize("10", "100");
    expect(result).toEqual(1000);
  });

  // Test for positive number inputs
  test("returns correct result for positive number inputs", () => {
    const result = calculateCanvasSize("10.5", "20.3");
    expect(result).toBeCloseTo(213.15);
  });

  // Test for zero values
  test("returns 0 when either length or width is zero", () => {
    expect(calculateCanvasSize("0", "100")).toEqual(0);
    expect(calculateCanvasSize("10", "0")).toEqual(0);
    expect(calculateCanvasSize("0", "0")).toEqual(0);
  });

  // Test for negative values
  test("handles negative values by converting them to absolute values", () => {
    expect(calculateCanvasSize("-10", "100")).toEqual(1000);
    expect(calculateCanvasSize("10", "-100")).toEqual(1000);
    expect(calculateCanvasSize("-10", "-100")).toEqual(1000);
  });

  // Test for invalid inputs
  test("returns -1 for invalid inputs", () => {
    expect(calculateCanvasSize("invalid", "100")).toEqual(-1);
    expect(calculateCanvasSize("10", "invalid")).toEqual(-1);
    expect(calculateCanvasSize("invalid", "invalid")).toEqual(-1);
  });

  // Test for null or undefined inputs
  test("returns -1 for null or undefined inputs", () => {
    expect(calculateCanvasSize(null as unknown as string, "100")).toEqual(-1);
    expect(calculateCanvasSize("10", undefined as unknown as string)).toEqual(-1);
    expect(calculateCanvasSize(null as unknown as string, undefined as unknown as string)).toEqual(-1);
  });

  // Test for empty string inputs
  test("returns -1 for empty string inputs", () => {
    expect(calculateCanvasSize("", "100")).toEqual(-1);
    expect(calculateCanvasSize("10", "")).toEqual(-1);
    expect(calculateCanvasSize("", "")).toEqual(-1);
  });
});


