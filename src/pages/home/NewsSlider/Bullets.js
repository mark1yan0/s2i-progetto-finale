import React from 'react';

const Bullets = ({ isActive, onClick }) => {
  return (
    <li
      className={`w-1 ${
        isActive && 'w-10'
      } h-1 bg-secondary-light mx-2 rounded cursor-pointer`}
      onClick={onClick}
    ></li>
  );
};

export default Bullets;
