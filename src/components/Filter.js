import React from 'react';

const Filter = ({
  filter,
  selectedFilter,
  selected,
  setSelected,
  handleFilters,
}) => {
  function handleSelcted() {
    if (selectedFilter !== filter) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }
  return (
    <div
      className={`${
        selectedFilter === filter && selected
          ? 'bg-primary-light text-white'
          : 'bg-secondary-light'
      } py-1 px-2 rounded-full cursor-pointer`}
      onClick={() => {
        handleSelcted();
        handleFilters(filter, !selected);
      }}
    >
      <p className='text-center'>{filter}</p>
    </div>
  );
};

export default Filter;
