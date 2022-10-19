import parcelPacking from './pracel.packing';

test('check for null for over weight', () => {
  expect(
    parcelPacking(270, 20, 100, [
      { height: 40, width: 30, length: 30, weight: 25, total: 3 },
      { height: 30, width: 20, length: 10, weight: 3, total: 3 },
    ])
  ).toBe(null);
});

test('check for null for over size', () => {
  expect(
    parcelPacking(270, 20, 110, [
      { height: 40, width: 30, length: 30, weight: 5, total: 3 },
      { height: 130, width: 80, length: 10, weight: 3, total: 3 },
    ])
  ).toBe(null);
});

test('check for null for side size', () => {
  expect(
    parcelPacking(270, 20, 110, [
      { height: 40, width: 30, length: 30, weight: 5, total: 3 },
      { height: 130, width: 80, length: 10, weight: 3, total: 3 },
    ])
  ).toBe(null);
});

test('checks for valid packages', () => {
  expect(
    parcelPacking(270, 20, 80, [
      { height: 40, width: 30, length: 30, weight: 5, total: 3 },
      { height: 30, width: 20, length: 10, weight: 3, total: 3 },
    ])
  ).toEqual({ total: 2, itemsPerPackage: [4, 4] });
});
