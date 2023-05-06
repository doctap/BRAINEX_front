import React, { type MutableRefObject, useCallback, useState } from 'react';
import { SearchInput } from '../../elements';
import icon from '../../../images/search-icon.png';
import { SelectBlock } from '../../selects';
import type { IFiltersSorts } from '../../../repository';
import styles from './FilterPanel.module.scss';
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
    <div className={styles.filterPanel}>
      <div>
        <SearchInput value={searchInputValue} icon={icon} onChange={getSearchString} placeholder='Search' />
      </div>
      <div>
        <SelectBlock getSelectedIds={getProvidersIds} terms={prop.providers} title='Providers' />
      </div>
      <div>
        <SelectBlock getSelectedIds={getGroupsIds} terms={prop.groups} title='Groups' />
      </div>
    </div>
  );
};
