import React from 'react';

const FormFooter = ({ text, actionText, dispatchPayload, dispatch }) => {
  return (
    <p style={{ color: 'grey' }}>
      {text}{' '}
      <span
        onClick={() =>
          dispatch({ type: 'auth/loginForm', payload: dispatchPayload })
        }
        className='cursor-pointer text-primary-dark'
      >
        {actionText}
      </span>
    </p>
  );
};

export default FormFooter;
