import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  // Test for positive string inputs
  test("returns correct result for positive string inputs", () => {
    expect(calculateCanvasSize("10", "20")).toEqual(200);
    expect(calculateCanvasSize("5", "15")).toEqual(75);
  });

  // Test for positive number inputs
  test("returns correct result for numeric inputs as strings", () => {
    expect(calculateCanvasSize("10", "30")).toEqual(300);
  });

  // Test for zero values
  test("returns 0 when either length or width is zero", () => {
    expect(calculateCanvasSize("0", "100")).toEqual(0);
    expect(calculateCanvasSize("10", "0")).toEqual(0);
    expect(calculateCanvasSize("0", "0")).toEqual(0);
  });

  // Test for invalid inputs
  test("returns NaN for invalid inputs", () => {
    expect(calculateCanvasSize("abc", "100")).toBeNaN();
    expect(calculateCanvasSize("10", "xyz")).toBeNaN();
    expect(calculateCanvasSize("abc", "xyz")).toBeNaN();
  });

  // Test for null or undefined inputs
  test("returns NaN for null or undefined inputs", () => {
    expect(calculateCanvasSize(null as unknown as string, "100")).toBeNaN();
    expect(calculateCanvasSize("10", undefined as unknown as string)).toBeNaN();
    expect(calculateCanvasSize(null as unknown as string, undefined as unknown as string)).toBeNaN();
  });

  // Test for empty string inputs
  test("returns NaN for empty string inputs", () => {
    expect(calculateCanvasSize("", "100")).toBeNaN();
    expect(calculateCanvasSize("10", "")).toBeNaN();
    expect(calculateCanvasSize("", "")).toBeNaN();
  });
});

