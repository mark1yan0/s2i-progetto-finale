import React, { useState } from 'react';
import { useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { VscSearchStop } from 'react-icons/vsc';

const Search = () => {
  let width = window.innerWidth;
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    setExpanded(width > 500 ? true : false);
  }, [width]);
  // function updateSearch(e) {
  //   setSearch(e.target.value);
  // }

  // function getSearch(e) {
  //   e.preventDefault();
  //   setQuery(search);
  //   setSearch('');
  // }
  return (
    <form className='flex mt-2 sm:mt-0'>
      {expanded ? (
        <>
          <div className='relative'>
            <BsSearch
              className='text-xl absolute left-2 text-primary-dark'
              style={{ bottom: 5 }}
            />
            <input
              className='rounded-full pl-8 pr-2 py-1 focus:outline text-primary-dark focus:border-primary-dark'
              placeholder='Cerca Paese'
              type='text'
              // value={search}
              // onChange={updateSearch}
            />
          </div>
          <VscSearchStop
            className='sm:hidden cursor-pointer mt-2 ml-5 text-xl'
            onClick={() => setExpanded(false)}
          />
        </>
      ) : (
        <BsSearch
          className='sm:hidden cursor-pointer mt-2 text-xl'
          onClick={() => setExpanded(true)}
        />
      )}
    </form>
  );
};

export default Search;
