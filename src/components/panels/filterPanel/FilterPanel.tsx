import React, { type MutableRefObject, useCallback } from 'react';
import { SelectBlock } from '../../selects';
import type { IFilterSort } from '../../../repository';
import type { ITerm } from '../../../types';

export interface IFilterPanel {
  onFilterSort: (conditions: IFilterSort) => void
  providers: ITerm[]
  groups: ITerm[]
  refConditions: MutableRefObject<IFilterSort>
}

export const FilterPanel = (prop: IFilterPanel) => {
  const getProvidersIds = useCallback((ids: number[]) => {
    prop.refConditions.current.providerIds = ids;
    prop.onFilterSort(prop.refConditions.current);
  }, []);

  const getGroupsIds = useCallback((ids: number[]) => {
    prop.refConditions.current.groupIds = ids;
    prop.onFilterSort(prop.refConditions.current);
  }, []);

  return (
    <>
      <SelectBlock getSelectedIds={getProvidersIds} terms={prop.providers} title='Providers' />
      <SelectBlock getSelectedIds={getGroupsIds} terms={prop.groups} title='Groups' />
    </>
  );
};
