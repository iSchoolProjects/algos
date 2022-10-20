import shiftStrings from './string-shift';

test('test case _L__R__R_', () => {
  expect(shiftStrings('_L__R__R_', 'L______RR')).toBe(true);
});

test('test case R_L_', () => {
  expect(shiftStrings('R_L_', '__LR')).toBe(false);
});

test('test case _R', () => {
  expect(shiftStrings('_R', 'R_')).toBe(false);
});

test('test case _L', () => {
  expect(shiftStrings('_L', 'L_')).toBe(true);
});

test('test case _L_LR__R_', () => {
  expect(shiftStrings('_L_LR__R_', 'LL_____RR')).toBe(true);
});
