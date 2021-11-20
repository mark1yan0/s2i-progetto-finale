import React from 'react';

const Button = ({ text, primary, secondary, muted, link }) => {
  return (
    <button
      className={`px-6 py-1 m-2 ${
        primary && 'text-secondary-light bg-primary-dark rounded'
      } ${secondary && 'text-primary-light bg-secondary-light rounded'} ${
        muted &&
        'text-secondary-light transparent border border-secondary-light '
      } hover:bg-primary-light`}
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
