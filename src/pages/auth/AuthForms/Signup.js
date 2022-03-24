import React from 'react';
//icons
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
//components
import Button from '../../../components/Button';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../services/authSlice';

const Signup = ({
  onChange,
  passwordVisible,
  event,
  registerHandler,
  reference,
  confirmPassword,
}) => {
  const { loading, hasErrors } = useSelector(userSelector);

  return (
    <form
      className='flex flex-col justify-between text-secondary-light'
      onSubmit={registerHandler}
    >
      <h1 className='text-center text-4xl font-bold'>Iscriviti</h1>
      <p className='text-center text-xs'>
        Iscriviti per avere la possibilità <br className='sm:hidden' /> di
        salvare i post da leggere più tardi
      </p>

      <input
        type='email'
        placeholder='Email'
        className={`input ${hasErrors && 'placeholder-red-600 text-red-600'}`}
        style={{
          border: hasErrors ? '1px solid red' : undefined,
        }}
        onChange={e => onChange(e, 'register/email')}
      />
      <div className='relative'>
        <input
          type='password'
          placeholder='Password'
          ref={reference}
          className={`pws input ${
            hasErrors && 'placeholder-red-600 text-red-600'
          }`}
          style={{
            border: hasErrors ? '1px solid red' : undefined,
          }}
          onChange={e => onChange(e, 'register/password')}
          onBlur={e => {
            confirmPassword(e);
          }}
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
      <div className='relative'>
        <input
          type='password'
          placeholder='Conferma Password'
          className={`pws input ${
            hasErrors && 'placeholder-red-600 text-red-600'
          }`}
          style={{
            border: hasErrors ? '1px solid red' : undefined,
          }}
          onBlur={e => confirmPassword(e)}
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
        <Button text='Iscriviti' type='submit' secondary loading={loading} />
      </div>
    </form>
  );
};

export default Signup;
