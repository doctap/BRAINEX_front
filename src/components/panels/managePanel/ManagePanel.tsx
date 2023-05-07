import React, { type MutableRefObject } from 'react';
import { FilterPanel, SortPanel } from '../index';
import { ActionButton, RadioButtons, Range } from '../../elements';
import type { IFiltersSorts } from '../../../repository';
import type { ColumnType, ITerm } from '../../../types';
import styles from './ManagePanel.module.scss';
import { sortingItems } from '../../../contentData';

interface IManagePanel {
  refConditions: MutableRefObject<IFiltersSorts>
  groups: ITerm[]
  providers: ITerm[]
  onFilterSort: (conditions: IFiltersSorts) => void
  onChange: (value: ColumnType) => void
  defaultColumn: ColumnType
  gamesAmount: number
  reset: () => void
}

export const ManagePanel = (prop: IManagePanel) => {
  return (
    <div className={styles.managePanel}>
      <FilterPanel
        refConditions={prop.refConditions}
        groups={prop.groups}
        providers={prop.providers}
        onFilterSort={prop.onFilterSort}
      />
      <div className={styles.range}>
        <Range title='Columns' max={4} min={2} onChange={prop.onChange} defaultValue={prop.defaultColumn} />
      </div>

      <div className={styles.SortPanel}>
        <SortPanel onSort={(x) => { console.log(x); }} sortVariants={sortingItems} title='Sort' />
      </div>

      <div className={styles.panelBottom}>
        <div className={styles.gamesAmount}>
          Games amount: {prop.gamesAmount}
        </div>
        <div className={styles.ActionButton}>
          <ActionButton name='Reset' onClick={prop.reset} />
        </div>
      </div>
    </div>
  );
};
