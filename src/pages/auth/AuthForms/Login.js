import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../services/authSlice';
//icons
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
//components
import Button from '../../../components/Button';

const Login = ({
  passwordVisible,
  event,
  setLoginEmail,
  setLoginPassword,
  loginHandler,
}) => {
  const { loading } = useSelector(userSelector);

  return (
    <form className='flex flex-col justify-between' onSubmit={loginHandler}>
      <h1 className='text-center text-4xl font-bold text-primary-dark'>
        Accedi
      </h1>
      <input
        type='email'
        placeholder='Email'
        className='input'
        onChange={e => setLoginEmail(e.target.value)}
      />
      <div className='relative'>
        <input
          type='password'
          placeholder='Password'
          className='input pws'
          onChange={e => setLoginPassword(e.target.value)}
        />
        {passwordVisible ? (
          <AiFillEyeInvisible className='show-password-icon' onClick={event} />
        ) : (
          <AiFillEye className='show-password-icon' onClick={event} />
        )}
      </div>

      <div className='flex justify-end items-center'>
        <Button text='Accedi' type='submit' primary loading={loading} />
      </div>
    </form>
  );
};

export default Login;
