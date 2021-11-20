import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Weather from './Weather';

export const SideNav = () => {
  //sidebar state
  //create context, so that when clicked on an item list it closes
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 h-screen bg-primary-dark pt-19 w-10 sm:w-72 ${
        openSidebar && 'w-72'
      }`}
    >
      <div className='h-full flex flex-col justify-between'>
        {/* //links */}
        <div className='flex flex-col justify-between  text-text-light'>
          <h1
            className='sm:hidden'
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            Open
          </h1>

          <NavLink
            className='px-6 py-2 hover:bg-primary-light'
            activeStyle={{ background: '#fff', color: '#3A435E' }}
            exact
            to='/'
          >
            Home
          </NavLink>

          <NavLink
            className='px-6 py-2 hover:bg-primary-light'
            activeStyle={{ background: '#fff', color: '#3A435E' }}
            to='/news'
          >
            News
          </NavLink>

          <NavLink
            className='px-6 py-2 hover:bg-primary-light'
            activeStyle={{ background: '#fff', color: '#3A435E' }}
            to='/covid'
          >
            Covid 19
          </NavLink>
        </div>
        <Weather />
      </div>
    </nav>
  );
};

export default SideNav;
