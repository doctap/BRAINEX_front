import React, { useState, type MutableRefObject, useEffect } from 'react';
import { FilterPanel, SortPanel } from '../index';
import { ActionButton, BurgerButton, Range, SearchInput } from '../../elements';
import type { IFilterSort } from '../../../repository';
import type { ColumnType, ITerm, SortingValueType } from '../../../types';
import styles from './ManagePanel.module.scss';
import { sortingItems } from '../../../contentData';
import icon from '../../../images/search-icon.png';

interface IManagePanel {
  refConditions: MutableRefObject<IFilterSort>
  groups: ITerm[]
  providers: ITerm[]
  onFilterSort: (conditions: IFilterSort) => void
  onChange: (value: ColumnType) => void
  defaultColumn: ColumnType
  gamesAmount: number
  reset: () => void
  burgerButtonIcon: string
  mobileVersion: boolean
}

export const ManagePanel = (prop: IManagePanel) => {
  const [toggleDisplayFilters, setToggleDisplayFilters] = useState(prop.mobileVersion);
  const [searchInputValue, setSearchInputValue] = useState('');

  const getSearchString = (event: React.ChangeEvent<HTMLInputElement>) => {
    const element = event.currentTarget;
    prop.refConditions.current.gameNameSearchString = element.value;

    setSearchInputValue(element.value);
    prop.onFilterSort(prop.refConditions.current);
  };

  const getSortedGames = (sort: SortingValueType) => {
    prop.refConditions.current.sortType = sort;
    prop.onFilterSort(prop.refConditions.current);
  };

  const displayFilters = () => {
    setToggleDisplayFilters(!toggleDisplayFilters);
  };

  useEffect(() => {
    setToggleDisplayFilters(prop.mobileVersion);
  }, [prop.mobileVersion]);

  return (
    <div className={styles.managePanel}>
      <SearchInput value={searchInputValue} icon={icon} onChange={getSearchString} placeholder='Search' />

      <div className={
        toggleDisplayFilters
          ? `${styles.filters} ${styles.filters_display}`
          : `${styles.filters}`
      }>
        <FilterPanel
          refConditions={prop.refConditions}
          groups={prop.groups}
          providers={prop.providers}
          onFilterSort={prop.onFilterSort}
        />
        {!prop.mobileVersion
          ? <Range title='Columns' max={4} min={2} onChange={prop.onChange} defaultValue={prop.defaultColumn} />
          : null}

        <div className={styles.SortPanel}>
          <SortPanel onSort={getSortedGames} sortVariants={sortingItems} title='Sort' />
        </div>

        <div className={styles.resetBlock}>
          <div className={styles.gamesAmount}>
          Games amount: {prop.gamesAmount}
          </div>
          <div className={styles.ActionButton}>
            <ActionButton name='Reset' onClick={prop.reset} />
          </div>
        </div>
      </div>

      {prop.mobileVersion
        ? <div className={styles.hideFiltersForMobileVersion}>
          <BurgerButton
            toggle={toggleDisplayFilters}
            icon={prop.burgerButtonIcon}
            onClick={displayFilters}
            nameOff='Hide filters'
            nameOn='Show filters'
          />
        </div>
        : null}
    </div>
  );
};
