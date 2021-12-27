import React, { useState } from 'react';
//components
import Login from './AuthForms/Login';
import Signup from './AuthForms/Signup';

//firebase
import { auth } from '../../firebase-config';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const AuthPage = () => {
  const [loginForm, setLoginForm] = useState(false);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, currentUser => {
    setUser(currentUser);
  });

  async function registerHandler(e) {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  async function loginHandler(e) {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  async function logoutHandler() {
    await signOut(auth);
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
      <section className='w-96 min-h-screen flex flex-col justify-center -mt-10'>
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
        <p>Hello: {user?.email}</p>
        <button onClick={logoutHandler}>Esci</button>
      </section>
    </div>
  );
};

export default AuthPage;

// let socialIcons = document.querySelectorAll('a.elementor-social-icon');

// window.addEventListener('load', () => {
//   for (icon in socialIcons) {
//     socialIcons[icon].setAttribute('rel', 'noopener noreferrer');
//   }
// });
