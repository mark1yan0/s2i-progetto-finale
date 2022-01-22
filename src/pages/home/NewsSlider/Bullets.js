import React from 'react';

const Bullets = ({ isActive, onClick }) => {
  return (
    <li
      className='h-1 bg-secondary-light mx-2 rounded cursor-pointer'
      onClick={onClick}
      style={{ width: isActive ? 40 : 4 }}
    ></li>
  );
};

export default Bullets;
