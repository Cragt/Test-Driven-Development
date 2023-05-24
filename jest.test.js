const { sum, capitalize, calculate, analyzeArray } = require("./script");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("capitalize letters of a string", () => {
  expect(capitalize("asdf")).toBe("ASDF");
});

test("perform basic operations on two numbers", () => {
  expect(calculate(2, "add", 2)).toBe(4);
  expect(calculate(3, "subtract", 2)).toBe(1);
  expect(calculate(3, "multiply", 2)).toBe(6);
  expect(calculate(6, "divide", 2)).toBe(3);
});

// test('take a string and a shift factor and returns it with each character "shifted"', () => {

// });

test("analyze an array with different properties", () => {
  let arr = [0, 3, 6, 9];
  expect(analyzeArray(arr, "average")).toBe(4.5);
  expect(analyzeArray(arr, "min")).toBe(0);
  expect(analyzeArray(arr, "max")).toBe(9);
  expect(analyzeArray(arr, "length")).toBe(4);
});
