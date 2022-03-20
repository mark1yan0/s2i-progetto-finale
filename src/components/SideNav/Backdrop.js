import React from 'react';
import reactDom from 'react-dom';

const Backdrop = ({ toggleBackdrop }) => {
  return reactDom.createPortal(
    <div
      className={` w-full h-full fixed top-0 left-0 z-50`}
      style={{
        background:
          'linear-gradient(90deg, rgba(58,67,94,0.8169642857142857) 35%, rgba(70,81,114,0.8141631652661064) 100%)',
      }}
      onClick={() => toggleBackdrop(false)}
    />,
    document.getElementById('backdrop')
  );
};

export default Backdrop;
