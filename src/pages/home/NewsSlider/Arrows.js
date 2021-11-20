import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Arrows = ({ onClick, direction }) => {
  return (
    <div className='p-6' onClick={onClick}>
      {IoIosArrowBack}
      {/* <IoIosArrowForward /> 
      {direction} */}
    </div>
  );
};

export default Arrows;
