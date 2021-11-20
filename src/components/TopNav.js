import React from 'react';
import { NavLink } from 'react-router-dom';
//icons
import { FaUserAlt } from 'react-icons/fa';
//components
import Button from '../components/Button';

const TopNav = () => {
  return (
    <nav className='w-full fixed top-0 bg-primary-dark z-10 flex justify-between items-center px-6 py-3 text-text-light'>
      <h1>
        <NavLink className='text-5xl' exact to='/'>
          LOGO
        </NavLink>
      </h1>
      <ul className='flex items-center justify-between w-24'>
        <li>
          <NavLink to='/saved'>Salvati</NavLink>
        </li>

        <li>
          <NavLink to='/auth'>
            <FaUserAlt className='text-xl' />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
