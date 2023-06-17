import React from 'react';
import FilterItem from '../filter-items';
import './index.css';

const Filters = (props) => {
  const { filters } = props;
  console.log(filters);
  return (
    <div className="max-width filter">
      {filters?.map((item) => (
        <FilterItem filterItem={item} />
      ))}
    </div>
  );
};

export default Filters;
