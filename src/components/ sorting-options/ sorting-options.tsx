import { sortingValues } from '../../const';

type SortingOptionsProps = {
  sortValue: string;
  onSortClick: (value: string) => void;
};

function SortingOptions({ sortValue, onSortClick}: SortingOptionsProps): JSX.Element {

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
            onClick={() => onSortClick(value)}
          >
            {value}
          </li>

        ))}
      </ul>
    </form>
  );
}

export default SortingOptions;
