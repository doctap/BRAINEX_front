import { type IGame } from '../../repository';
import { type SortingValueType } from '../../types';

export default (sort: SortingValueType, data: IGame[]) => {
  if (sort === 'alphabetic-order' || sort === 'alphabetic-order-revers') {
    const sorted = data.sort((a, b) => {
      const letter1 = findFirstLetter(a.name);
      const letter2 = findFirstLetter(b.name);

      if (letter1 < letter2) return -1;
      if (letter1 > letter2) return 1;
      return 0;
    });

    if (sort === 'alphabetic-order') {
      return sorted;
    } else if (sort === 'alphabetic-order-revers') {
      return sorted.reverse();
    }
  }

  return data.sort((a, b) => {
    const date1 = new Date(a.date);
    const date2 = new Date(b.date);
    return date1.getTime() - date2.getTime();
  });
};

function findFirstLetter (str: string): string | number {
  const match = str.match(/[a-zA-Z]/);
  return (match != null) ? match[0] : Infinity;
}
