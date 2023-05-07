import { pickProperties } from './index';

const getTestObj = () => ({
  a: '',
  b: 0,
  c: true
});

test('get converted obj', () => {
  expect(pickProperties(getTestObj(), ['b', 'c']))
    .toEqual({
      b: 0,
      c: true
    });
});
