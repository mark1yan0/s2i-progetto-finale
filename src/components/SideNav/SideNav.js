import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Weather from './Weather';
import { useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import UserDropDown from '../UserDropDown';

export const SideNav = () => {
  //sidebar state
  const [openSidebar, setOpenSidebar] = useState(false);
  console.log();
  const { user } = useSelector(state => state.user);

  function toggleSidebarHandler() {
    if (openSidebar) {
      setOpenSidebar(false);
    } else {
      setOpenSidebar(true);
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 h-screen bg-primary-dark pt-19 w-10 md:w-72 ${
        openSidebar && 'w-72'
      }`}
      style={{ zIndex: 10 }}
    >
      <h1
        className={`md:hidden py-3 cursor-pointer text-text-light hover:bg-primary-light text-xl ${
          openSidebar ? 'px-6' : 'pl-2'
        }`}
        onClick={toggleSidebarHandler}
      >
        {openSidebar ? <MdOutlineClose /> : <GiHamburgerMenu />}
      </h1>
      <div
        className={`h-full md:flex flex-col justify-between ${
          openSidebar ? 'flex' : 'hidden'
        }`}
      >
        {/* //links */}
        <div className={`flex flex-col justify-between text-text-light `}>
          <NavLink
            onClick={toggleSidebarHandler}
            className='px-6 py-2 hover:bg-primary-light'
            activeStyle={{ background: '#fff', color: '#3A435E' }}
            exact
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            onClick={toggleSidebarHandler}
            className='px-6 py-2 hover:bg-primary-light'
            activeStyle={{ background: '#fff', color: '#3A435E' }}
            to='/news'
          >
            News
          </NavLink>
          <NavLink
            onClick={toggleSidebarHandler}
            className='px-6 py-2 hover:bg-primary-light'
            activeStyle={{ background: '#fff', color: '#3A435E' }}
            to='/covid'
          >
            Covid 19
          </NavLink>

          <div className='px-6 py-2 sm:hidden'>
            {user && (
              <UserDropDown
                userEmail={user?.email}
                toggleSidebar={toggleSidebarHandler}
              />
            )}
          </div>
        </div>
        <Weather />
      </div>
    </nav>
  );
};

export default SideNav;
