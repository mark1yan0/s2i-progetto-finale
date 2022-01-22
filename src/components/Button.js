import React from 'react';
import Loading from './animations/Loading';

const Button = ({
  text,
  primary,
  secondary,
  muted,
  type,
  loading,
  onEvent,
  icon,
}) => {
  return (
    <button
      onClick={onEvent}
      className={`py-1 m-2 flex items-center justify-center rounded-full
       ${
         primary &&
         'text-secondary-light bg-primary-dark hover:bg-primary-light'
       } ${
        secondary &&
        'text-primary-light bg-secondary-light hover:bg-secondary-dark'
      } ${
        muted &&
        'text-secondary-light transparent border border-secondary-light '
      }`}
      type={type}
      disabled={loading}
      style={{ width: 200 }}
    >
      {icon} <p className={`${icon && 'ml-4'} ${loading && 'mr-4'} `}>{text}</p>{' '}
      {loading && <Loading />}
    </button>
  );
};

export default Button;
