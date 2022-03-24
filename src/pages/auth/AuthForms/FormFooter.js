import React from 'react';

const FormFooter = ({ text, actionText, dispatchPayload, dispatch }) => {
  return (
    <p className='text-secondary-dark'>
      {text}{' '}
      <span
        onClick={() =>
          dispatch({ type: 'auth/loginForm', payload: dispatchPayload })
        }
        className='cursor-pointer text-secondary-light'
      >
        {actionText}
      </span>
    </p>
  );
};

export default FormFooter;
