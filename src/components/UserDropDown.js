import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import { FaUserAlt } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import { VscLibrary } from 'react-icons/vsc';
import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { userSignedOut } from '../services/authSlice';
import { useDispatch } from 'react-redux';
import { newsSelector } from '../services/newsSlice';

const UserDropDown = ({ userEmail, toggleSidebar }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { readLater, loading } = useSelector(newsSelector);

  async function logoutHandler() {
    try {
      await signOut(auth);
      dispatch(userSignedOut());
    } catch (error) {
      console.log(error);
    }
  }

  const submenu = open ? 'flex flex-col' : 'hidden';
  return (
    <div className='relative'>
      <Button
        onEvent={() => setOpen(!open)}
        icon={<FaUserAlt />}
        text={userEmail}
        primary
      />
      <ul
        className={`${submenu} absolute bg-gray-50 text-text-dark top-12 left-2 rounded`}
        style={{ width: 200, zIndex: 9999 }}
      >
        <NavLink
          className='hover:bg-gray-100 p-2 rounded flex items-center cursor-pointer'
          to='/saved'
          onClick={() => {
            setOpen(false);
            toggleSidebar && toggleSidebar();
          }}
        >
          <VscLibrary className='mr-2' />
          La mia Libreria
          {!loading && readLater.length > 0 && (
            <span className='ml-2 px-2 rounded-full text-text-light bg-primary-dark'>
              {readLater.length}
            </span>
          )}
        </NavLink>
        <li
          className='hover:bg-gray-100 p-2 rounded flex items-center cursor-pointer'
          onClick={() => {
            setOpen(false);
            logoutHandler();
            toggleSidebar && toggleSidebar();
          }}
        >
          <IoLogOutOutline />
          <p className='ml-2'>Esci</p>
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
