import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../services/authSlice';
//icons
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
//components
import Button from '../../../components/Button';

const Login = ({ onChange, passwordVisible, event, loginHandler }) => {
  const { loading, hasErrors } = useSelector(userSelector);

  return (
    <form className='flex flex-col justify-between' onSubmit={loginHandler}>
      <h1 className='text-center text-4xl font-bold text-secondary-light'>
        Accedi
      </h1>
      <input
        type='email'
        placeholder='Email'
        className={`input ${hasErrors && 'placeholder-red-600 text-red-600'}`}
        style={{
          border: hasErrors ? '1px solid red' : undefined,
        }}
        onChange={e => onChange(e, 'login/email')}
      />
      <div className='relative'>
        <input
          type='password'
          placeholder='Password'
          className={`input pws ${
            hasErrors && 'placeholder-red-600 text-red-600'
          }`}
          style={{
            border: hasErrors ? '1px solid red' : undefined,
          }}
          onChange={e => onChange(e, 'login/password')}
        />
        {passwordVisible ? (
          <AiFillEyeInvisible
            className={`show-password-icon ${hasErrors && 'text-red-600'}`}
            onClick={event}
          />
        ) : (
          <AiFillEye
            className={`show-password-icon ${hasErrors && 'text-red-600'}`}
            onClick={event}
          />
        )}
      </div>

      <div className='flex justify-end items-center'>
        <Button text='Accedi' type='submit' secondary loading={loading} />
      </div>
    </form>
  );
};

export default Login;
