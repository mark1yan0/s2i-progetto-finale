import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//components
import Login from './AuthForms/Login';
import Signup from './AuthForms/Signup';
//firebase
import { auth } from '../../firebase-config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getCurrentUser,
  getCurrentUserFailure,
} from '../../services/authSlice';
import SnackBar from '../../components/SnackBar';

const AuthPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState(true);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // for snackbar
  const [loggedIn, setLoggedIn] = useState(false);

  async function loginHandler(e) {
    e.preventDefault();
    dispatch(getCurrentUser());
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setLoggedIn(true);
      setTimeout(() => setLoggedIn(false), 2000);
      history.replace('/');
    } catch (error) {
      console.log(error.message);
      dispatch(getCurrentUserFailure());
    }
  }

  async function registerHandler(e) {
    e.preventDefault();
    dispatch(getCurrentUser());
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setLoggedIn(true);
      setTimeout(() => setLoggedIn(false), 2000);
      history.replace('/');
    } catch (error) {
      console.log(error.message);
      dispatch(getCurrentUserFailure());
    }
  }

  //state to set password visible
  const [passwordVisible, setPasswordVisible] = useState(false);

  //passwod visibility
  function setPasswordVisibility() {
    let passwordInput = document.querySelectorAll('.pws');
    for (let i = 0; i < passwordInput.length; i++) {
      if (!passwordVisible) {
        setPasswordVisible(true);
        passwordInput[i].type = 'text';
      } else {
        setPasswordVisible(false);
        passwordInput[i].type = 'password';
      }
    }
  }

  return (
    <div className='page-padding'>
      <section className='w-70 sm:w-96 min-h-screen flex flex-col justify-center -mt-10'>
        {loginForm ? (
          <>
            <Login
              setLoginEmail={setLoginEmail}
              setLoginPassword={setLoginPassword}
              loginHandler={loginHandler}
              passwordVisible={passwordVisible}
              event={setPasswordVisibility}
            />
            <p style={{ color: 'grey' }}>
              Non hai un account?
              <span
                onClick={() => setLoginForm(false)}
                className='cursor-pointer text-primary-dark'
              >
                Iscriviti
              </span>
            </p>
          </>
        ) : (
          <>
            <Signup
              setRegisterEmail={setRegisterEmail}
              setRegisterPassword={setRegisterPassword}
              registerHandler={registerHandler}
              passwordVisible={passwordVisible}
              event={setPasswordVisibility}
            />
            <p style={{ color: 'grey' }}>
              Hai già un account?{' '}
              <span
                onClick={() => setLoginForm(true)}
                className='cursor-pointer text-primary-dark'
              >
                Accedi
              </span>{' '}
            </p>
          </>
        )}
      </section>
      {loggedIn && <SnackBar type='success' message='Logged in successfully' />}
    </div>
  );
};

export default AuthPage;
