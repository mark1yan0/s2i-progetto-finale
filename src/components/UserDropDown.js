import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import { FaUserAlt } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import { VscLibrary } from 'react-icons/vsc';

const UserDropDown = ({ logout, userEmail }) => {
  const [open, setOpen] = useState(false);

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
          onClick={() => setOpen(false)}
        >
          <IoLogOutOutline className='mr-2' />
          Salvati
        </NavLink>
        <li
          className='hover:bg-gray-100 p-2 rounded flex items-center cursor-pointer'
          onClick={() => {
            setOpen(false);
            logout();
          }}
        >
          <VscLibrary />
          <p className='ml-2'>Esci</p>
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
