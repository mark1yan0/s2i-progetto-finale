import React, { useState, useEffect } from 'react';
import { VscSearchStop } from 'react-icons/vsc';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { fetchCovidStats } from '../../services/covidSlice';
import { useDebounce } from 'use-debounce/lib';

const CovidSearch = () => {
  let width = window.innerWidth;
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(true);

  // searchbar state
  const [search, setSearch] = useState('');
  const [term] = useDebounce(search === '' ? 'italy' : search, 300);
  useEffect(() => {
    if (term) dispatch(fetchCovidStats(term)); //country in english
  }, [dispatch, term]);

  useEffect(() => {
    setExpanded(width > 500 ? true : false);
  }, [width]);

  function updateSearch(e) {
    setSearch(e.target.value);
  }

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
              onChange={updateSearch}
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

export default CovidSearch;
