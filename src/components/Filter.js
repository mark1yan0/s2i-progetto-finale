import React, { useState } from 'react';

const Filter = ({ filter, selectedFilter, setSelectedFilter }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`${
        selected ? 'bg-primary-light text-white' : 'bg-secondary-light'
      } py-1 px-2 rounded-full cursor-pointer`}
      // onClick={handleToggle}
    >
      {filter}
    </div>
  );
};

export default Filter;
