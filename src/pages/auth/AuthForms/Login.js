import React from 'react';
//icons
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
//components
import Button from '../../../components/Button';

const Login = ({ passwordVisible, event }) => {
  return (
    <form className='flex flex-col justify-between'>
      <h1 className='text-center text-4xl font-bold text-primary-dark'>
        Accedi
      </h1>
      <input type='email' placeholder='Email' className='input' />
      <div className='relative'>
        <input type='password' placeholder='Password' className='input pws' />
        {passwordVisible ? (
          <AiFillEyeInvisible className='show-password-icon' onClick={event} />
        ) : (
          <AiFillEye className='show-password-icon' onClick={event} />
        )}
      </div>

      <div className='flex justify-end items-center'>
        <Button text='Accedi' primary />
      </div>
    </form>
  );
};

export default Login;
