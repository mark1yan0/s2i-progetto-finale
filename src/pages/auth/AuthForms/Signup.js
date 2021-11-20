import React, { useState } from 'react';
//icons
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
//components
import Button from '../../../components/Button';

const Signup = ({ passwordVisible, event }) => {
  //form validation
  const [notLength, setNotLength] = useState(false);
  const [notLetter, setNotLetter] = useState(false);
  const [notUpper, setNotUpper] = useState(false);
  const [notEqual, setNotEqual] = useState(false);

  /* Form validation
   ==============================*/
  const isPasswordValid = function (e) {
    console.log(e.target.value);
    let password = e.target.value;

    //La password deve avere almeno 6 caratteri
    if (password.length < 6) {
      setNotLength(true);
    } else {
      setNotLength(false);
    }

    // La password può avere solo lettere, numeri e underscore
    if (!/^\w+$/.test(password)) {
      setNotLetter(true);
    } else {
      setNotLetter(false);
    }

    // La password deve avere almeno una lettere maiuscola
    if (!/[A-Z]/g.test(password)) {
      setNotUpper(true);
    } else {
      setNotUpper(false);
    }
  };

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
    <form className='flex flex-col justify-between'>
      <h1 className='text-center text-4xl font-bold text-primary-dark'>
        Iscriviti
      </h1>
      <p className='text-center text-xs'>
        Iscriviti per avere la possibilità di salvare i post da leggere più
        tardi
      </p>

      <input type='email' placeholder='Email' className='input' />
      <div className='relative'>
        <input
          type='password'
          placeholder='Password'
          className='input pws pws-toconfirm'
          onBlur={e => isPasswordValid(e)}
        />
        {passwordVisible ? (
          <AiFillEyeInvisible className='show-password-icon' onClick={event} />
        ) : (
          <AiFillEye className='show-password-icon' onClick={event} />
        )}
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
        )}
      </div>
      <div className='relative'>
        <input
          type='password'
          placeholder='Conferma Password'
          className='input pws'
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
        <Button text='Iscriviti' primary />
      </div>
    </form>
  );
};

export default Signup;
