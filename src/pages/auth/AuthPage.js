import React, { useState } from 'react';
//components
import Login from './AuthForms/Login';
import Signup from './AuthForms/Signup';

const AuthPage = ({ match }) => {
  //state to display login or signup
  const [loginForm, setLoginForm] = useState(true);
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
              passwordVisible={passwordVisible}
              event={setPasswordVisibility}
            />
            <p style={{ color: 'grey' }}>
              Non hai un account?{' '}
              <span
                onClick={() => setLoginForm(false)}
                className='cursor-pointer text-primary-dark'
              >
                Iscriviti
              </span>{' '}
            </p>
          </>
        ) : (
          <>
            <Signup
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
    </div>
  );
};

export default AuthPage;
