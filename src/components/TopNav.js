import React, { useState, useEffect } from 'react';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import {
  getCurrentUser,
  getCurrentUserSuccess,
  getCurrentUserFailure,
  userSignedOut,
} from '../services/authSlice';
import { setDefaultWeather } from '../services/weatherSlice';
import getCurrentLocation from '../utilities/getCurrentLocation';
import { useSelector, useDispatch } from 'react-redux';
import SnackBar from './SnackBar';
import UserDropDown from './UserDropDown';

const TopNav = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
  });
  // user
  useEffect(() => {
    dispatch(getCurrentUser());
    try {
      onAuthStateChanged(auth, currentUser => {
        if (currentUser) {
          dispatch(getCurrentUserSuccess(currentUser));
          history.replace(location.pathname);
          setSnackbar({
            open: true,
            message: 'Accesso avvenuto con successo!',
          });
          setTimeout(
            () =>
              setSnackbar({
                open: false,
                message: '',
              }),
            2000
          );
        } else {
          dispatch(userSignedOut());
        }
      });
    } catch (error) {
      dispatch(getCurrentUserFailure());
    }
    // eslint-disable-next-line
  }, []);

  // user location for weather forecasts
  const [userLocation, setUserLocation] = useState(undefined);
  useEffect(() => {
    getCurrentLocation(setUserLocation);
  }, []);

  // sets user location for forecast
  useEffect(() => {
    if (userLocation) {
      dispatch(
        setDefaultWeather({
          isGeolocation: true,
          location: userLocation,
        })
      );
    }
    // eslint-disable-next-line
  }, [userLocation]);

  return (
    <nav
      className='w-full fixed top-0 bg-primary-dark z-10 flex justify-between items-center px-2 sm:px-6 py-3 text-text-light'
      style={{ zIndex: 110 }}
    >
      <h1>
        <NavLink className='text-5xl' exact to='/'>
          UpToDate
        </NavLink>
      </h1>
      {user && (
        <div className='hidden sm:block'>
          <UserDropDown userEmail={user?.email} />
        </div>
      )}
      {snackbar.open && <SnackBar type='success' message={snackbar.message} />}
    </nav>
  );
};

export default TopNav;
