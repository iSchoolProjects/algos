import parcelPacking from './pracel.packing';

test('check for null for over weight', () => {
  expect(
    parcelPacking(270, 20, 100, {
      height: 40,
      width: 30,
      length: 30,
      weight: 25,
      total: 3,
    })
  ).toBe(null);
});

test('check for null for over size', () => {
  expect(
    parcelPacking(270, 20, 110, {
      height: 130,
      width: 80,
      length: 10,
      weight: 3,
      total: 3,
    })
  ).toBe(null);
});

test('check for null for side size', () => {
  expect(
    parcelPacking(270, 20, 110, {
      height: 130,
      width: 80,
      length: 10,
      weight: 3,
      total: 3,
    })
  ).toBe(null);
});

test('checks for valid packages two packages', () => {
  expect(
    parcelPacking(270, 20, 80, {
      height: 40,
      width: 30,
      length: 30,
      weight: 5,
      total: 5,
    })
  ).toEqual({ total: 2, itemsPerPackage: [4, 1] });
});

test('checks for valid packages single package', () => {
  expect(
    parcelPacking(270, 20, 80, {
      height: 40,
      width: 30,
      length: 30,
      weight: 5,
      total: 4,
    })
  ).toEqual({ total: 1, itemsPerPackage: [4] });
});

test('checks for valid packages two packages 4,3', () => {
  expect(
    parcelPacking(370, 20, 80, {
      height: 40,
      width: 30,
      length: 30,
      weight: 5,
      total: 7,
    })
  ).toEqual({ total: 2, itemsPerPackage: [4, 3] });
});

test('checks for valid packages single packages 2,1', () => {
  expect(
    parcelPacking(260, 20, 120, {
      height: 110,
      width: 15,
      length: 5,
      weight: 5,
      total: 3,
    })
  ).toEqual({ total: 2, itemsPerPackage: [2, 1] });
});

test('checks for valid packages three packages', () => {
  expect(
    parcelPacking(140, 20, 80, {
      height: 40,
      width: 25,
      length: 10,
      weight: 5,
      total: 3,
    })
  ).toEqual({ total: 3, itemsPerPackage: [1, 1, 1] });
});

test('checks for valid packages seven packages', () => {
  expect(
    parcelPacking(340, 20, 80, {
      height: 40,
      width: 25,
      length: 15,
      weight: 15,
      total: 7,
    })
  ).toEqual({ total: 7, itemsPerPackage: [1, 1, 1, 1, 1, 1, 1] });
});
