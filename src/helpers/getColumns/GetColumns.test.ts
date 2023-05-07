import { getColumns } from './GetColumns';

test('get columns by number 3', () => {
  expect(getColumns(getTestData(), 3).map(a => a.map(ar => ar.id)))
    .toEqual([
      [800106, 800108, 800018],
      [800104, 800020, 800022],
      [800024, 800028, 800002],
      [800004]
    ]);
});

test('get columns by number 2', () => {
  expect(getColumns(getTestData(), 2).map(a => a.map(ar => ar.id)))
    .toEqual([
      [800106, 800108],
      [800018, 800104],
      [800020, 800022],
      [800024, 800028],
      [800002, 800004]
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
    },
    {
      id: 800022,
      name: 'Fruit Fever',
      provider: -3,
      cover: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_FruitFever.jpg',
      coverLarge: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_FruitFever@2x.jpg',
      date: '2021-09-10T09:21:47.888Z'
    },
    {
      id: 800024,
      name: 'Leokan',
      provider: -3,
      cover: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_Leokan.jpg',
      coverLarge: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_Leokan@2x.jpg',
      date: '2018-12-16T21:07:43.111Z'
    },
    {
      id: 800028,
      name: 'Sinbads Odyssey',
      provider: -3,
      cover: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_SinbadsOdyssey.jpg',
      coverLarge: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_SinbadsOdyssey@2x.jpg',
      date: '2020-05-05T02:11:05.384Z'
    },
    {
      id: 800002,
      name: 'Golden Buffalo',
      provider: -3,
      cover: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_GoldenBuffalo.jpg',
      coverLarge: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_GoldenBuffalo@2x.jpg',
      date: '2019-10-14T00:07:35.934Z'
    },
    {
      id: 800004,
      name: 'Golden Pig',
      provider: -3,
      cover: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_GoldenPig.jpg',
      coverLarge: 'https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_GoldenPig@2x.jpg',
      date: '2022-04-12T18:01:18.835Z'
    }
  ]
);
