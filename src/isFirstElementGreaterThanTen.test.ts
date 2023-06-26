import isFirstElementGreaterThanTen from "./isFirstElementGreaterThanTen";

test("if First Element Greater Than Ten", () => {
  expect(isFirstElementGreaterThanTen([3, 11])).toBe(false);
});

test("if First Element Greater Than Ten", () => {
  expect(isFirstElementGreaterThanTen([11, 3])).toBe(true);
});

test("if First Element Greater Than Ten", () => {
  expect(isFirstElementGreaterThanTen([10])).toBe(false);
});

test("if First Element Greater Than Ten", () => {
  expect(isFirstElementGreaterThanTen([10.1])).toBe(true);
});

test("if First Element Greater Than Ten", () => {
  expect(isFirstElementGreaterThanTen([8, 8, 8, 8])).toBe(false);
});
