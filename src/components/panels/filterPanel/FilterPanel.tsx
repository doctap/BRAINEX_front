import React, { type MutableRefObject, useCallback, useState } from 'react';
import { SearchInput } from '../../elements';
import icon from '../../../images/search-icon.png';
import { SelectBlock } from '../../selects';
import type { IFiltersSorts } from '../../../repository';
import type { ITerm } from '../../../types';

export interface IFilterPanel {
  onFilterSort: (conditions: IFiltersSorts) => void
  providers: ITerm[]
  groups: ITerm[]
  refConditions: MutableRefObject<IFiltersSorts>
}

export const FilterPanel = (prop: IFilterPanel) => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const getSearchString = (event: React.ChangeEvent<HTMLInputElement>) => {
    const element = event.currentTarget;
    prop.refConditions.current.gameNameSearchString = element.value;

    setSearchInputValue(element.value);
    prop.onFilterSort(prop.refConditions.current);
  };

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
      <SearchInput value={searchInputValue} icon={icon} onChange={getSearchString} placeholder='Search' />
      <SelectBlock getSelectedIds={getProvidersIds} terms={prop.providers} title='Providers' />
      <SelectBlock getSelectedIds={getGroupsIds} terms={prop.groups} title='Groups' />
    </>
  );
};
