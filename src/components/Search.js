import React from 'react';

const CovidSearch = () => {
  // function updateSearch(e) {
  //   setSearch(e.target.value);
  // }

  // function getSearch(e) {
  //   e.preventDefault();
  //   setQuery(search);
  //   setSearch('');
  // }
  return (
    <form>
      <input
        className='rounded-full px-2 py-1 focus:outline text-primary-dark focus:border-primary-dark'
        placeholder='Cerca Paese'
        type='text'
        // value={search}
        // onChange={updateSearch}
      />
    </form>
  );
};

export default CovidSearch;
