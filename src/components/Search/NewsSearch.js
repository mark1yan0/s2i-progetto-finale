import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import useSearchNews from '../../hooks/useSearchNews';

const NewsSearch = () => {
  // searchbar state
  const [search, setSearch] = useState('');
  useSearchNews(search);

  function updateSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <form className='flex mt-2 sm:mt-0'>
      <div className='relative'>
        <BsSearch
          className='text-xl absolute left-2 text-primary-dark'
          style={{ bottom: 5 }}
        />
        <input
          className='rounded-full pl-8 pr-2 py-1 focus:outline text-primary-dark focus:border-primary-dark'
          placeholder='Cerca Notizie'
          type='text'
          onChange={updateSearch}
        />
      </div>
    </form>
  );
};

export default NewsSearch;
