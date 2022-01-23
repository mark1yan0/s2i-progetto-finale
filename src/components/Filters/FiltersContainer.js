import React, { useState } from 'react';
import Filter from '../Filter';

const categories = [
  'business',
  'science',
  'technology',
  'sports',
  'health',
  'entertainment',
];

const FiltersContainer = ({
  selectedFilter,
  items,
  setItems,
  setSelectedFilter,
}) => {
  const [selected, setSelected] = useState(false);

  function handleFilters(category, selected) {
    if (selected) {
      setItems(items.filter(item => item.category === category));
      setSelectedFilter(category);
    } else {
      if (selectedFilter !== category) {
        setItems(items.filter(item => item.category === category));
        setSelectedFilter(category);
      } else {
        setItems(items);
        setSelectedFilter('');
      }
    }
  }

  return (
    <div className='flex justify-between'>
      {categories.map(category => (
        <Filter
          key={category}
          filter={category}
          selected={selected}
          setSelected={setSelected}
          selectedFilter={selectedFilter}
          handleFilters={handleFilters}
        />
      ))}
    </div>
  );
};

export default FiltersContainer;
