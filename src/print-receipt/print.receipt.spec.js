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

test('Input faker 1', () => {
  expect(
    printReceipt(
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      '62,10',
      40
    )
  ).toEqual([
    'The automobile layout consists of a',
    'front-engine design, with transaxle-type',
    'transmissions mounted at the rear of the',
    'engine and four wheel drive........62,10',
  ]);
});

test('Input faker 2', () => {
  expect(
    printReceipt(
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      '17,40',
      40
    )
  ).toEqual([
    'Carbonite web goalkeeper gloves are',
    'ergonomically designed to give easy fit',
    '...................................17,40',
  ]);
});

test('Input faker 3', () => {
  expect(
    printReceipt(
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      '31,10',
      40
    )
  ).toEqual([
    "Boston's most advanced compression wear",
    'technology increases muscle oxygenation,',
    'stabilizes active muscles..........31,10',
  ]);
});

test('Input faker 4', () => {
  expect(
    printReceipt(
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      '22,90',
      40
    )
  ).toEqual([
    'The Nagasaki Lander is the trademarked',
    'name of several series of Nagasaki sport',
    'bikes, that started with the 1984',
    'ABC800J............................22,90',
  ]);
});

test('Input faker 5', () => {
  expect(
    printReceipt(
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      '2,21',
      40
    )
  ).toEqual([
    'Andy shoes are designed to keeping in',
    'mind durability as well as trends, the',
    'most stylish range of shoes & sandals',
    '....................................2,21',
  ]);
});
