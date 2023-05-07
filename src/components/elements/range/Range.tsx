import React, { useEffect, useRef, useState } from 'react';
import { type ColumnType } from '../../../types';
import './Range.css';

interface IRange {
  min: number
  max: number
  onChange: (value: ColumnType) => void
  defaultValue: ColumnType
  title: string
}

export const Range = (prop: IRange) => {
  const [rangeValue, setRangeValue] = useState(prop.defaultValue);

  const ref = useRef(null as any as HTMLInputElement);

  const paintProgress = (refElem: HTMLInputElement) => {
    refElem.style.setProperty('--value', refElem.value);
    refElem.style.setProperty('--min', refElem.min === '' ? String(prop.min) : refElem.min);
    refElem.style.setProperty('--max', refElem.max === '' ? String(prop.max) : refElem.max);
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const elem = evt.currentTarget;
    const newValue = Number(elem.value) as ColumnType;

    paintProgress(elem);

    setRangeValue(newValue);
    prop.onChange(newValue);
  };

  useEffect(() => {
    if (ref.current !== null) {
      paintProgress(ref.current);
    }
  }, []);

  return (
    <>
      <div className="title">
        {prop.title}
      </div>
      <input
        ref={ref}
        type="range"
        min={prop.min}
        max={prop.max}
        value={rangeValue}
        onChange={handleChange}
        step={(prop.max - prop.min) / 2}
        className="styled-slider slider-progress"
      />
    </>
  );
};
