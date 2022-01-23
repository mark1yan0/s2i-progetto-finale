import React, { useState, useEffect } from 'react';
import Filter from '../Filter';
import { FaFilter } from 'react-icons/fa';

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
  const [showFilter, setShowFilter] = useState(false);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setItems(items);
    setSelectedFilter();
    setSelected(false);
  }, [items]);

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
    <>
      <span
        className='text-primary-dark hover:text-primary-light text-xl cursor-pointer flex items-center my-2'
        onClick={() => setShowFilter(!showFilter)}
      >
        <FaFilter className='mr-2' /> Filtra
      </span>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-1 md:flex md:justify-between '>
        {showFilter &&
          categories.map(category => (
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
    </>
  );
};

export default FiltersContainer;
