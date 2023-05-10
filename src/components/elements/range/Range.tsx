import React, { type MutableRefObject, useEffect, useRef, useState } from 'react';
import { type ColumnType } from '../../../types';
import './Range.css';

interface IRange {
  min: number
  max: number
  onChange: (value: ColumnType) => void
  defaultValue: ColumnType
  title: string
}

type HEX = `#${string}`

const paintElem = (elem: HTMLDivElement, color: HEX) => {
  elem.style.setProperty('background', color);
};

const paintElements = (value: ColumnType, elements: Array<MutableRefObject<HTMLDivElement>>) => {
  elements.forEach(({ current }, i) => {
    if (value === 2) {
      paintElem(current, '#F2F2F2');
    } else if
    (value === 3) {
      paintElem(current, i < 2 ? '#FDBC11' : '#F2F2F2');
    } else if
    (value === 4) {
      paintElem(current, '#FDBC11');
    }
  });
};

export const Range = (prop: IRange) => {
  const [rangeValue, setRangeValue] = useState(prop.defaultValue);

  const ref = useRef(null as any as HTMLInputElement);
  const refLeftTrack = useRef(null as any as HTMLDivElement);
  const refRightTrack = useRef(null as any as HTMLDivElement);
  const refMiddleColumn = useRef(null as any as HTMLDivElement);
  const refRightColumn = useRef(null as any as HTMLDivElement);

  const elements = [refLeftTrack, refMiddleColumn, refRightTrack, refRightColumn];

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const elem = evt.currentTarget;
    const newValue = Number(elem.value) as ColumnType;

    paintElements(newValue, elements);

    setRangeValue(newValue);
    prop.onChange(newValue);
  };

  useEffect(() => {
    if (elements.every(el => el.current !== null)) {
      paintElements(prop.defaultValue, elements);
    }
  }, []);

  return (
    <div className="wrapper-range">
      <div className="title">
        {prop.title}
      </div>
      <div className="range">
        <div ref={refLeftTrack} className='left-track'></div>
        <div ref={refRightTrack} className='right-track'></div>
        {/* left column will always be the same color */}
        <div style={{ background: '#FDBC11' }} className='left-column'>2</div>
        <div ref={refMiddleColumn} className='middle-column'>3</div>
        <div ref={refRightColumn} className='right-column'>4</div>
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
      </div>
    </div>
  );
};
