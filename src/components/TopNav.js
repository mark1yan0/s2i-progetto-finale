import React, { useState, useEffect } from 'react';
import { auth } from '../firebase-config';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import {
  getCurrentUser,
  getCurrentUserSuccess,
  getCurrentUserFailure,
  userSignedOut,
} from '../services/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import SnackBar from './SnackBar';
//icons
import { FaUserAlt } from 'react-icons/fa';

const TopNav = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    dispatch(getCurrentUser());
    try {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        if (currentUser) {
          dispatch(getCurrentUserSuccess(currentUser));
          history.replace(location.pathname);
          setLoggedIn(true);
          setTimeout(() => setLoggedIn(false), 2000);
        } else {
          dispatch(userSignedOut());
          console.log('user singed out');
        }
      });
      return unsubscribe;
    } catch (error) {
      dispatch(getCurrentUserFailure());
    }
  }, []);

  async function logoutHandler() {
    try {
      await signOut(auth);
      dispatch(userSignedOut());
      history.push('/auth');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav className='w-full fixed top-0 bg-primary-dark z-10 flex justify-between items-center px-6 py-3 text-text-light'>
      <h1>
        <NavLink className='text-5xl' exact to='/'>
          LOGO
        </NavLink>
      </h1>
      {user ? (
        <ul
          className='flex items-center justify-between'
          style={{ width: '20rem' }}
        >
          <li>
            <p>Hello: {user?.email}</p>
          </li>
          <li>
            <NavLink to='/saved'>Salvati</NavLink>
          </li>
          <li className='cursor-pointer' onClick={logoutHandler}>
            <p>Esci</p>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <NavLink to='/auth'>
              <FaUserAlt className='text-xl' />
            </NavLink>
          </li>
        </ul>
      )}
      {loggedIn && <SnackBar type='success' message='Logged in successfully' />}
    </nav>
  );
};

export default TopNav;
