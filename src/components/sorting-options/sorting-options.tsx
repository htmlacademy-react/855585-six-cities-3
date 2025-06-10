import React, { useCallback, useState } from 'react';
import { sortingValues } from '../../const';

type SortingOptionsProps = {
  sortValue: string;
  onSortClick: (value: string) => void;
};

function SortingOptionsComponent({ sortValue, onSortClick }: SortingOptionsProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleSortClick = useCallback((value: string) => {
    onSortClick(value);
    setIsOpen(false);
  }, [onSortClick]);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={toggleOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            toggleOpen();
          }
        }}
      >
        {sortValue}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}
      >
        {Object.values(sortingValues).map((value) => (
          <li
            key={value}
            className={`places__option ${value === sortValue ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleSortClick(value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSortClick(value);
              }
            }}
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
