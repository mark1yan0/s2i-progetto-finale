import React, { useState, useReducer, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
  clearErrors,
} from '../../services/authSlice';
import makeAuthErrorMessage from '../../utilities/makeAuthErrorMessage';
import { authReducer } from '../../utilities/reducers';
import FormFooter from './AuthForms/FormFooter';

const initialValues = {
  loginForm: true,
  registerEmail: '',
  registerPassword: '',
  loginEmail: '',
  loginPassword: '',
  errorMessage: '',
};

const AuthPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { hasErrors } = useSelector(state => state.user);
  const confirmRef = useRef(null);

  const [authForm, reducerDispatch] = useReducer(authReducer, initialValues);

  async function loginHandler(e) {
    e.preventDefault();
    if (!hasErrors) {
      dispatch(getCurrentUser());
    }
    const email = authForm.loginEmail;
    const password = authForm.loginPassword;
    try {
      if (email === '' || password === '') {
        reducerDispatch({
          type: 'auth/errorMessage',
          payload: 'Tutti i campi del form devono essere riempiti',
        });
        dispatch(getCurrentUserFailure());
        return;
      }

      if (!hasErrors) {
        await signInWithEmailAndPassword(auth, email, password);
        history.replace('/');
      }
    } catch (error) {
      reducerDispatch({
        type: 'auth/errorMessage',
        payload: makeAuthErrorMessage(error.message),
      });
      dispatch(getCurrentUserFailure());
    }
  }

  async function registerHandler(e) {
    e.preventDefault();
    if (!hasErrors) {
      dispatch(getCurrentUser());
    }
    const email = authForm.registerEmail;
    const password = authForm.registerPassword;
    try {
      if (email === '' || password === '') {
        reducerDispatch({
          type: 'auth/errorMessage',
          payload: 'Tutti i campi del form devono essere riempiti',
        });
        dispatch(getCurrentUserFailure());
        return;
      }

      if (!hasErrors) {
        await createUserWithEmailAndPassword(auth, email, password);
        history.replace('/');
      }
    } catch (error) {
      reducerDispatch({
        type: 'auth/errorMessage',
        payload: makeAuthErrorMessage(error.message),
      });
      dispatch(getCurrentUserFailure());
    }
  }

  // hadles input onChange
  function handleChange(e, actionType) {
    reducerDispatch({ type: actionType, payload: e.target.value });
    if (e.target.value !== '') {
      dispatch(clearErrors());
    }
  }

  //state to set password visible
  const [passwordVisible, setPasswordVisible] = useState(false);

  //passwod visibility
  function setPasswordVisibility() {
    let passwordInputs = document.querySelectorAll('.pws');
    passwordInputs.forEach(input => {
      if (!passwordVisible) {
        setPasswordVisible(true);
        input.type = 'text';
      } else {
        setPasswordVisible(false);
        input.type = 'password';
      }
    });
  }

  // confirm password validation
  function confirmPassword(e) {
    let targetPws = e.target.value;
    // Le password devono combaciare
    if (confirmRef.current.value !== targetPws) {
      reducerDispatch({
        type: 'auth/errorMessage',
        payload: 'Le password devono combaciare',
      });
      dispatch(getCurrentUserFailure());
    } else {
      dispatch(clearErrors());
    }
  }

  return (
    <div className='w-80 px-12 xs:px-6 sm:px-0 sm:w-96 min-h-screen flex flex-col justify-center -mt-10'>
      {authForm?.loginForm ? (
        <>
          <Login
            loginHandler={loginHandler}
            onChange={handleChange}
            passwordVisible={passwordVisible}
            event={setPasswordVisibility}
          />
          <FormFooter
            text='Non hai un account?'
            actionText='Iscriviti'
            dispatch={reducerDispatch}
            dispatchPayload={false}
          />
        </>
      ) : (
        <>
          <Signup
            onChange={handleChange}
            registerHandler={registerHandler}
            passwordVisible={passwordVisible}
            confirmPassword={confirmPassword}
            event={setPasswordVisibility}
            reference={confirmRef}
          />
          <FormFooter
            text='Hai già un account?'
            actionText='Accedi'
            dispatch={reducerDispatch}
            dispatchPayload={true}
          />
        </>
      )}
      <p className='text-red-600 w-70'>{authForm?.errorMessage}</p>
    </div>
  );
};

export default AuthPage;
