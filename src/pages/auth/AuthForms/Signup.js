import React, { useState, useEffect } from 'react';
//icons
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
//components
import Button from '../../../components/Button';
import { auth } from '../../../firebase-config';

const Signup = ({
  passwordVisible,
  event,
  setRegisterEmail,
  setRegisterPassword,
  registerHandler,
}) => {
  //form validation
  const [notLength, setNotLength] = useState(null);
  const [notLetter, setNotLetter] = useState(null);
  const [notUpper, setNotUpper] = useState(null);
  const [notEqual, setNotEqual] = useState(null);

  /* Form validation
   ==============================*/
  // const isPasswordValid = function (e) {
  //   console.log(e.target.value);
  //   let password = e.target.value;

  //   //La password deve avere almeno 6 caratteri
  //   if (password.length < 6) {
  //     setNotLength(true);
  //   } else {
  //     setNotLength(false);
  //   }

  //   // La password può avere solo lettere, numeri e underscore
  //   if (!/^\w+$/.test(password)) {
  //     setNotLetter(true);
  //   } else {
  //     setNotLetter(false);
  //   }

  //   // La password deve avere almeno una lettere maiuscola
  //   if (!/[A-Z]/g.test(password)) {
  //     setNotUpper(true);
  //   } else {
  //     setNotUpper(false);
  //   }
  // };

  // function confirmPassword(e) {
  //   let pwsToConfirm = document.querySelector('.pws-toconfirm');
  //   let targetPws = e.target.value;
  //   // Le password devono combaciare
  //   if (pwsToConfirm.value !== targetPws) {
  //     setNotEqual(true);
  //   } else {
  //     setNotEqual(false);
  //   }
  // }
  return (
    <form className='flex flex-col justify-between' onSubmit={registerHandler}>
      <h1 className='text-center text-4xl font-bold text-primary-dark'>
        Iscriviti
      </h1>
      <p className='text-center text-xs'>
        Iscriviti per avere la possibilità di salvare i post da leggere più
        tardi
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

          // onBlur={e => {
          //   isPasswordValid(e);
          //   confirmPassword(e);
          // }}
        />
        {passwordVisible ? (
          <AiFillEyeInvisible className='show-password-icon' onClick={event} />
        ) : (
          <AiFillEye className='show-password-icon' onClick={event} />
        )}
        {/*
      </div>
      <div className=''>
        {notLength && (
          <p className=''>La password deve avere almeno 6 caratteri</p>
        )}
        {notLetter && (
          <p className=''>
            La password può avere solo lettere, numeri e underscore
          </p>
        )}
        {notUpper && (
          <p className=''>
            La password deve avere almeno una lettera maiuscola
          </p>
        )} */}
      </div>
      <div className='relative'>
        <input
          type='password'
          placeholder='Conferma Password'
          className='input pws'
          onChange={e => setRegisterPassword(e.target.value)}
          // onBlur={e => confirmPassword(e)}
        />
        {passwordVisible ? (
          <AiFillEyeInvisible className='show-password-icon' onClick={event} />
        ) : (
          <AiFillEye className='show-password-icon' onClick={event} />
        )}
      </div>
      {/* <div>{notEqual ? <p>Le password devono combaciare</p> : ''}</div> */}
      <div className='flex justify-end items-center'>
        <Button text='Iscriviti' type='submit' primary />
      </div>
    </form>
  );
};

export default Signup;
