import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const Arrows = ({ onClick }) => {
  return (
    <div className='hidden md:block p-6' onClick={onClick}>
      {IoIosArrowBack}
    </div>
  );
};

export default Arrows;
