import React from 'react';
import { Term } from '../../elements';
import type { ITerm } from '../../../types';

interface ITermList {
  terms: ITerm[]
  getId: (id: number) => void
}

export const TermList = (prop: ITermList) => {
  return (
    <>
      {prop.terms.map(t => (
        <Term id={t.id} key={t.id} getId={prop.getId} name={t.name} />
      ))}
    </>
  );
};
