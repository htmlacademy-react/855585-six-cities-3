import React, { useCallback } from 'react';
import { sortingValues } from '../../const';

type SortingOptionsProps = {
  sortValue: string;
  onSortClick: (value: string) => void;
};

function SortingOptionsComponent({ sortValue, onSortClick }: SortingOptionsProps): JSX.Element {
  const handleSortClick = useCallback((value: string) => {
    onSortClick(value);
  }, [onSortClick]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortValue}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Object.values(sortingValues).map((value) => (
          <li
            key={value}
            className={`places__option ${value === sortValue ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleSortClick(value)}
          >
            {value}
          </li>
        ))}
      </ul>
    </form>
  );
}

const SortingOptions = React.memo(SortingOptionsComponent);

export default SortingOptions;
