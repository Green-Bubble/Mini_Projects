// test scenario untuk detectTriagle

// - detect functiions
//   - should throw error when input is integer
//   - should throw error when input is not a positive Number
//   - should throw error when input is tiangle inequality violation
//   - should return "segitiga sama sisi" when all input are equal
//   - should return "segitiga sama kaki" when 2 input are equal
//   - should return "segitiga sembarang" when all input are different

const detectTriangle = require("./detectTriagle");

describe("detect triangle function", () => {
  it("should throw error when input is not a number", () => {
    expect(() => detectTriangle("a", 2, 3)).toThrowError("Input must be a number");
    expect(() => detectTriangle(1, "b", 3)).toThrowError("Input must be a number");
    expect(() => detectTriangle(1, 2, "c")).toThrowError("Input must be a number");
  });

  it("should throw error when input is not positive number", () => {
    expect(() => detectTriangle(-1, 5, 7)).toThrowError("Input must be a positive number");
    expect(() => detectTriangle(4, 7, -9)).toThrowError("Input must be a positive number");
    expect(() => detectTriangle(3, 1, -1)).toThrowError("Input must be a positive number");
    expect(() => detectTriangle(0, 2, 3)).toThrowError("Input must be a positive number");
  });

  it("should throw error when input is triangle inequality violation", () => {
    expect(() => detectTriangle(1, 2, 3)).toThrowError("Input is triangle inequality violation");
    expect(() => detectTriangle(4, 6, 1)).toThrowError("Input is triangle inequality violation");
    expect(() => detectTriangle(3, 4, 1)).toThrowError("Input is triangle inequality violation");
  });

  it('should return "segitiga Sama Sisi" when all input are equal', () => {
    expect(detectTriangle(1, 1, 1)).toBe("Segitiga Sama Sisi");
    expect(detectTriangle(5, 5, 5)).toBe("Segitiga Sama Sisi");
    expect(detectTriangle(3, 3, 3)).toBe("Segitiga Sama Sisi");
  });

  it('should return "Segitiga Sama Kaki" when two input are equal', () => {
    expect(detectTriangle(2, 2, 3)).toBe("Segitiga Sama Kaki");
    expect(detectTriangle(5, 6, 5)).toBe("Segitiga Sama Kaki");
    expect(detectTriangle(7, 8, 8)).toBe("Segitiga Sama Kaki");
  });

  it('should return "Segitiga Sembarang" when all input are different', () => {
    expect(detectTriangle(2, 3, 4)).toBe("Segitiga Sembarang");
    expect(detectTriangle(5, 6, 7)).toBe("Segitiga Sembarang");
    expect(detectTriangle(8, 9, 10)).toBe("Segitiga Sembarang");
  });
});
