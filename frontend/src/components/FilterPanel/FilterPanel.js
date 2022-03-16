import React from 'react';
import { categoryList } from '.././../constants/categoryConstants';
import CheckboxProton from '../CheckboxProton';
import FilterListToggle from '../FilterListToggle';
import './FilterPanel.css';

const FilterPanel = ({
  selectedCategory,
  selectCategory,
  locations,
  changeChecked,
  stores,
}) => (
  <div>
    {/* Category */}
    <div className='input-group'>
      {/* <p className='label'>Category</p> */}
      <FilterListToggle className="filter-label"
        options={categoryList}
        value={selectedCategory}
        selectToggle={selectCategory}
      />
    </div>
    {/* Location */}
    {/* <div className='input-group'>
      <p className='label'>Location</p>
      {locations.map((location) => (
        <CheckboxProton
          key={location.id}
          location={location}
          changeChecked={changeChecked}
        />
      ))}
    </div> */}
  </div>
);

export default FilterPanel;
