import React from 'react';
import Loading from './animations/Loading';

const Button = ({ text, primary, secondary, muted, type, loading }) => {
  return (
    <button
      className={`py-1 m-2 flex items-center justify-center rounded-full
       ${primary && 'text-secondary-light bg-primary-dark'} ${
        secondary && 'text-primary-light bg-secondary-light'
      } ${
        muted &&
        'text-secondary-light transparent border border-secondary-light '
      } hover:bg-primary-light`}
      type={type}
      disabled={loading}
      style={{ width: 200 }}
    >
      <p className='mr-4'>{text}</p> {loading && <Loading />}
    </button>
  );
};

export default Button;
