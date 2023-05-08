import getSortedGames from '.';

test('sort by A-Z', () => {
  expect(getSortedGames('alphabetic-order', getTestData()).map(x => x.id))
    .toEqual([
      800106,
      800108,
      800104,
      800018,
      800020
    ]);
});

test('sort by Z-A', () => {
  expect(getSortedGames('alphabetic-order-revers', getTestData()).map(x => x.id))
    .toEqual([
      800020,
      800018,
      800104,
      800108,
      800106
    ]);
});

test('sort by newest', () => {
  expect(getSortedGames('newest', getTestData()).map(x => x.id))
    .toEqual([
      800108,
      800018,
      800106,
      800020,
      800104
    ]);
});

const getTestData = () => (
  [
    {
      id: 800106,
      name: 'Cocktail Book',
      provider: -3,
      cover: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_Cocktailbook.jpg',
      coverLarge: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_Cocktailbook@2x.jpg',
      date: '2021-07-29T15:36:31.974Z'
    },
    {
      id: 800108,
      name: 'Extra Win X',
      provider: -3,
      cover: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_ExtraWinX.jpg',
      coverLarge: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_ExtraWinX@2x.jpg',
      date: '2018-10-11T05:52:10.386Z'
    },
    {
      id: 800018,
      name: 'Star Stretch',
      provider: -3,
      cover: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_StarStretch.jpg',
      coverLarge: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_StarStretch@2x.jpg',
      date: '2020-08-08T14:01:58.949Z'
    },
    {
      id: 800104,
      name: 'El Andaluz',
      provider: -3,
      cover: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_ElAndaluz.jpg',
      coverLarge: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_ElAndaluz@2x.jpg',
      date: '2022-04-11T21:39:42.827Z'
    },
    {
      id: 800020,
      name: 'Tokyo Dragon',
      provider: -3,
      cover: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_TokyoDragon.jpg',
      coverLarge: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_TokyoDragon@2x.jpg',
      date: '2021-11-27T06:21:30.055Z'
    }
  ]
);
