import React from 'react';
import reactDom from 'react-dom';
import { BiErrorCircle } from 'react-icons/bi';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

const SnackBar = ({ message, type }) => {
  const snackBarType =
    type === 'error'
      ? 'bg-red-500 bottom-5 left-5'
      : 'bg-green-500 bottom-5 right-5';

  return reactDom.createPortal(
    <div
      className={`flex justify-around items-center px-10 py-2 ${snackBarType} absolute rounded text-text-light`}
      style={{ zIndex: 9999 }}
    >
      {type === 'error' ? <BiErrorCircle /> : <IoIosCheckmarkCircleOutline />}
      <p className='ml-2 text-text-light'>{message}</p>
    </div>,
    document.getElementById('snackbar')
  );
};

export default SnackBar;
