import React, { useState } from 'react';
//icons
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
//components
import Button from '../../../components/Button';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../services/authSlice';

const Signup = ({
  passwordVisible,
  event,
  setRegisterEmail,
  setRegisterPassword,
  registerHandler,
}) => {
  const { loading } = useSelector(userSelector);
  //form validation
  const [notEqual, setNotEqual] = useState(null);

  /* Form validation
   ==============================*/

  function confirmPassword(e) {
    let pwsToConfirm = document.querySelector('.pws-toconfirm');
    let targetPws = e.target.value;
    // Le password devono combaciare
    if (pwsToConfirm.value !== targetPws) {
      setNotEqual(true);
    } else {
      setNotEqual(false);
    }
  }
  return (
    <form className='flex flex-col justify-between' onSubmit={registerHandler}>
      <h1 className='text-center text-4xl font-bold text-primary-dark'>
        Iscriviti
      </h1>
      <p className='text-center text-xs'>
        Iscriviti per avere la possibilità <br className='sm:hidden' /> di
        salvare i post da leggere più tardi
      </p>

      <input
        type='email'
        placeholder='Email'
        className='input'
        onChange={e => setRegisterEmail(e.target.value)}
      />
      <div className='relative'>
        <input
          type='password'
          placeholder='Password'
          className='input pws pws-toconfirm'
          onBlur={e => {
            confirmPassword(e);
          }}
        />
        {passwordVisible ? (
          <AiFillEyeInvisible className='show-password-icon' onClick={event} />
        ) : (
          <AiFillEye className='show-password-icon' onClick={event} />
        )}
      </div>
      <div className='relative'>
        <input
          type='password'
          placeholder='Conferma Password'
          className='input pws'
          onChange={e => setRegisterPassword(e.target.value)}
          onBlur={e => confirmPassword(e)}
        />
        {passwordVisible ? (
          <AiFillEyeInvisible className='show-password-icon' onClick={event} />
        ) : (
          <AiFillEye className='show-password-icon' onClick={event} />
        )}
      </div>
      <div>{notEqual ? <p>Le password devono combaciare</p> : ''}</div>
      <div className='flex justify-end items-center'>
        <Button text='Iscriviti' type='submit' primary loading={loading} />
      </div>
    </form>
  );
};

export default Signup;
