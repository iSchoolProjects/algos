import printReceipt from './print.receipt';

test('Long input 40ln', () => {
  expect(
    printReceipt(
      'Nicely Neat Reusable Extra Durable Checkered PVC Picnic Tablecloth with 6 Securing Clips - Green',
      '19,90',
      40
    )
  ).toEqual([
    'Nicely Neat Reusable Extra Durable',
    'Checkered PVC Picnic Tablecloth with 6',
    'Securing Clips - Green.............19,90',
  ]);
});

test('Short input 40ln', () => {
  expect(printReceipt('Coca-Cola 0,5l', '1,10', 40)).toEqual([
    'Coca-Cola 0,5l......................1,10',
  ]);
});
